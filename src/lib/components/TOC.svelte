<!--
  +layout.svelte style例
  .simplelog :global(.toc){
    background-color: <色>;
  }

  +layout.svelte style例

  .simplelog :global(a){
    color: var(--main-color);
    text-decoration: none;
    transition: 0.2s ease;
    border-color: var(--main-color);
  }
  .simplelog :global(a:not(.toc a)) {
    background: var(--bg-color);
    padding: 0 2px;
    border-bottom: 1px solid var(--main-color);
  }
  .simplelog :global(a:hover) {
    background: var(--main-color);
    color: var(--th-color);
  }
  .simplelog :global(a:not(.toc a)):hover) {
    border-radius: 0.25rem;
  }

  Pager-556を使う場合は :not(.pager a) も追加

-->

<script lang="ts">
import { onMount } from "svelte";

let { tag = ["h2", "h3"] }: { tag?: string[] } = $props();

type TOCitem = {
  id: string;
  text: string;
  level: number;
  children: TOCitem[];
};

let toc = $state<TOCitem[]>([]);

function createTOC(H: HTMLHeadingElement[]): TOCitem[] {
  const root: TOCitem = { id: "", text: "", level: -1, children: [] };
  const stack: TOCitem[] = [root];

  for (const h of H) {
    const level = tag.indexOf(h.tagName.toLowerCase());
    if (level === -1) continue;

    const item: TOCitem = {
      id: h.id,
      text: h.textContent,
      level,
      children: []
    };

    while (stack.length > 1 && stack[stack.length - 1].level >= level) {
      stack.pop();
    }

    stack[stack.length - 1].children.push(item);
    stack.push(item);
  }

  return root.children;
}

onMount(() => {
  const allH = Array.from(
    document.querySelectorAll(["h1", ...tag].join(","))
  ) as HTMLHeadingElement[];

  let seenTitle = false;

  const H = allH.filter((h) => {
    if (h.tagName.toLowerCase() === "h1") {
      seenTitle = true;
      return false;
    }
    return seenTitle;
  });

  toc = createTOC(H);
});
</script>

<div class="toc"><ul>
  {#each toc as item}
    {@render renderItem(item)}
  {/each}
</ul></div>

{#snippet renderItem(item: TOCitem)}
<li>
  <a href={"#" + item.id}>{item.text}</a>

  {#if item.children.length}
    <ul>
      {#each item.children as child}
        {@render renderItem(child)}
      {/each}
    </ul>
  {/if}
</li>
{/snippet}

<style>
  .toc{
    overflow: hidden;
    border-radius: 1rem;
    margin: 0 1rem;
  }
  .toc ul{
    margin: 1rem 1.5rem !important;
  }
  .toc li{
    margin: 0.3rem 0 !important;
  }
  .toc li ul{
    margin: 0 !important;
  }
</style>