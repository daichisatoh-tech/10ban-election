import Link from "next/link";
import { Avatar } from "./Avatar";
import type { CandidateColor } from "@/lib/theme";

const theme = {
  a: {
    border: "border-t-a",
    avatarBg: "bg-a",
    text: "text-a",
    btn: "bg-a hover:bg-a-dark",
  },
  b: {
    border: "border-t-b",
    avatarBg: "bg-b",
    text: "text-b",
    btn: "bg-b hover:bg-b-dark",
  },
  c: {
    border: "border-t-c",
    avatarBg: "bg-c",
    text: "text-c",
    btn: "bg-c hover:bg-c-dark",
  },
} as const;

export function CandidateCard({
  color,
  href,
  initial,
  name,
  slogan,
  message,
}: {
  color: CandidateColor;
  href: string;
  initial: string;
  name: string;
  slogan: string;
  message: string;
}) {
  const t = theme[color];

  return (
    <article
      className={`flex flex-col items-center rounded-2xl border-t-8 bg-white px-6 py-8 text-center shadow-lg shadow-gray-200/60 ${t.border}`}
    >
      <Avatar initial={initial} className={`mb-5 h-24 w-24 text-3xl ${t.avatarBg}`} />
      <h3 className="mb-2 text-xl font-extrabold">{name}</h3>
      <p className={`mb-3 text-lg font-bold ${t.text}`}>{slogan}</p>
      <p className="mb-6 text-sm text-gray-500">{message}</p>
      <Link
        href={href}
        className={`inline-block rounded-full px-7 py-3 font-bold text-white transition hover:-translate-y-0.5 hover:shadow-lg ${t.btn}`}
      >
        政策を見る →
      </Link>
    </article>
  );
}
