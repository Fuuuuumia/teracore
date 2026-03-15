export interface Tag{
    name: string;
    kana: string;
}

export interface Term{
    name: string;       //表示される名前です
    kana: string;       //辞書順ソートに使用します、ひらがなでおねがいします。
    routeOrUrl: string; //resolve前のパスか、http://もしくはhttps://で始まるURLを指定してください。
    tags: Tag[];        //意図的にタグを設定しない場合は空の配列にしてください。
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