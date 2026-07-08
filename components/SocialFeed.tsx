import Image from "next/image";
import { Avatar } from "./Avatar";
import type { Post } from "@/lib/posts";
import type { CandidateColor } from "@/lib/theme";

const theme = {
  a: { avatarBg: "bg-a", photoBg: "from-a-light to-white" },
  b: { avatarBg: "bg-b", photoBg: "from-b-light to-white" },
  c: { avatarBg: "bg-c", photoBg: "from-c-light to-white" },
} as const;

function PostCard({
  color,
  initial,
  name,
  handle,
  post,
}: {
  color: CandidateColor;
  initial: string;
  name: string;
  handle: string;
  post: Post;
}) {
  const t = theme[color];
  const qt = post.quote ? theme[post.quote.color] : null;

  return (
    <article className="rounded-xl border border-gray-200 bg-white p-4">
      <div className="flex items-start gap-3">
        <Avatar
          initial={initial}
          className={`h-11 w-11 flex-shrink-0 text-base ${t.avatarBg}`}
        />
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-baseline gap-x-1.5 text-sm">
            <span className="font-bold">{name}</span>
            <span className="text-gray-500">{handle}</span>
            <span className="text-gray-400">·</span>
            <span className="text-gray-500">{post.date}</span>
          </div>

          <p className="mt-1 whitespace-pre-line text-[15px] leading-relaxed text-gray-900">
            {post.text}
          </p>

          {post.photo && post.photo.src && (
            <div className="relative mt-3 aspect-video overflow-hidden rounded-xl border border-gray-100">
              <Image
                src={post.photo.src}
                alt={post.photo.caption}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 576px"
              />
            </div>
          )}

          {post.photo && !post.photo.src && (
            <div
              className={`mt-3 flex aspect-video flex-col items-center justify-center gap-2 rounded-xl border border-gray-100 bg-gradient-to-br text-4xl ${t.photoBg}`}
            >
              <span>{post.photo.emoji}</span>
              <span className="px-4 text-center text-xs font-normal text-gray-400">
                {post.photo.caption}
              </span>
            </div>
          )}

          {post.quote && qt && (
            <div className="mt-3 rounded-xl border border-gray-200 p-3">
              <div className="flex items-center gap-2 text-sm">
                <Avatar
                  initial={post.quote.color.toUpperCase()}
                  className={`h-6 w-6 flex-shrink-0 text-xs ${qt.avatarBg}`}
                />
                <span className="font-bold">{post.quote.name}</span>
                <span className="text-gray-500">{post.quote.handle}</span>
                <span className="text-gray-400">·</span>
                <span className="text-gray-500">{post.quote.date}</span>
              </div>
              <p className="mt-1.5 whitespace-pre-line text-sm text-gray-700">
                {post.quote.text}
              </p>
            </div>
          )}

          <div className="mt-3 flex gap-6 text-sm text-gray-400">
            <span className="inline-flex items-center gap-1.5">
              🔁 {post.retweets}
            </span>
            <span className="inline-flex items-center gap-1.5">
              ♡ {post.likes}
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}

export function SocialFeed({
  color,
  initial,
  name,
  handle,
  posts,
}: {
  color: CandidateColor;
  initial: string;
  name: string;
  handle: string;
  posts: Post[];
}) {
  const timeline = [...posts].reverse();

  return (
    <section className="border-y border-gray-200 bg-gray-50 py-14">
      <div className="mx-auto max-w-2xl px-6">
        <h2 className="mb-1 flex items-center gap-2.5 text-2xl font-extrabold">
          <span className={`inline-block h-2.5 w-2.5 rounded-full ${theme[color].avatarBg}`} />
          SNSでの発信
        </h2>
        <p className="mb-6 text-sm text-gray-500">
          {name}（{handle}）の投稿（7/7〜8/25）
        </p>

        <div className="space-y-3">
          {timeline.map((post) => (
            <PostCard
              key={post.id}
              color={color}
              initial={initial}
              name={name}
              handle={handle}
              post={post}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
