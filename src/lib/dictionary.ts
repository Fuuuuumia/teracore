export interface Tag{
    name: string;           //表示される名前です
    kana: string;           //辞書順ソートに使用します、ひらがなでおねがいします。
    description?: string;   //未実装、タグの簡単な説明を書く？
}

export interface Term{
    name: string;           //表示される名前です
    kana: string;           //辞書順ソートに使用します、ひらがなでおねがいします。
    routeOrUrl: string;     //resolve前のパスか、http://もしくはhttps://で始まるURLを指定してください。
    tags: Tag[];            //意図的にタグを設定しない場合は空の配列にしてください。nameとkanaが完全に一致している場合は重複が削除されるので、他の人のつけたタグは(そんなに)気にしなくていいです。
    description?: string;   //未実装、用語の簡単な説明を書くと思います。
}

let terms: Term[] = [];
const modules = import.meta.glob("/src/routes/blog/*/terms.ts", {import: "terms", eager: true});
for(const path in modules){
  terms = terms.concat(modules[path] as Term[]);
}

let tmpTags: Tag[] = [];
for(let term of terms){
    tmpTags = tmpTags.concat(term.tags);
}
//この処理はあまりに変なタグをつけられると壊されます、変なことしないでね
export const tags = Array.from(new Map(tmpTags.map(tag => [tag.name + "-" + tag.kana, tag])).values());

export const getTermsByTagName = (tagName: string): Term[] => {
    if(tagName === "all") return terms;
    else{
        return terms.filter((term)=>term.tags.map((tag)=>tag.name).includes(tagName));
    }
}