import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { newsArticles } from "@/lib/news";

const candidateHref = {
  a: "/candidate-a",
  b: "/candidate-b",
  c: "/candidate-c",
} as const;

const candidateBadge = {
  a: "bg-a",
  b: "bg-b",
  c: "bg-c",
} as const;

export function generateStaticParams() {
  return newsArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = newsArticles.find((a) => a.slug === slug);
  return { title: article ? article.headline : "記事が見つかりません" };
}

export default async function NewsArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = newsArticles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <>
      <header className="border-b border-gray-200 bg-white py-4">
        <div className="mx-auto max-w-2xl px-6">
          <Link
            href={candidateHref[article.candidate]}
            className="inline-flex items-center gap-1.5 text-sm font-bold text-gray-500 transition hover:text-gray-900"
          >
            ← {article.candidateName}候補のページへ
          </Link>
        </div>
      </header>

      <article className="py-14">
        <div className="mx-auto max-w-2xl px-6">
          <div className="mb-3 flex items-center gap-2 text-xs text-gray-500">
            <span
              className={`inline-flex h-4 w-4 items-center justify-center rounded-full text-[10px] font-bold text-white ${candidateBadge[article.candidate]}`}
            >
              N
            </span>
            <span>{article.site}</span>
            <span>·</span>
            <span>{article.date}</span>
          </div>

          <h1 className="mb-6 text-2xl font-extrabold leading-snug sm:text-3xl">
            {article.headline}
          </h1>

          <div className="space-y-4 text-base leading-relaxed text-gray-800">
            {article.body.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </div>
      </article>

      <Footer />
    </>
  );
}
