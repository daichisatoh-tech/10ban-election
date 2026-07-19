import type { CandidateColor } from "./theme";

export type NewsArticle = {
  slug: string;
  candidate: CandidateColor;
  candidateName: string;
  headline: string;
  site: string;
  date: string;
  snippet: string;
  body: string[];
};

export const newsSite = "キャンパスウォッチ";

export const newsArticles: NewsArticle[] = [
  {
    slug: "yamada-cat",
    candidate: "a",
    candidateName: "山田あおい",
    headline: "山田あおい候補、お昼休みに学食裏で猫へ餌やりの目撃情報",
    site: newsSite,
    date: "8/6",
    snippet: "選挙運動の合間、学食裏で野良猫にエサをあげる山田候補の姿が目撃された。",
    body: [
      "学生代表選挙が本格化するなか、学食裏の駐輪場付近で、山田あおい候補が野良猫に餌をあげている場面が目撃された。",
      "目撃した学生によると、山田候補は数年前からこの一帯に住み着く猫の世話を続けているという。「選挙運動で忙しいはずなのに、毎日欠かさず来ている」と話す関係者も。",
      "政策とは直接関係のない一幕だが、SNS上では「意外な一面」「素敵」といった声が上がっている。",
    ],
  },
  {
    slug: "yamada-shishoku",
    candidate: "a",
    candidateName: "山田あおい",
    headline: "深夜の学食厨房、試作メニューを味見する山田候補の姿",
    site: newsSite,
    date: "7/28",
    snippet: "閉店後の学食で、栄養士とともに新メニューを試食する様子が目撃された。",
    body: [
      "夜9時過ぎ、すでに営業を終えた学食の厨房で、山田あおい候補が栄養士とみられる職員と一緒に何かを試食している様子が目撃された。",
      "居合わせた職員によると「値下げ後も栄養バランスを崩さないメニュー構成を、何度も一緒に考えている」とのこと。政策発表の裏側で、地道な調整が続いていたようだ。",
      "「言うだけでなく、ちゃんと現場に来てくれるのがありがたい」と話す職員もおり、学食スタッフからの評判は上々のようだ。",
    ],
  },
  {
    slug: "yamada-baito",
    candidate: "a",
    candidateName: "山田あおい",
    headline: "【真相】山田あおい候補「バイト経験なし」発言は驚きの謙虚さだった!?",
    site: "推せ！あおい部（非公式ファンブログ）",
    date: "8/15",
    snippet: "「経験がない」発言の裏には、あおいちゃんの知られざる謙虚さがあった――独自解説。",
    body: [
      "先日話題になった、山田あおい候補の「学食でのアルバイト経験はない」という発言。実はこれ、あおいちゃんの「謙虚さ」の表れだったことが、関係者(自称)への取材でわかった。",
      "山田候補は1年次からずっと学食運営委員として無償で現場に立ち続けており、「お給料をもらうアルバイトと呼ぶのはおこがましい」と考え、あえて『経験なし』と答えていたのだという。つまり、普通のバイト経験より、ずっと尊い実績を積んでいたということ。",
      "この事実を知ったファンからは「さすがあおいちゃん」「株が爆上がりした」「もっと評価されるべき」といった声が続出。心配は一瞬で歓喜に変わった。",
    ],
  },
  {
    slug: "suzuki-wasuremono",
    candidate: "b",
    candidateName: "鈴木りょう",
    headline: "鈴木りょう候補、早朝に後輩の忘れ物を届ける姿が目撃される",
    site: newsSite,
    date: "8/11",
    snippet: "始発前の暗い構内、後輩の教科書を届けに走る鈴木候補の姿が。",
    body: [
      "早朝6時台、まだ人影もまばらなキャンパスで、鈴木りょう候補が後輩とみられる学生に教科書を手渡す場面が目撃された。",
      "目撃者によると「前日に忘れ物をしたと聞いて、わざわざ届けに来てくれた」とのこと。学友会活動を通じて、こうした細やかな気配りが評判になっているという。",
      "選挙戦のさなかでも変わらない人柄に、「これが本当の代表の姿」と評価する声も上がっている。",
    ],
  },
  {
    slug: "suzuki-sekkei",
    candidate: "b",
    candidateName: "鈴木りょう",
    headline: "深夜の学友会室、駐車場設計図とにらめっこする鈴木候補",
    site: newsSite,
    date: "8/5",
    snippet: "終電を逃してでも図面を見直す鈴木候補の姿が目撃された。",
    body: [
      "夜11時過ぎ、学友会室の明かりがついたままになっていたため様子を見に行った学生が、鈴木りょう候補が第2駐車場の設計図らしき紙を広げて検討している場面に遭遇した。",
      "「終電、もうないんじゃ」と声をかけると、「大学側にちゃんとした案を出さないと、ただの理想論で終わってしまう」と笑っていたという。",
      "政策の実現可能性にこだわる姿勢がうかがえる一幕として、学内で話題になっている。",
    ],
  },
  {
    slug: "suzuki-shaken",
    candidate: "b",
    candidateName: "鈴木りょう",
    headline: "鈴木候補の愛車、車検切れの疑いが浮上",
    site: newsSite,
    date: "8/20",
    snippet: "「駐車場を増やす」候補本人の車に、車検切れの指摘が。",
    body: [
      "駐車場政策を掲げる鈴木りょう候補だが、本人の愛車のフロントガラスに貼られたステッカーが、有効期限切れとみられることをSNSユーザーが指摘し話題になっている。",
      "鈴木陣営は「点検予約は済んでおり、手続き上の一時的なもの」とコメントしている。",
      "政策の説得力に影響するものではないとの見方が大勢だが、「駐車場の前に自分の車検を」といった揶揄も一部で見られた。",
    ],
  },
  {
    slug: "saionji-tabako",
    candidate: "c",
    candidateName: "西園寺隼人",
    headline: "【目撃】西園寺隼人候補、喫煙禁止エリアでタバコを吸う姿",
    site: newsSite,
    date: "8/18",
    snippet: "下宿坂の喫煙禁止エリアで、一人タバコを吸う西園寺候補の姿が目撃された。",
    body: [
      "「頑張った人が報われる大学に」と厳格なルール運用を訴える西園寺隼人候補。しかしその本人が、下宿坂の喫煙禁止エリアでタバコを吸う姿が目撃されていたことがわかった。",
      "目撃した学生は「規則に厳しいことを言っている本人がルールを破っているのは驚いた」と話す。",
      "西園寺陣営はこの件についてコメントを避けている。有言実行を掲げる候補の「素顔」に、学内では賛否の声が広がっている。",
    ],
  },
  {
    slug: "saionji-toshokan",
    candidate: "c",
    candidateName: "西園寺隼人",
    headline: "深夜の図書館、一人黙々と資料を読み込む西園寺候補",
    site: newsSite,
    date: "8/3",
    snippet: "閉館直前の図書館で、予算資料を読み込む姿が目撃された。",
    body: [
      "閉館30分前の図書館自習室で、西園寺隼人候補が学生自治会の過去の予算資料らしき束を広げ、黙々とメモを取っている姿が目撃された。",
      "居合わせた学生によると「話しかけても気づかないくらい集中していた」とのこと。政策発表の裏で、地道な下調べを重ねていたことがうかがえる。",
      "普段のSNSでの挑発的な物言いとのギャップに、「意外と真面目」と驚く声も上がっている。",
    ],
  },
  {
    slug: "saionji-ogori",
    candidate: "c",
    candidateName: "西園寺隼人",
    headline: "「甘さは違う」と語る西園寺候補、実は後輩に奢っていた？",
    site: newsSite,
    date: "8/22",
    snippet: "厳しい発言とは裏腹に、後輩の食事代を払う姿が目撃され話題に。",
    body: [
      "「優しさと甘さは違う」と繰り返し訴える西園寺隼人候補だが、学食で後輩とみられる学生の食事代を代わりに払う場面が目撃された。",
      "目撃した学生は「口では厳しいこと言うくせに、結局面倒見がいい」と苦笑い。西園寺陣営はこの件について特にコメントしていない。",
      "SNS上の挑発的な投稿とのギャップに、「本当はいい人なのでは」という声も一部で上がっている。",
    ],
  },
];

function parseDate(date: string): number {
  const [month, day] = date.split("/").map(Number);
  return month * 100 + day;
}

function byDate(a: NewsArticle, b: NewsArticle): number {
  return parseDate(a.date) - parseDate(b.date);
}

export const candidateANews = newsArticles
  .filter((a) => a.candidate === "a")
  .sort(byDate);
export const candidateBNews = newsArticles
  .filter((a) => a.candidate === "b")
  .sort(byDate);
export const candidateCNews = newsArticles
  .filter((a) => a.candidate === "c")
  .sort(byDate);
