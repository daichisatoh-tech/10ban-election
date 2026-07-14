import type { CandidateColor } from "./theme";

export type PostPhoto = {
  emoji: string;
  caption: string;
  src?: string;
};

export type PostQuote = {
  color: CandidateColor;
  name: string;
  handle: string;
  date: string;
  text: string;
};

export type Post = {
  id: string;
  date: string;
  text: string;
  photo?: PostPhoto;
  quote?: PostQuote;
  likes: number;
  retweets: number;
};

export const candidateAHandle = "@aoi_gakushoku";
export const candidateBHandle = "@ryo_chusha";
export const candidateCHandle = "@saionji_seek";

export const candidateAPosts: Post[] = [
  {
    id: "a1",
    date: "7/7",
    text: "はじめまして、山田あおいです。教育学部4年、小学校教員を目指しています。この度、学生代表選挙に立候補することを決めました。まずは学食の値下げから、みんなの大学生活を変えていきます。よろしくお願いします! #山田あおいと一緒に",
    photo: {
      emoji: "📢",
      caption: "出馬表明の様子（掲示板前にて）",
      src: "/posts/candidate-a/a1-shutsuba.png",
    },
    likes: 142,
    retweets: 38,
  },
  {
    id: "a2",
    date: "7/14",
    text: "学食運営委員のみなさんと打ち合わせしてきました。値下げのために、まずは利用実態のデータを集めています。みんなが本当に困っていることを、数字でちゃんと伝えたい。",
    photo: {
      emoji: "📊",
      caption: "学食アンケート集計作業中",
      src: "/posts/candidate-a/a2-enquete.png",
    },
    likes: 98,
    retweets: 21,
  },
  {
    id: "a3",
    date: "7/21",
    text: "政策の詳細を発表します!\n・日替わり定食 450円→400円\n・カレー 350円→300円\n・100円モーニング新設\n・営業時間20時まで延長\n年間200日通えば、1万円の節約に。みんなの毎日を、ちょっと軽くしたいです。",
    likes: 210,
    retweets: 64,
  },
  {
    id: "a4",
    date: "7/29",
    text: "第2駐車場、たしかに大事な視点だと思う。でも車通学の学生は全体の3割。7割の学生には直接関係がない政策に、学食より多くの予算を割くのは本当に優先順位として正しいのかな…みんなで考えたい。",
    quote: {
      color: "b",
      name: "鈴木りょう",
      handle: candidateBHandle,
      date: "7/22",
      text: "政策を発表します!グラウンド一部活用で第2駐車場100台分を新設。朝の駐車場の取り合いをなくし、希望者全員が車通学可能に。",
    },
    likes: 87,
    retweets: 45,
  },
  {
    id: "a5",
    date: "8/4",
    text: "「頑張った人だけが報われる」というけれど、頑張りたくても頑張れない事情を抱えている人だっています。みんなが安心して毎日を過ごせる大学の方が、私は好きです。50円は、人気取りじゃなくて、みんなの生活を守るための数字です。",
    quote: {
      color: "c",
      name: "西園寺隼人",
      handle: candidateCHandle,
      date: "8/1",
      text: "50円で買われてますよ‼️早く気づいて‼️‼️",
    },
    likes: 175,
    retweets: 58,
  },
  {
    id: "a6",
    date: "8/6",
    text: "オープンキャンパスで模擬店のお手伝いをしてきました!高校生のみんなにも「学食安くなったらいいな」って言ってもらえて嬉しかったです。応援ありがとう!",
    photo: {
      emoji: "🏫",
      caption: "オープンキャンパスにて",
      src: "/posts/candidate-a/a6-opencampus.png",
    },
    likes: 76,
    retweets: 12,
  },
  {
    id: "a7",
    date: "8/14",
    text: "応援メッセージがたくさん届いています。「お金がなくて学食我慢してた」「本当に助かる」…この声を無駄にしないよう、最後まで全力でがんばります。",
    likes: 130,
    retweets: 30,
  },
  {
    id: "a8",
    date: "8/25",
    text: "投票まであとわずかです。もう一度お伝えします。私が変えたいのは「みんなが毎日使う場所」です。特別な誰かのためじゃなく、全員のための1票を、私に託してもらえたら嬉しいです。",
    likes: 165,
    retweets: 52,
  },
];

