// /lp 配下にだけ適用するCSSを読み込む
import "./style.css";

export default function LPLayout({ children }: { children: React.ReactNode }) {
  // ※ セグメントの layout では <html> や <body> を書かない
  return <section className="lp">{children}</section>;
}
