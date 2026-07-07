export type PostPhoto = {
  emoji: string;
  caption: string;
};

export type PostQuote = {
  color: "a" | "b";
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

export const candidateAPosts: Post[] = [
  {
    id: "a1",
    date: "7/7",
    text: "はじめまして、山田あおいです。教育学部4年、小学校教員を目指しています。この度、学生代表選挙に立候補することを決めました。まずは学食の値下げから、みんなの大学生活を変えていきます。よろしくお願いします! #山田あおいと一緒に",
    photo: { emoji: "📢", caption: "出馬表明の様子（掲示板前にて）" },
    likes: 142,
    retweets: 38,
  },
  {
    id: "a2",
    date: "7/15",
    text: "学食運営委員のみなさんと打ち合わせしてきました。値下げのために、まずは利用実態のデータを集めています。みんなが本当に困っていることを、数字でちゃんと伝えたい。",
    photo: { emoji: "📊", caption: "学食アンケート集計作業中" },
    likes: 98,
    retweets: 21,
  },
  {
    id: "a3",
    date: "7/22",
    text: "政策の詳細を発表します!\n・日替わり定食 450円→400円\n・カレー 350円→300円\n・100円モーニング新設\n・営業時間20時まで延長\n年間200日通えば、1万円の節約に。みんなの毎日を、ちょっと軽くしたいです。",
    likes: 210,
    retweets: 64,
  },
  {
    id: "a4",
    date: "8/5",
    text: "第2駐車場、たしかに大事な視点だと思う。でも車通学の学生は全体の3割。7割の学生には直接関係がない政策に、学食より多くの予算を割くのは本当に優先順位として正しいのかな…みんなで考えたい。",
    quote: {
      color: "b",
      name: "鈴木りょう",
      handle: candidateBHandle,
      date: "7/21",
      text: "グラウンド一部活用で第2駐車場100台分を新設。朝の抽選を廃止し、希望者全員が車通学可能に。",
    },
    likes: 87,
    retweets: 45,
  },
  {
    id: "a5",
    date: "8/12",
    text: "オープンキャンパスで模擬店のお手伝いをしてきました!高校生のみんなにも「学食安くなったらいいな」って言ってもらえて嬉しかったです。応援ありがとう!",
    photo: { emoji: "🏫", caption: "オープンキャンパスにて" },
    likes: 76,
    retweets: 12,
  },
  {
    id: "a6",
    date: "8/20",
    text: "応援メッセージがたくさん届いています。「お金がなくて学食我慢してた」「本当に助かる」…この声を無駄にしないよう、最後まで全力でがんばります。",
    likes: 130,
    retweets: 30,
  },
  {
    id: "a7",
    date: "8/28",
    text: "投票日まであと4日。もう一度お伝えします。私が変えたいのは「みんなが毎日使う場所」です。特別な誰かのためじゃなく、全員のための1票を、私に託してもらえたら嬉しいです。",
    likes: 165,
    retweets: 52,
  },
  {
    id: "a8",
    date: "9/1",
    text: "本日、投票日です。教室や生協前で直接お声がけすることもあります。あなたの1票が、あなたの毎日の学食を変えます。よろしくお願いします!",
    photo: { emoji: "🗳️", caption: "投票を呼びかけるビラ配りの様子" },
    likes: 201,
    retweets: 70,
  },
];

export const candidateBPosts: Post[] = [
  {
    id: "b1",
    date: "7/7",
    text: "鈴木りょうです。教育学部4年、中学校体育教員志望。学友会副会長として、これまで大学側と交渉してきました。今度は学生代表として、みんなの「困った」をカタチにします。第2駐車場、必ず実現します。",
    photo: { emoji: "📢", caption: "出馬表明の様子" },
    likes: 135,
    retweets: 33,
  },
  {
    id: "b2",
    date: "7/14",
    text: "早朝6:50、駐車場の様子を見てきました。この時間ですでに満車間近…抽選に外れた学生は、あと数分の差で遅刻になり、成績に響くこともあります。この不安、なくしたいです。",
    photo: { emoji: "🚗", caption: "朝の駐車場調査" },
    likes: 112,
    retweets: 29,
  },
  {
    id: "b3",
    date: "7/21",
    text: "政策を発表します!\n・グラウンドの一部を活用し、第2駐車場を100台分新設\n・朝の駐車場抽選をなくし、全希望者が車通学可能に\n・駐輪場の屋根を全面設置\n「自分には関係ない」で終わらせない大学に変えます。",
    likes: 198,
    retweets: 58,
  },
  {
    id: "b4",
    date: "8/8",
    text: "50円の値下げ、聞こえはいいけど、その裏でメニューの質や品数が削られたら本末転倒じゃないかな。安さのためのコストカットが、結局みんなの「おいしい」を奪うことにならないか心配です。",
    quote: {
      color: "a",
      name: "山田あおい",
      handle: candidateAHandle,
      date: "7/22",
      text: "日替わり定食450円→400円、カレー350円→300円に値下げします。年間200日通えば1万円の節約に。",
    },
    likes: 101,
    retweets: 47,
  },
  {
    id: "b5",
    date: "8/15",
    text: "学友会として大学側と交渉してきた経験を活かして、駐車場担当の職員さんとも直接話してきました。実現に向けて、着実に進んでいます。",
    photo: { emoji: "🤝", caption: "大学職員との交渉の様子" },
    likes: 84,
    retweets: 16,
  },
  {
    id: "b6",
    date: "8/22",
    text: "「毎朝の駐車場の抽選が本当にストレスだった」「代わりに声をあげてくれてありがとう」…そんな声をたくさんもらっています。困っている人に、ちゃんと届く政策を。",
    likes: 120,
    retweets: 27,
  },
  {
    id: "b7",
    date: "8/29",
    text: "投票日まであと3日。声なき声を、カタチにする。そのために、まずは1票を私に預けてください。全力で大学と交渉し続けます。",
    likes: 150,
    retweets: 44,
  },
  {
    id: "b8",
    date: "9/1",
    text: "本日投票日です!朝の駐車場前でも呼びかけをしています。あなたの毎朝の不安を、なくすために。一票、よろしくお願いします!",
    photo: { emoji: "🗳️", caption: "駐車場前で呼びかける様子" },
    likes: 188,
    retweets: 61,
  },
];
