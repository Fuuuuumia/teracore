<script lang="ts">
	import { onMount } from "svelte";
	import { base } from '$app/paths';

	let count: number = 0;
	let name: string = "Fumi";

	$: doubled = count * 2;

	function increment() {
		count++;
	}

	function handleInput(e: Event) {
		const target = e.target as HTMLInputElement;
		name = target.value;
	}

	onMount(() => {
		console.log("Mounted!");
	});


	const loadCode = `
export const load = async () => {
  return { message: "Hello" };
};
`;

	const serverCode = `
export const actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    return { success: true };
  }
};
`;

	const storeCode = `
import { writable } from 'svelte/store';

export const count = writable(0);
`;
</script>

<style>
	h1 {
		margin-bottom: 1rem;
	}

	h2 {
		margin-top: 2rem;
	}

	.box {
		padding: 1rem;
		border: 1px solid #ccc;
		margin-top: 1rem;
		border-radius: 8px;
	}

	pre {
		background: #111;
		color: #0f0;
		padding: 1rem;
		overflow-x: auto;
		border-radius: 6px;
	}
</style>

<h1>SvelteKit 書き方まとめ</h1>

<!-- ================= 基本構文 ================= -->
<h2>1. 変数とリアクティブ</h2>
<div class="box">
	<p>count: {count}</p>
	<p>doubled: {doubled}</p>
	<button on:click={increment}>+1</button>
</div>

<!-- ================= 双方向バインド ================= -->
<h2>2. 双方向バインド</h2>
<div class="box">
	<input bind:value={name} />
	<p>Hello {name}</p>
</div>

<!-- ================= 条件分岐 ================= -->
<h2>3. 条件分岐</h2>
<div class="box">
	{#if count > 5}
		<p>5より大きい</p>
	{:else}
		<p>5以下</p>
	{/if}
</div>

<!-- ================= ループ ================= -->
<h2>4. ループ</h2>
<div class="box">
	{#each [1,2,3,4] as num}
		<p>{num}</p>
	{/each}
</div>

<!-- ================= クラス制御 ================= -->
<h2>5. クラス制御</h2>
<div class="box">
	<p class:active={count > 3}>条件付きクラス</p>
</div>

<!-- ================= load関数 ================= -->
<h2>6. +page.ts（load関数）</h2>
<div class="box">
	<pre>{loadCode}</pre>
</div>

<!-- ================= server action ================= -->
<h2>7. +page.server.ts（Form Actions）</h2>
<div class="box">
	<pre>{serverCode}</pre>
</div>

<!-- ================= store ================= -->
<h2>8. Store</h2>
<div class="box">
	<pre>{storeCode}</pre>
</div>

<!-- ================= ナビ ================= -->
<h2>9. ページ遷移</h2>
<div class="box">
	<a href="{base}/about">/aboutへ</a>
</div>