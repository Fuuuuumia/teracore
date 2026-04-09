<script lang="ts">
  import { resolve } from "$app/paths";
  import { getTermByKana } from "$lib/dictionary";

  //Word検索キー格納・検索結果格納・リンク解決
  let { kana } = $props();
  const term = $derived(getTermByKana(kana));
  const resolveRouteOrUrl =(routeOrUrl: string) => {
    if(routeOrUrl.startsWith("https://") || routeOrUrl.startsWith("http://")) 
      return routeOrUrl;
    else return resolve(routeOrUrl as any);
  }

  //ポップアップウィンドウ位置計算(wordEl宣言部分要修正かもしれん)
  let popupLeft = $state(0);
  const popupWidth = 280;
  let wordEl = $state<HTMLAnchorElement | null>(null);
  function updatePopupPosition() {
    if (!wordEl) return;
    const rect = wordEl.getBoundingClientRect();
    const screenWidth = window.innerWidth;

    const diff = screenWidth - rect.left -popupWidth;

    if (diff < 0) {
      popupLeft = diff - 30;
    } else {
      popupLeft = 0;
    }
  }
</script>

{#if term}
<a 
  class="wc" 
  href={resolveRouteOrUrl(term.routeOrUrl)}
  bind:this={wordEl}
  onmouseenter={updatePopupPosition}
>
  {term.name}

  <span 
    class="popup"
    style:left={`${popupLeft}px`}
    style:width={`${popupWidth}px`}
  >
    <strong>{term.name}</strong>

    {#if term.description}
      <span class="desc">
        {term.description}
      </span>
    {/if}

    {#if term.tags.length}
      <span class="tags">
        {#each term.tags as tag}
          <span class="tag">{tag.name}</span>
        {/each}
      </span>
    {/if}
  </span>
</a>
{:else}
<span class="wc-missing">{kana}</span>
{/if}

<style>
.wc{
  cursor: help;
  font-weight: 500;
  position: relative;
}

.popup {
  /*表示位置設定*/
  position: absolute;
  bottom: 140%;
  left: 0;

  /*テキストスタイル*/
  font-size: 0.85rem;
  line-height: 1.45;
  color: #111827;

  /*ポップアップの見た目*/
  padding: 0.8rem 1rem;
  background: #ffffff;
  border-radius: 10px;
  border: 1px solid #e5e7eb;
  box-shadow: 0 6px 20px rgba(0,0,0,0.12);

  /*標準状態(透過)*/
  opacity: 0;
  pointer-events: none;

  /*表示アニメーション+初期値*/
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
  display: block;
}

.tags {
  margin-top: 0.55rem;
  display: block;
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