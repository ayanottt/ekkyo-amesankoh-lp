import Image from "next/image"
import "./style.css"

export const metadata = {
  title: "Landing Page | EKKYO AMESANKOH",
  description: "Short-term total support. LP production, localization, and operations.",
}

export default function LP() {
  return (
    <main className="lp">
      {/* Hero section */}
      <section className="section">
        <div className="container">
          <div className="hero">
            <div className="hero-content">
              <div className="btn-row">
                <button className="btn btn--primary">お問い合わせ</button>
                <button className="btn btn--outline">資料請求はこちら</button>
              </div>
              <h1 className="hero-title">
                "売り上げ"を"売れる"に変える
                <br />
                <span className="hero-subtitle">超短期ECトータルサポート</span>
              </h1>
              <p className="hero-description">
                LP制作・多言語化・運用まで、
                <br />
                海外展開を総合的にサポートします。
              </p>
              <div className="btn-row">
                <button className="btn btn--primary">無料相談を申し込む</button>
                <button className="btn btn--outline">資料請求はこちら</button>
              </div>
            </div>
            <div className="hero-image">
              <Image
                src="/images/lp/hero-illustration.png"
                alt="Global e-commerce support illustration"
                width={500}
                height={400}
                className="responsive-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features section */}
      <section className="section section--gray">
        <div className="container">
          <h2 className="section-title">こんなお悩みありませんか？</h2>
          <div className="features-grid">
            <div className="feature-card">
              <Image
                src="/images/lp/feature-1.png"
                alt="海外展開を検討中"
                width={80}
                height={80}
                className="feature-icon"
              />
              <h3 className="feature-title">
                海外展開を検討中だが
                <br />
                ノウハウがない
              </h3>
            </div>
            <div className="feature-card">
              <Image
                src="/images/lp/feature-2.png"
                alt="多言語対応が必要"
                width={80}
                height={80}
                className="feature-icon"
              />
              <h3 className="feature-title">
                多言語対応が必要だが
                <br />
                リソースが足りない
              </h3>
            </div>
            <div className="feature-card">
              <Image
                src="/images/lp/feature-3.png"
                alt="マーケティング支援"
                width={80}
                height={80}
                className="feature-icon"
              />
              <h3 className="feature-title">
                マーケティング支援が
                <br />
                必要だが予算が限られている
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Services section */}
      <section className="section">
        <div className="container">
          <h2 className="services-title">
            こうした課題をまとめて解決するのが、
            <br />
            当社の<span className="highlight">超短期ECサポートサービス</span>です。
          </h2>

          <div className="services-grid">
            <div className="service-card">
              <Image src="/images/lp/service-1.png" alt="LP制作" width={100} height={100} className="service-icon" />
              <h3 className="service-title">LP制作</h3>
              <p className="service-description">
                売上向上に特化したランディングページを制作。コンバージョン率を最大化するデザインと構成で、効果的な集客を実現します。
              </p>
            </div>

            <div className="service-card">
              <Image src="/images/lp/service-2.png" alt="多言語化" width={100} height={100} className="service-icon" />
              <h3 className="service-title">多言語化</h3>
              <p className="service-description">
                ネイティブレベルの翻訳で、現地の文化に合わせたローカライゼーションを実施。各国の消費者に響くメッセージを届けます。
              </p>
            </div>

            <div className="service-card">
              <Image
                src="/images/lp/service-3.png"
                alt="運用サポート"
                width={100}
                height={100}
                className="service-icon"
              />
              <h3 className="service-title">運用サポート</h3>
              <p className="service-description">
                継続的な改善とメンテナンスで、長期的な成果を保証。データ分析に基づいた最適化を継続的に実施します。
              </p>
            </div>

            <div className="service-card">
              <Image
                src="/images/lp/service-4.png"
                alt="海外・多言語サポート"
                width={100}
                height={100}
                className="service-icon"
              />
              <h3 className="service-title">海外・多言語サポート</h3>
              <p className="service-description">
                グローバル展開に必要な全ての要素をワンストップで提供。現地の法規制や商習慣に対応した戦略的なアプローチを実現します。
              </p>
            </div>

            <div className="service-card">
              <Image
                src="/images/lp/service-5.png"
                alt="SNS・広告運用代行"
                width={100}
                height={100}
                className="service-icon"
              />
              <h3 className="service-title">SNS・広告運用代行</h3>
              <p className="service-description">
                各国のSNSプラットフォームに最適化した広告運用で、効率的なリーチとエンゲージメントを実現。ROIを最大化します。
              </p>
            </div>

            <div className="service-card">
              <Image
                src="/images/lp/service-6.png"
                alt="顧客サポート"
                width={100}
                height={100}
                className="service-icon"
              />
              <h3 className="service-title">顧客サポート</h3>
              <p className="service-description">
                多言語での顧客対応により、海外顧客との信頼関係を構築。24時間体制でのサポートで顧客満足度を向上させます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reasons section */}
      <section className="section section--light-blue">
        <div className="container">
          <h2 className="reasons-title">
            私たちが選ばれる<span className="highlight">3つの理由</span>
          </h2>

          <div className="reasons-list">
            <div className="reason-item">
              <div className="reason-image">
                <Image
                  src="/images/lp/reason-1.jpg"
                  alt="豊富な実績とサポート"
                  width={400}
                  height={250}
                  className="responsive-image rounded"
                />
              </div>
              <div className="reason-content">
                <div className="reason-header">
                  <span className="reason-number">01</span>
                  <h3 className="reason-title">豊富な実績とサポート</h3>
                </div>
                <p className="reason-description">
                  メイドインジャパンブランドの海外展開を数多く手がけてきた実績があります。
                  各国の市場特性を熟知したスペシャリストが、お客様の事業成長を全力でサポートします。
                  これまでの成功事例とノウハウを活かし、最短ルートでの海外進出を実現します。
                </p>
              </div>
            </div>

            <div className="reason-item reason-item--reverse">
              <div className="reason-image">
                <Image
                  src="/images/lp/reason-2.jpg"
                  alt="ワンストップ対応"
                  width={400}
                  height={250}
                  className="responsive-image rounded"
                />
              </div>
              <div className="reason-content">
                <div className="reason-header">
                  <span className="reason-number">02</span>
                  <h3 className="reason-title">ワンストップ対応</h3>
                </div>
                <p className="reason-description">
                  企画・制作・翻訳・運用・分析まで、海外展開に必要な全ての工程を一貫してサポート。
                  複数の業者とやり取りする手間を省き、スムーズなプロジェクト進行を実現します。
                  統一された品質管理により、ブランドイメージを一貫して保持できます。
                </p>
              </div>
            </div>

            <div className="reason-item">
              <div className="reason-image">
                <Image
                  src="/images/lp/reason-3.jpg"
                  alt="柔軟な価格設定"
                  width={400}
                  height={250}
                  className="responsive-image rounded"
                />
              </div>
              <div className="reason-content">
                <div className="reason-header">
                  <span className="reason-number">03</span>
                  <h3 className="reason-title">柔軟な価格設定</h3>
                </div>
                <p className="reason-description">
                  お客様の予算や事業規模に合わせた柔軟なプランをご提案。
                  初期投資を抑えながらも効果的な海外展開が可能です。
                  成果に応じた料金体系により、リスクを最小限に抑えながら事業拡大を目指せます。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies section */}
      <section className="section section--gray">
        <div className="container">
          <h2 className="section-title">実績</h2>
          <div className="lp-case-studies-grid">
            <div className="lp-case-study-card">
              <div className="lp-case-study-image">
                <Image
                  src="/images/lp/case-study-1.jpg"
                  alt="化粧品ECサイト"
                  width={300}
                  height={200}
                  className="responsive-image"
                />
              </div>
              <div className="lp-case-study-content">
                <h3 className="lp-case-study-title">化粧品ECサイト</h3>
                <p className="lp-case-study-description">
                  日本の高品質化粧品ブランドの海外展開をサポート。多言語対応とローカライゼーションにより、アジア圏での売上を300%向上させました。
                </p>
                <div className="lp-case-study-tags">
                  <span className="lp-tag">化粧品</span>
                  <span className="lp-tag">アジア展開</span>
                </div>
              </div>
              <button className="btn btn--primary lp-case-study-btn">詳細を見る</button>
            </div>

            <div className="lp-case-study-card">
              <div className="lp-case-study-image">
                <Image
                  src="/images/lp/case-study-2.jpg"
                  alt="アパレルブランド"
                  width={300}
                  height={200}
                  className="responsive-image"
                />
              </div>
              <div className="lp-case-study-content">
                <h3 className="lp-case-study-title">アパレルブランド</h3>
                <p className="lp-case-study-description">
                  伝統的な日本のアパレルブランドの欧米進出をトータルサポート。ブランドイメージを保持しながら現地の嗜好に合わせた戦略で成功を収めました。
                </p>
                <div className="lp-case-study-tags">
                  <span className="lp-tag">アパレル</span>
                  <span className="lp-tag">欧米展開</span>
                </div>
              </div>
              <button className="btn btn--primary lp-case-study-btn">詳細を見る</button>
            </div>

            <div className="lp-case-study-card">
              <div className="lp-case-study-image">
                <Image
                  src="/images/lp/case-study-3.jpg"
                  alt="ゲーミングサイト"
                  width={300}
                  height={200}
                  className="responsive-image"
                />
              </div>
              <div className="lp-case-study-content">
                <h3 className="lp-case-study-title">ゲーミングサイト</h3>
                <p className="lp-case-study-description">
                  オンラインゲームプラットフォームのグローバル展開をサポート。多言語対応とリアルタイム顧客サポートにより、世界中のユーザーに愛されるサービスを実現。
                </p>
                <div className="lp-case-study-tags">
                  <span className="lp-tag">ゲーム</span>
                  <span className="lp-tag">グローバル</span>
                </div>
              </div>
              <button className="btn btn--primary lp-case-study-btn">詳細を見る</button>
            </div>

            <div className="lp-case-study-card">
              <div className="lp-case-study-image">
                <Image
                  src="/images/lp/case-study-4.jpg"
                  alt="ペット用品サイト"
                  width={300}
                  height={200}
                  className="responsive-image"
                />
              </div>
              <div className="lp-case-study-content">
                <h3 className="lp-case-study-title">ペット用品サイト</h3>
                <p className="lp-case-study-description">
                  高品質なペット用品の海外販売をサポート。各国のペット文化に合わせたマーケティング戦略により、短期間で市場シェアを獲得しました。
                </p>
                <div className="lp-case-study-tags">
                  <span className="lp-tag">ペット用品</span>
                  <span className="lp-tag">多国展開</span>
                </div>
              </div>
              <button className="btn btn--primary lp-case-study-btn">詳細を見る</button>
            </div>
          </div>

          <div className="lp-case-studies-cta">
            <button className="btn btn--primary">実績をもっと見る</button>
          </div>
        </div>
      </section>

      {/* Implementation Flow section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">導入フロー</h2>
          <div className="lp-flow-list">
            <div className="lp-flow-item">
              <div className="lp-flow-number">01</div>
              <div className="lp-flow-content">
                <h3 className="lp-flow-title">無料相談・ヒアリング</h3>
                <p className="lp-flow-description">
                  まずはお気軽にご相談ください。お客様のビジネス目標や課題をお聞かせいただき、最適なプランをご提案いたします。
                </p>
              </div>
            </div>

            <div className="lp-flow-item">
              <div className="lp-flow-number">02</div>
              <div className="lp-flow-content">
                <h3 className="lp-flow-title">企画</h3>
                <p className="lp-flow-description">
                  ヒアリング内容を基に、海外展開戦略を策定。ターゲット市場の分析から具体的な実行プランまで詳細に企画いたします。
                </p>
              </div>
            </div>

            <div className="lp-flow-item">
              <div className="lp-flow-number">03</div>
              <div className="lp-flow-content">
                <h3 className="lp-flow-title">制作</h3>
                <p className="lp-flow-description">
                  LP制作から多言語化まで、プロフェッショナルなチームが高品質なコンテンツを制作。ブランドイメージを最大限に活かします。
                </p>
              </div>
            </div>

            <div className="lp-flow-item">
              <div className="lp-flow-number">04</div>
              <div className="lp-flow-content">
                <h3 className="lp-flow-title">リリース・運用開始</h3>
                <p className="lp-flow-description">
                  制作完了後、スムーズなリリースを実施。運用開始と同時に効果測定とモニタリングを開始いたします。
                </p>
              </div>
            </div>

            <div className="lp-flow-item">
              <div className="lp-flow-number">05</div>
              <div className="lp-flow-content">
                <h3 className="lp-flow-title">効果測定・改善（分析・改善提案）</h3>
                <p className="lp-flow-description">
                  データ分析に基づいた効果測定を実施。継続的な改善提案により、ROIの最大化を図ります。
                </p>
              </div>
            </div>

            <div className="lp-flow-item">
              <div className="lp-flow-number">06</div>
              <div className="lp-flow-content">
                <h3 className="lp-flow-title">フォローアップ（改善・運用）</h3>
                <p className="lp-flow-description">
                  長期的な成功のため、継続的なフォローアップとサポートを提供。市場変化に応じた戦略調整も行います。
                </p>
              </div>
            </div>
          </div>

          <div className="lp-flow-cta">
            <div className="btn-row">
              <button className="btn btn--primary">資料請求する</button>
              <button className="btn btn--outline">無料相談を申し込む</button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing section */}
      <section className="section section--blue">
        <div className="container">
          <div className="pricing-header">
            <button className="btn btn--primary eyebrow">お客様のニーズに合わせてご提案！</button>
            <h2 className="pricing-title">超短期ECサポートプラン</h2>
          </div>

          <div className="pricing-table-wrapper">
            <table className="pricing-table">
              <thead>
                <tr>
                  <th className="table-header">プラン</th>
                  <th className="table-header table-header--light">
                    ライトプラン
                    <br />
                    <span className="price">月額 ¥50,000〜</span>
                  </th>
                  <th className="table-header table-header--yellow">
                    スタンダードプラン
                    <br />
                    <span className="price">月額 ¥100,000〜</span>
                  </th>
                  <th className="table-header table-header--blue">
                    プレミアムプラン
                    <br />
                    <span className="price">月額 ¥200,000〜</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="table-cell table-cell--feature">LP制作</td>
                  <td className="table-cell table-cell--center">○</td>
                  <td className="table-cell table-cell--center">○</td>
                  <td className="table-cell table-cell--center">○</td>
                </tr>
                <tr>
                  <td className="table-cell table-cell--feature">多言語化（1言語）</td>
                  <td className="table-cell table-cell--center">○</td>
                  <td className="table-cell table-cell--center">○</td>
                  <td className="table-cell table-cell--center">○</td>
                </tr>
                <tr>
                  <td className="table-cell table-cell--feature">多言語化（複数言語）</td>
                  <td className="table-cell table-cell--center">-</td>
                  <td className="table-cell table-cell--center">○</td>
                  <td className="table-cell table-cell--center">○</td>
                </tr>
                <tr>
                  <td className="table-cell table-cell--feature">SNS運用代行</td>
                  <td className="table-cell table-cell--center">-</td>
                  <td className="table-cell table-cell--center">○</td>
                  <td className="table-cell table-cell--center">○</td>
                </tr>
                <tr>
                  <td className="table-cell table-cell--feature">広告運用代行</td>
                  <td className="table-cell table-cell--center">-</td>
                  <td className="table-cell table-cell--center">-</td>
                  <td className="table-cell table-cell--center">○</td>
                </tr>
                <tr>
                  <td className="table-cell table-cell--feature">顧客サポート</td>
                  <td className="table-cell table-cell--center">-</td>
                  <td className="table-cell table-cell--center">○</td>
                  <td className="table-cell table-cell--center">○</td>
                </tr>
                <tr>
                  <td className="table-cell table-cell--feature">月次レポート</td>
                  <td className="table-cell table-cell--center">○</td>
                  <td className="table-cell table-cell--center">○</td>
                  <td className="table-cell table-cell--center">○</td>
                </tr>
                <tr>
                  <td className="table-cell table-cell--feature">専任担当者</td>
                  <td className="table-cell table-cell--center">-</td>
                  <td className="table-cell table-cell--center">-</td>
                  <td className="table-cell table-cell--center">○</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="pricing-footer">
            <p className="pricing-description">超短期ECサポートプランについて詳しく</p>
            <div className="btn-row">
              <button className="btn btn--outline btn--white">資料請求する</button>
              <button className="btn btn--primary">無料相談を申し込む</button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ section */}
      <section className="section section--blue">
        <div className="container">
          <h2 className="lp-faq-title">よくあるご質問</h2>
          <div className="lp-faq-list">
            <div className="lp-faq-item">
              <div className="lp-faq-question">
                <span className="lp-faq-text">Q1. 対応可能な言語はどれくらいありますか？</span>
                <span className="lp-faq-icon">+</span>
              </div>
            </div>

            <div className="lp-faq-item">
              <div className="lp-faq-question">
                <span className="lp-faq-text">Q2. 最短でどれくらいの期間で対応可能ですか？</span>
                <span className="lp-faq-icon">+</span>
              </div>
            </div>

            <div className="lp-faq-item">
              <div className="lp-faq-question">
                <span className="lp-faq-text">Q3. 小規模な事業でも対応していただけますか？</span>
                <span className="lp-faq-icon">+</span>
              </div>
            </div>

            <div className="lp-faq-item">
              <div className="lp-faq-question">
                <span className="lp-faq-text">Q4. 既存サイトの改修も可能ですか？</span>
                <span className="lp-faq-icon">+</span>
              </div>
            </div>

            <div className="lp-faq-item">
              <div className="lp-faq-question">
                <span className="lp-faq-text">Q5. 料金以外に追加費用はかかりますか？</span>
                <span className="lp-faq-icon">+</span>
              </div>
            </div>

            <div className="lp-faq-item">
              <div className="lp-faq-question">
                <span className="lp-faq-text">Q6. 契約期間の縛りはありますか？</span>
                <span className="lp-faq-icon">+</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA section */}
      <section className="section section--light">
        <div className="container">
          <div className="lp-final-cta">
            <h2 className="lp-final-cta-title">
              あなたの<span className="highlight">ビジネス</span>を、<span className="highlight">次のステージ</span>へ
            </h2>
            <p className="lp-final-cta-subtitle">まずはお気軽にご相談ください</p>
            <div className="btn-row">
              <button className="btn btn--primary btn--large">資料請求する</button>
              <button className="btn btn--outline btn--large">無料相談を申し込む</button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="section">
        <div className="container">
          <div className="cta-card">
            <h2 className="cta-title">まずはお気軽にご相談ください</h2>
            <p className="cta-description">
              海外展開に関するお悩みやご質問など、どんなことでもお聞かせください。
              <br />
              専門スタッフが丁寧にお答えいたします。
            </p>
            <div className="btn-row">
              <button className="btn btn--primary btn--large">無料相談を申し込む</button>
              <button className="btn btn--outline btn--large">資料請求はこちら</button>
            </div>
          </div>
        </div>
      </section>

      {/* Company Info section */}
      <section className="section">
        <div className="container">
          <div className="lp-company-info">
            <h3 className="lp-company-title">最新情報を知りたい方はこちら</h3>
            <button className="btn btn--primary">メルマガ登録する</button>
            <div className="lp-company-illustration">
              <Image
                src="/images/lp/company-illustration.png"
                alt="Company illustration"
                width={300}
                height={200}
                className="responsive-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <h3 className="footer-title">EKKYO AMESANKOH</h3>
            <p className="footer-subtitle">越境雨傘工房 - 海外展開トータルサポート</p>
            <p className="footer-copyright">© 2024 EKKYO AMESANKOH. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
