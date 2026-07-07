import Link from "next/link";

export function CandidateHeader() {
  return (
    <header className="border-b border-gray-200 bg-white py-4">
      <div className="mx-auto max-w-5xl px-6">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm font-bold text-gray-500 transition hover:text-gray-900"
        >
          ← トップへ戻る
        </Link>
      </div>
    </header>
  );
}
