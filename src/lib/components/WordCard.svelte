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
  border-bottom: 1px dotted #6b7280;
  color: #1e3a8a; 
  text-decoration: none;
  cursor: help;
}

.popup {
  position: absolute;
  bottom: 140%;
  left: 0;

  width: 280px;
  padding: 0.8rem 1rem;

  background: #ffffff;
  color: #111827;

  font-size: 0.85rem;
  line-height: 1.45;

  border-radius: 10px;
  border: 1px solid #e5e7eb;
  box-shadow: 0 6px 20px rgba(0,0,0,0.12);

  opacity: 0;
  pointer-events: none;
  transform: translateY(8px);
  transition: opacity 0.15s ease, transform 0.15s ease;
  z-index: 50;
}

.wc:hover .popup {
  opacity: 1;
  transform: translateY(0);
}

.popup strong {
  display: block;
  font-size: 0.9rem;
  color: #0f172a;
}

.desc {
  margin-top: 0.35rem;
  color: #374151;
}

.tags {
  margin-top: 0.55rem;
}

.tag {
  display: inline-block;
  margin: 0.1rem 0.25rem 0 0;
  padding: 0.15rem 0.45rem;

  font-size: 0.68rem;
  border-radius: 999px;

  background: #eef2ff;
  color: #1e3a8a;
  border: 1px solid #c7d2fe;
}

.wc-missing {
  color: #dc2626;
  border-bottom: 1px dashed #dc2626;
}
</style>