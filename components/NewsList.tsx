import Link from "next/link";
import type { NewsArticle } from "@/lib/news";
import type { CandidateColor } from "@/lib/theme";

const theme = {
  a: { badge: "bg-a" },
  b: { badge: "bg-b" },
  c: { badge: "bg-c" },
} as const;

export function NewsList({
  color,
  articles,
}: {
  color: CandidateColor;
  articles: NewsArticle[];
}) {
  if (articles.length === 0) return null;

  return (
    <section className="py-14">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="mb-6 flex items-center gap-2.5 text-2xl font-extrabold">
          <span className={`inline-block h-2.5 w-2.5 rounded-full ${theme[color].badge}`} />
          ネットニュース
        </h2>

        <div className="space-y-3">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/news/${article.slug}`}
              className="block rounded-xl border border-gray-200 bg-white p-5 transition hover:border-gray-300 hover:shadow-md"
            >
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <span
                  className={`inline-flex h-4 w-4 items-center justify-center rounded-full text-[10px] font-bold text-white ${theme[color].badge}`}
                >
                  N
                </span>
                <span>{article.site}</span>
                <span>·</span>
                <span>{article.date}</span>
              </div>
              <p className="mt-2 text-base font-bold leading-snug text-gray-900">
                {article.headline}
              </p>
              <p className="mt-1 text-sm text-gray-500">{article.snippet}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
