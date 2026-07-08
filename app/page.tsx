import { CandidateCard } from "@/components/CandidateCard";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <header className="border-b border-gray-200 bg-white py-5">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6">
          <div className="text-lg font-bold tracking-wide">
            愛知教育大学 学生代表選挙 特設サイト
          </div>
          <span className="rounded-full border border-orange-200 bg-orange-50 px-2.5 py-1 text-xs font-bold text-orange-800">
            模擬授業用サイト
          </span>
        </div>
      </header>

      <section className="py-16 text-center sm:py-20">
        <div className="mx-auto max-w-5xl px-6">
          <p className="mb-3 text-sm tracking-widest text-gray-500">
            STUDENT REPRESENTATIVE ELECTION
          </p>
          <h1 className="mb-4 text-2xl font-extrabold sm:text-4xl">
            愛知教育大学 学生代表選挙
          </h1>
          <p className="text-xl font-bold sm:text-2xl">
            <span className="bg-[linear-gradient(transparent_60%,#ffe27a_60%)]">
              あなたの1票が、大学を変える。
            </span>
          </p>
        </div>
      </section>

      <section className="pb-16">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="mb-8 text-center text-2xl font-extrabold">
            候補者紹介
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <CandidateCard
              color="a"
              href="/candidate-a"
              initial="A"
              name="山田 あおい"
              slogan="「学食を、みんなの味方に。」"
              message="全品50円値下げで、あなたの毎日を変えます。"
            />
            <CandidateCard
              color="b"
              href="/candidate-b"
              initial="B"
              name="鈴木 りょう"
              slogan="「声なき声を、カタチにする。」"
              message="第2駐車場の新設で、朝の不安をゼロにします。"
            />
            <CandidateCard
              color="c"
              href="/candidate-c"
              initial="C"
              name="西園寺 隼人"
              slogan="「この大学の闇を、暴く」"
              message="実力に応じた支援で、頑張った人が報われる大学に。"
            />
          </div>
        </div>
      </section>

      <section id="vote" className="border-t border-gray-200 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="mb-3 text-2xl font-extrabold">投票する</h2>
          <p className="mb-8 text-gray-500">
            下記フォームより、あなたの1票を投じてください。
          </p>
          <div className="rounded-xl bg-gray-50 p-3 shadow-lg shadow-gray-200/50">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLScW35c7J1li5vwk15Qns9TPRGNhBVwfR_jEF4jt2s_JY9Nbig/viewform?embedded=true"
              className="h-[900px] w-full rounded-lg border-0 bg-white"
              title="投票フォーム"
            >
              読み込んでいます…
            </iframe>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
