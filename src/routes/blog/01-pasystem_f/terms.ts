import type { Term } from "$lib/dictionary";

export const terms: Term[] = [
    {
        name: "RCA",
        kana: "あーるしーえー2",
        routeOrUrl: "/blog/01-pasystem_f/04",
        description: "主に民生用オーディオ・映像機器で使われる丸いピン型のアンバランス接続コネクタ。ステレオ音声やコンポジット映像の接続に使われる。",
        tags: [{name: "アナログ", kana: "あなろぐ"}, {name: "ケーブル", kana: "けーぶる"}, {name: "音声", kana: "おんせい"},{name: "映像", kana: "えいぞう"}],
    },
    {
        name: "XLR",
        kana: "えっくすえるあーる",
        routeOrUrl: "/blog/01-pasystem_f/04",
        description: "業務用機器でよく使われる3ピンのバランス接続コネクタ。ノイズに強く、マイクやPA機器の接続に広く使われる。",
        tags: [{name: "アナログ", kana: "あなろぐ"}, {name: "ケーブル", kana: "けーぶる"}, {name: "音声", kana: "おんせい"}],
    },
    {
        name: "TRS",
        kana: "てぃーあーるえす",
        routeOrUrl: "/blog/01-pasystem_f/04",
        description: "Tip・Ring・Sleeveの3極構造のフォーンプラグ。バランス接続やステレオ信号の伝送に使われ、ヘッドホンや業務用音響機器で広く用いられる。",
        tags: [
            {name: "アナログ", kana: "あなろぐ"},
            {name: "ケーブル", kana: "けーぶる"},
            {name: "音声", kana: "おんせい"}
        ],
    },
    {
        name: "TS",
        kana: "てぃーえす",
        routeOrUrl: "/blog/01-pasystem_f/04",
        description: "Tip・Sleeveの2極構造のフォーンプラグ。アンバランス接続で、ギターや電子楽器などのモノラル信号の伝送によく使われる。",
        tags: [
            {name: "アナログ", kana: "あなろぐ"},
            {name: "ケーブル", kana: "けーぶる"},
            {name: "音声", kana: "おんせい"}
        ],
    },
];