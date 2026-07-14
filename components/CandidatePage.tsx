import Link from "next/link";
import { Avatar } from "./Avatar";
import { CandidateHeader } from "./CandidateHeader";
import { Footer } from "./Footer";
import { SocialFeed } from "./SocialFeed";
import { NewsList } from "./NewsList";
import type { Post } from "@/lib/posts";
import type { NewsArticle } from "@/lib/news";
import type { CandidateColor } from "@/lib/theme";

export type Profile = { label: string; text: string };

export type Policy = {
  tag: string;
  title: string;
  paragraphs?: string[];
  listIntro?: string;
  list?: string[];
};

export type QA = { q: string; a: string };

const theme = {
  a: {
    heroBg: "bg-gradient-to-br from-a to-a-dark",
    solid: "bg-a",
    accent: "text-a",
    border: "border-a",
  },
  b: {
    heroBg: "bg-gradient-to-br from-b to-b-dark",
    solid: "bg-b",
    accent: "text-b",
    border: "border-b",
  },
  c: {
    heroBg: "bg-gradient-to-br from-c to-c-dark",
    solid: "bg-c",
    accent: "text-c",
    border: "border-c",
  },
} as const;

export function CandidatePage({
  color,
  initial,
  name,
  kana,
  slogan,
  mainPledge,
  profile,
  policies,
  qas,
  handle,
  posts,
  news,
}: {
  color: CandidateColor;
  initial: string;
  name: string;
  kana: string;
  slogan: string;
  mainPledge: string;
  profile: Profile[];
  policies: Policy[];
  qas: QA[];
  handle: string;
  posts: Post[];
  news: NewsArticle[];
}) {
  const t = theme[color];

  return (
    <>
      <CandidateHeader />

      <section className={`${t.heroBg} py-16 text-center text-white sm:py-20`}>
        <div className="mx-auto max-w-5xl px-6">
          <Avatar
            initial={initial}
            className="mx-auto mb-6 h-28 w-28 border-2 border-white/60 bg-white/15 text-4xl sm:h-32 sm:w-32"
          />
          <p className="mb-3 text-sm opacity-90 sm:text-base">
            {name}（{kana}）
          </p>
          <h1 className="mb-4 text-3xl font-extrabold sm:text-4xl">{slogan}</h1>
          <p className="mx-auto max-w-xl text-base opacity-95 sm:text-lg">
            {mainPledge}
          </p>
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="mb-6 flex items-center gap-2.5 text-2xl font-extrabold">
            <span className={`inline-block h-2.5 w-2.5 rounded-full ${t.solid}`} />
            プロフィール
          </h2>
          <ul className="grid gap-3.5">
            {profile.map((p) => (
              <li
                key={p.label}
                className={`flex gap-3 rounded-xl border-l-4 bg-white px-5 py-4 ${t.border}`}
              >
                <span className="w-24 flex-shrink-0 font-bold text-gray-500">
                  {p.label}
                </span>
                <span>{p.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <NewsList color={color} articles={news} />

      <section className="border-y border-gray-200 bg-gray-50 py-14">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="mb-6 flex items-center gap-2.5 text-2xl font-extrabold">
            <span className={`inline-block h-2.5 w-2.5 rounded-full ${t.solid}`} />
            政策
          </h2>

          <div className="space-y-6">
            {policies.map((policy) => (
              <div
                key={policy.title}
                className="rounded-2xl border border-gray-100 bg-white p-7 shadow-lg shadow-gray-200/50"
              >
                <span
                  className={`mb-3 inline-block rounded-full px-3 py-1 text-xs font-bold text-white ${t.solid}`}
                >
                  {policy.tag}
                </span>
                <h3 className="mb-3.5 text-lg font-extrabold">{policy.title}</h3>
                {policy.paragraphs?.map((para, i) => (
                  <p key={i} className="mb-3.5 text-gray-800">
                    {para}
                  </p>
                ))}
                {policy.listIntro && (
                  <p className="mb-3.5">
                    <strong>{policy.listIntro}</strong>
                  </p>
                )}
                {policy.list && (
                  <ul className="list-disc space-y-1.5 pl-5">
                    {policy.list.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="mb-6 flex items-center gap-2.5 text-2xl font-extrabold">
            <span className={`inline-block h-2.5 w-2.5 rounded-full ${t.solid}`} />
            Q&amp;A
          </h2>

          <div className="space-y-3">
            {qas.map((qa, i) => (
              <details
                key={i}
                className="group rounded-xl border border-gray-200 bg-white [&::-webkit-details-marker]:hidden open:shadow-md"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 font-bold">
                  <span className={t.accent}>Q. {qa.q}</span>
                  <span className="relative h-5.5 w-5.5 flex-shrink-0 rounded-full border-2 border-gray-400 text-gray-400">
                    <span className="absolute left-1/2 top-1/2 h-0.5 w-2.5 -translate-x-1/2 -translate-y-1/2 bg-current" />
                    <span className="absolute left-1/2 top-1/2 h-2.5 w-0.5 -translate-x-1/2 -translate-y-1/2 bg-current transition-opacity group-open:opacity-0" />
                  </span>
                </summary>
                <div className="border-t border-gray-100 px-5 pb-5 pt-4 text-gray-600">
                  <p>A. {qa.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <SocialFeed
        color={color}
        initial={initial}
        name={name}
        handle={handle}
        posts={posts}
      />

      <div className="pb-12 text-center">
        <Link
          href="/#vote"
          className={`inline-block rounded-full px-8 py-3 font-bold text-white transition hover:-translate-y-0.5 hover:shadow-lg ${t.solid}`}
        >
          投票する →
        </Link>
      </div>

      <Footer />
    </>
  );
}
