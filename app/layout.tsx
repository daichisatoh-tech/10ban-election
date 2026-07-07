import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  weight: ["400", "500", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "愛知教育大学 学生代表選挙 特設サイト",
    template: "%s｜愛知教育大学 学生代表選挙",
  },
  description: "模擬授業用の学生代表選挙特設サイトです。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${notoSansJP.variable} h-full`}>
      <body className="flex min-h-full flex-col bg-gray-100 font-sans text-gray-900 antialiased">
        {children}
      </body>
    </html>
  );
}
