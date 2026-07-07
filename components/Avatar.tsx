export function Avatar({
  initial,
  className = "",
}: {
  initial: string;
  className?: string;
}) {
  return (
    <div
      className={`flex items-center justify-center rounded-full font-extrabold text-white ${className}`}
    >
      {initial}
    </div>
  );
}
