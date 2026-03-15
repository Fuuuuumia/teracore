<!--
  +layout.svelte style例

  .simplelog :global(.toc){
    background-color: <色>;
  }
-->

<script lang="ts">
import { onMount } from "svelte";

let { toptext="", tag = ["h2", "h3"] }: { toptext?: string, tag?: string[] } = $props();

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

<div class="toc">
  <p>{toptext}</p>
  <ul>
    {#each toc as item}
      {@render renderItem(item)}
    {/each}
  </ul>
</div>

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
    padding: 1rem 1.5rem;
    margin: 0 1rem;
  }
  .toc p{
    margin: 0;
  }
  .toc ul{
    margin: 0;
  }
  .toc li{
    margin: 0.3rem 0 !important;
  }
  .toc li ul{
    padding-left: 1rem;
  }
</style>