import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import 'modern-normalize/modern-normalize.css';
import "./globals.css";

const notoSans = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "700"], // 必要な太さだけ指定
  display: "swap",
});


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" className={notoSans.className}>
      <body>{children}</body>
    </html>
  );
}
