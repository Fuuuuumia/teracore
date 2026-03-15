<script lang="ts">
    import { resolve } from "$app/paths";
    import { getTermsByTagName, tags} from "$lib/dictionary";

    const adan = ["あ", "か", "さ", "た", "な", "は", "ま", "や", "ら", "わ"];
    
    let listType: "terms" | "tags" = $state("terms");
    let selectedTag = $state("all");
    let sortedTags = [...tags].sort((a, b) => a.kana.localeCompare(b.kana, "jp"));
    let sortedTerms = $derived([...getTermsByTagName(selectedTag)].sort((a, b) => a.kana.localeCompare(b.kana, "jp")));

    const isKanaBetween = (kana: string, range: {start?: string, end?: string}) => {
        if(range.start && range.end){
            return kana.localeCompare(range.start, "jp") >= 0 && kana.localeCompare(range.end, "jp") < 0;
        }
        else if(range.start){
            return kana.localeCompare(range.start, "jp") >= 0;
        }
        else if(range.end){
            return kana.localeCompare(range.end, "jp") < 0;
        }
        else{
            return true;
        }
    }

    const resolveRouteOrUrl = (routeOrUrl: string) => {
        if(routeOrUrl.startsWith("https://") || routeOrUrl.startsWith("http://")) return routeOrUrl;
        else return resolve(routeOrUrl as any);
    }
</script>

<h1 class="title">teraCore dictionary</h1>
<div class="listType-menu">
    <button type="button" onclick={()=>{listType = "terms"}} style="{listType === "terms"? "font-weight: 600; color: #003160;": ""}">用語一覧</button>
    <button type="button" onclick={()=>{listType = "tags"}} style="{listType === "tags"? "font-weight: 600; color: #003160;": ""}">タグ一覧</button>
</div>
{#if listType === "terms"}
    <div class="filter-row">
        <div class="filter-input">
            <label for="ath-filter">タグ</label>
            <select id="ath-filter" bind:value={selectedTag}>
                <option value="all">すべて</option>
                {#each sortedTags as tag}
                    <option value={tag.name}>{tag.name}</option>
                {/each}
            </select>
        </div>
        <button class="reset-btn" onclick={()=>{selectedTag="all";}}>リセット</button>
    </div>
    <div class="toc">
        <p class="mokuji">目次</p>
        <div class="content">
            {#each adan as char}
                <p><a href="#{char}">{char}行</a></p>
            {/each}
        </div>
    </div>
    <div class="list">
        {#each adan as char}
            <h2 id={char} class="scroll-target">{char}行</h2>
            {#each [...sortedTerms].filter((term)=>isKanaBetween(term.kana, {start: char, end: adan.indexOf(char) < adan.length - 1? adan[adan.indexOf(char) + 1]: undefined})) as term}
                <p><a href={resolveRouteOrUrl(term.routeOrUrl)}>{term.name}</a></p>
            {/each}
        {/each}
    </div>
{:else}
    <div class="toc">
        <p class="mokuji">目次</p>
        <div class="content">
            {#each adan as char}
                <p><a href="#{char}">{char}行</a></p>
            {/each}
        </div>
    </div>
    <div class="list">
        {#each adan as char}
            <h2 id={char} class="scroll-target">{char}行</h2>
            {#each [...sortedTags].filter((tag)=>isKanaBetween(tag.kana, {start: char, end: adan.indexOf(char) < adan.length - 1? adan[adan.indexOf(char) + 1]: undefined})) as tag}
                <button type="button" onclick={()=>{selectedTag=tag.name; listType="terms"}}>{tag.name}</button>
            {/each}
        {/each}
    </div>
{/if}

<style>
    h1 {
        display: block;
        font-size: 2rem;
        color: #222;
        font-weight: bold;
        unicode-bidi: isolate;
        margin-bottom: 0.5rem;
    }
    .scroll-target{
        scroll-margin-top: 60px;
    }
    .reset-btn {
        padding: 0.6rem 1.2rem;
        background-color: white;
        color: #333;
        border: 1px solid #d0d5dd;
        border-radius: 6px;
        cursor: pointer;
        font-size: 0.875rem;
        font-weight: 500;
        transition: all 0.2s;
    }
    .reset-btn:hover {
        background-color: #f9f9f9;
        border-color: #999;
    }
    .list p, .list button{
        font-size: 2rem;
        font-weight: 600;
        color: #003160;
        margin: 15px;
        text-decoration: underline;
    }
    .list h2{
        font-size: 1.5rem;
        font-weight: 500;
        color: #003160;
        margin-top: 30px;
        margin-bottom: 30px;
    }
    .list{
        margin-top: 30px;
        margin-left: 2rem;
    }
    .toc{
        padding: 5px;
        margin-left: 2rem;
        margin-top: 1rem;
        background-color: #f7f7f7;
        width: 300px;
        border-radius: 5px;
        border: 0.1rem solid #00316010 ;
    }
    .content{
        margin-left: 1rem;
        margin-top: 1rem;
    }
    .mokuji{
        font-size: 1.2rem;
        font-weight: 500;
    }
    .filter-input select:focus{
        outline: none;
        border-color: #333;
        box-shadow: 0 0 0 3px rgba(51, 51, 51, 0.1);
    }
    .filter-input select{
        padding: 0.6rem 0.8rem;
        border: 1px solid #d0d5dd;
        border-radius: 6px;
        font-size: 0.875rem;
        font-family: inherit;
        background-color: white;
        transition: border-color 0.2s;
    }
    .filter-input label {
        font-size: 0.75rem;
        font-weight: 600;
        color: #333;
        text-transform: uppercase;
        letter-spacing: 0.5px;
    }
    .title{
        padding: 2rem;
    }
    .filter-input {
        display: flex;
        flex-direction: column;
        gap: 0.4rem;
    }
    .filter-row {
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;
        align-items: flex-end;
        padding: 1rem;
        background-color: white;
        border-radius: 12px;
        margin-left: 2rem;
    }
    .listType-menu{
        display: flex;
        justify-content: space-evenly;
    }
    .listType-menu button{
        font-size: 1.5em;
        font-weight: 400;
        color: gray;
        transition: 0.5s;
    }
</style>
