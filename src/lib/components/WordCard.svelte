<script lang="ts">
  import { getTermByKana } from "$lib/dictionary";
  import { resolve } from "$app/paths";

  let { kana } = $props();

  const term = $derived(getTermByKana(kana));

  const resolveRouteOrUrl = (routeOrUrl: string) => {
    if(routeOrUrl.startsWith("https://") || routeOrUrl.startsWith("http://")) 
      return routeOrUrl;
    else return resolve(routeOrUrl as any);
  }
</script>

{#if term}
<a class="wc" href={resolveRouteOrUrl(term.routeOrUrl)}>
  {term.name}

  <span class="popup">
    <strong>{term.name}</strong>

    {#if term.description}
      <div class="desc">
        {term.description}
      </div>
    {/if}

    {#if term.tags.length}
      <div class="tags">
        {#each term.tags as tag}
          <span class="tag">{tag.name}</span>
        {/each}
      </div>
    {/if}
  </span>
</a>
{:else}
<span class="wc-missing">{kana}</span>
{/if}

<style>
.wc {
  position: relative;
  border-bottom: 1px dotted #003160;
  color: #003160;
  text-decoration: none;
}

.popup {
  position: absolute;
  bottom: 130%;
  left: 0;

  width: 260px;
  padding: 0.7rem 0.9rem;

  background: #111827;
  color: #e5e7eb;

  font-size: 0.85rem;
  border-radius: 8px;

  opacity: 0;
  pointer-events: none;
  transform: translateY(6px);
  transition: 0.15s ease;
}

.wc:hover .popup {
  opacity: 1;
  transform: translateY(0);
}

.desc {
  margin-top: 0.4rem;
}

.tags {
  margin-top: 0.5rem;
}

.tag {
  display: inline-block;
  margin-right: 0.3rem;
  padding: 0.1rem 0.35rem;
  font-size: 0.7rem;
  border-radius: 4px;
  background: #374151;
}

.wc-missing {
  color: red;
  border-bottom: 1px dashed red;
}
</style>