export const candidateBPosts: Post[] = [
  {
    id: "b1",
    date: "7/7",
    text: "鈴木りょうです。教育学部4年、中学校体育教員志望。学友会副会長として、これまで大学側と交渉してきました。今度は学生代表として、みんなの「困った」をカタチにします。第2駐車場、必ず実現します。",
    photo: {
      emoji: "📢",
      caption: "出馬表明の様子",
      src: "/posts/candidate-b/b1-shutsuba.png",
    },
    likes: 135,
    retweets: 33,
  },
  {
    id: "b2",
    date: "7/12",
    text: "早朝9:00、駐車場の様子を見てきました。この時間ですでに満車間近…取り合いに負けた学生は、あと数分の差で遅刻になり、成績に響くこともあります。この不安、なくしたいです。",
    photo: {
      emoji: "🚗",
      caption: "朝の駐車場調査",
      src: "/posts/candidate-b/b2-chosa.png",
    },
    likes: 112,
    retweets: 29,
  },
  {
    id: "b3",
    date: "7/22",
    text: "政策を発表します!\n・グラウンドの一部を活用し、第2駐車場を100台分新設\n・朝の駐車場の取り合いをなくし、全希望者が車通学可能に\n・駐輪場の屋根を全面設置\n「自分には関係ない」で終わらせない大学に変えます。",
    likes: 198,
    retweets: 58,
  },
  {
    id: "b4",
    date: "8/2",
    text: "50円の値下げ、聞こえはいいけど、その裏でメニューの質や品数が削られたら本末転倒じゃないかな。安さのためのコストカットが、結局みんなの「おいしい」を奪うことにならないか心配です。",
    quote: {
      color: "a",
      name: "山田あおい",
      handle: candidateAHandle,
      date: "7/21",
      text: "政策の詳細を発表します!日替わり定食450円→400円、カレー350円→300円に値下げします。年間200日通えば1万円の節約に。",
    },
    likes: 101,
    retweets: 47,
  },
  {
    id: "b5",
    date: "8/10",
    text: "学友会として大学側と交渉してきた経験を活かして、駐車場担当の職員さんとも直接話してきました。実現に向けて、着実に進んでいます。",
    photo: {
      emoji: "🤝",
      caption: "大学職員との交渉の様子",
      src: "/posts/candidate-b/b5-kosho.png",
    },
    likes: 84,
    retweets: 16,
  },
  {
    id: "b6",
    date: "8/12",
    text: "「声の大きい人の要望」って言うけど、毎朝不安な思いをしている人たちの声を代弁するのが、代表の仕事じゃないんですか。公正さを語るなら、まず困っている人の話を聞いてからにしてほしいです。",
    quote: {
      color: "c",
      name: "西園寺隼人",
      handle: candidateCHandle,
      date: "8/9",
      text: "これマジ⁉️僕もこれからは車で行くわw✋😁やってくれるらしいから🈂️🔥🔥",
    },
    likes: 118,
    retweets: 39,
  },
  {
    id: "b7",
    date: "8/18",
    text: "「毎朝の駐車場の取り合いが本当にストレスだった」「代わりに声をあげてくれてありがとう」…そんな声をたくさんもらっています。困っている人に、ちゃんと届く政策を。",
    likes: 120,
    retweets: 27,
  },
  {
    id: "b8",
    date: "8/25",
    text: "投票まであとわずかです。声なき声を、カタチにする。そのために、まずは1票を私に預けてください。全力で大学と交渉し続けます。",
    likes: 150,
    retweets: 44,
  },
];

export const candidateCPosts: Post[] = [
  {
    id: "c1",
    date: "7/9",
    text: "【朗報】留年界隈の光、現る　留年生ワイ、選挙出ます\nこの大学の闇を暴くぞ、震えて眠れよ",
    photo: {
      emoji: "🧾",
      caption: "出馬表明の様子",
      src: "/posts/candidate-c/c1-shutsuba.png",
    },
    likes: 58,
    retweets: 41,
  },
  {
    id: "c2",
    date: "7/17",
    text: "学生自治会の過去3年分の予算執行資料を、情報公開請求で取り寄せました。「みんな平等に」の名の下に、使われずに消えている予算がいくらあるか、来週すべて公開します。",
    photo: {
      emoji: "📑",
      caption: "予算資料を分析中",
      src: "/posts/candidate-c/c2-yosan.png",
    },
    likes: 71,
    retweets: 66,
  },
  {
    id: "c3",
    date: "7/24",
    text: "掲げていく政策\n・出席率とGPAに応じた奨学金の傾斜配分、悪質な成績不振学生への奨学金停止\n・成果を出している団体への重点予算配分\n・学生自治会の会計を全面公開\n頑張った人だけが報われる大学にする。ぶっちゃけ、今の大学は過保護。「優しさ」と「甘さ」は違う。",
    likes: 64,
    retweets: 55,
  },
  {
    id: "c4",
    date: "8/1",
    text: "50円で買われてますよ‼️早く気づいて‼️‼️",
    quote: {
      color: "a",
      name: "山田あおい",
      handle: candidateAHandle,
      date: "7/21",
      text: "政策の詳細を発表します!日替わり定食450円→400円、カレー350円→300円に値下げします。年間200日通えば1万円の節約に。",
    },
    likes: 45,
    retweets: 89,
  },
  {
    id: "c5",
    date: "8/9",
    text: "これマジ⁉️僕もこれからは車で行くわw✋😁やってくれるらしいから🈂️🔥🔥",
    quote: {
      color: "b",
      name: "鈴木りょう",
      handle: candidateBHandle,
      date: "7/22",
      text: "政策を発表します!グラウンド一部活用で第2駐車場100台分を新設。朝の駐車場の取り合いをなくし、希望者全員が車通学可能に。",
    },
    likes: 41,
    retweets: 78,
  },
  {
    id: "c6",
    date: "8/17",
    text: "「冷たい」「厳しい」「お前が言うな」…アンチはこう言う。でも、冷たくしない、厳しくしない。この結果が僕であり、留年だ。優しさは善なのか、悪なのか。悪は全て暴かれる。",
    likes: 53,
    retweets: 60,
  },
  {
    id: "c7",
    date: "8/25",
    text: "好かれる政策を並べることだけの大学なんて情けない。投票前日の明日正午、この大学の本当の闇を暴露する。この暴露の後、きっとあなたは投票先を変えるはずだ。",
    likes: 62,
    retweets: 73,
  },
];
