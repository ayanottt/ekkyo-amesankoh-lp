import Image from "next/image"
import Link from "next/link";
import Accordion from "./components/Accordion";
import "./style.css"

export const metadata = {
  title: "Landing Page | EKKYO AMESANKOH",
  description: "Short-term total support. LP production, localization, and operations.",
}

export default function LP() {
  const items = [
    {
      question: "越境ECは初めてで不安です。本当に始められますか？",
      answer:
        "初回ヒアリングで体制・商品・法規制を棚卸しし、最小構成から段階的に開始できます。運用代行もOKです。",
    },
    {
      question: "食品や化粧品など規制が厳しい商品でも対応できますか？",
      answer:
        " EUでの表示・成分・輸入手続きに関する要件を確認し、必要なラベルや書類の整備をサポートします。",
    },
    {
      question: "現地に在庫を置いてEU内から発送できますか？",
      answer:
        " 現地3PLと連携し、在庫保管・ピッキング・返品処理までワンストップで対応可能です。",
    },
  ];
  return (
    <main className="lp">
      {/* header */}
      <header>
        <div className="header-box">
          <div className="logo">
            <Image
              src="/images/lp/logo.png"
              alt="Amesankoh"
              width={110}
              height={76}
            />
          </div>
          <div className="btn-row">
            <div className="header-btn btn-blue btn-document btn">
              <Link href="/">資料請求する</Link>
            </div>
            <div className="header-btn btn-red btn-contact btn">
              <Link href="/">無料相談を申し込む</Link>
            </div>
          </div>
        </div>
      </header>

      <div className="back">
        {/* Hero section */}
        <section className="section section-hero">
          <div className="container">
            <div className="hero">
              <div className="hero-content">
                <p className="hero-subtitle"><span className="highlight">“売りたい”</span>を<span className="highlight">“売れる”</span>に変える</p>
                <h1 className="hero-title">
                  越境ECトータルサポート
                </h1>
                <p className="hero-description">
                  市場調査からサイト構築、運用まで、海外展開をまるごとサポートします。
                </p>
                <div className="btn-row">
                  <div className="btn-blue btn-document btn">
                    <Link href="/">資料請求する</Link>
                  </div>
                  <div className="btn-red btn-contact btn">
                    <Link href="/t">無料相談を申し込む</Link>
                  </div>
                </div>
              </div>
              <div className="hero-image">
                <Image
                  src="/images/lp/main.svg"
                  alt=""
                  width={700}
                  height={494}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features section */}
        <section className="section section-features">
          <div className="container">
            <h2 className="section-title">こんなお悩みありませんか？</h2>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-img">
                  <Image
                    src="/images/lp/illusrator_01.svg"
                    alt=""
                    width={340}
                    height={234}
                  />
                </div>
                <h3 className="feature-title">
                  自社の商品を海外で<br />どうやってアピールしたらいいか<br />わからない
                </h3>
              </div>
              <div className="feature-card">
                <div className="feature-img">
                  <Image
                    src="/images/lp/illusrator_02.svg"
                    alt=""
                    width={340}
                    height={234}
                  />
                </div>
                <h3 className="feature-title">
                  言語対応に不安がある
                </h3>
              </div>
              <div className="feature-card">
                <div className="feature-img">
                  <Image
                    src="/images/lp/illusrator_03.svg"
                    alt=""
                    width={340}
                    height={234}
                  />
                </div>
                <h3 className="feature-title">
                  ECサイトの決済や<br />カートシステムの設定がわからない
                </h3>
              </div>
            </div>
            <div className="feature-sankaku"></div>
          </div>
        </section>

        {/* Services section */}
        <section className="section section-service">
          <div className="container">
            <h2 className="services-title">
              こうしたお悩みをまとめて解決するのが、
              <br />
              当社の<span className="highlight">超短期ECサポートサービス</span>です。
            </h2>

            <div className="services-grid">
              <div className="service-card">
                <div className="services-img">
                  <Image src="/images/lp/service_01.svg" alt="" width={218} height={134} />
                </div>
                <h3 className="service-title">戦略設計</h3>
                <p className="service-description">
                  海外市場で成果を出すためには、事前のリサーチが欠かせません。<br />現地ニーズ・競合状況を分析し、最適な進出戦略を設計します。
                </p>
              </div>

              <div className="service-card">
                <div className="services-img">
                  <Image src="/images/lp/service_02.svg" alt="" width={218} height={134} />
                </div>
                <h3 className="service-title">ECサイト構築</h3>
                <p className="service-description">
                  「Shopify」を活用し、海外ユーザーに最適化されたサイトを構築。<br />設計から公開まで一貫してサポートするので、専門知識がなくても心配ありません。
                </p>
              </div>

              <div className="service-card">
                <div className="services-img">
                  <Image src="/images/lp/service_03.svg" alt="" width={218} height={134} />
                </div>
                <h3 className="service-title">翻訳・ローカライズ</h3>
                <p className="service-description">
                  単なる翻訳ではなく、文化や消費者心理に合わせたローカライズを実施。<br />商品の魅力を現地の言葉で正しく伝えます。
                </p>
              </div>

              <div className="service-card">
                <div className="services-img">
                  <Image src="/images/lp/service_04.svg" alt="" width={218} height={134} />
                </div>
                <h3 className="service-title">物流・決済サポート</h3>
                <p className="service-description">
                  EU圏で求められる物流・決済環境を整備。<br />スムーズな配送ルートと現地に合わせた決済方法を導入し、購入のハードルを下げます。
                </p>
              </div>

              <div className="service-card">
                <div className="services-img">
                  <Image src="/images/lp/service_05.svg" alt="" width={218} height={134} />
                </div>
                <h3 className="service-title">SNS・広告運用代行</h3>
                <p className="service-description">
                  海外市場に適したSNS運用や広告展開を代行。<br />現地ユーザーへの認知拡大から販売促進までを継続的にサポートします。
                </p>
              </div>

              <div className="service-card">
                <div className="services-img">
                  <Image src="/images/lp/service_06.svg" alt="" width={218} height={134} />
                </div>
                <h3 className="service-title">現地サポート</h3>
                <p className="service-description">
                  ドイツ在住のスタッフが、現地視点で企業をサポート。<br />オンラインだけでは得られないリアルな情報と対応力で、海外展開を強力にバックアップします。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Reasons section */}
        <section className="section">
          <div className="container">
            <h2 className="reasons-title">
              私たちが選ばれる<span className="highlight">3つの理由</span>
            </h2>

            <div className="reasons-list">
              <div className="reason-item">
                <div className="reason-image">
                  <Image
                    src="/images/lp/reason_01.jpg"
                    alt=""
                    width={420}
                    height={280}
                  />
                </div>
                <div className="reason-content">
                  <span className="reason-number">01</span>
                  <h3 className="reason-title">現地視点のサポート</h3>
                  <p className="reason-subtitle">ドイツ在住スタッフが、消費者の文化や行動を理解したうえで支援します。</p>
                  <p className="reason-description">
                    ドイツ在住スタッフが現地文化を理解し、翻訳だけでなく表現・デザイン・販促、さらにはポップアップ出店代行までサポート。<br />海外の顧客に“伝わる”EC運営を実現します。
                  </p>
                </div>
              </div>

              <div className="reason-item reason-item--reverse">
                <div className="reason-image">
                  <Image
                    src="/images/lp/reason_02.jpg"
                    alt=""
                    width={420}
                    height={280}
                  />
                </div>
                <div className="reason-content">
                  <span className="reason-number">02</span>
                  <h3 className="reason-title">ワンストップ体制</h3>
                  <p className="reason-subtitle">市場調査からサイト構築、翻訳、物流、広告運用までを一社で完結。</p>
                  <p className="reason-description">
                    複数の業者を調整する手間がなく、海外ECに関する専門知識がなくても安心です。<br />担当者様は「何をすればいいか」を考えるより、事業に専念できます。
                  </p>
                </div>
              </div>

              <div className="reason-item">
                <div className="reason-image">
                  <Image
                    src="/images/lp/reason_03.jpg"
                    alt=""
                    width={420}
                    height={280}
                  />
                </div>
                <div className="reason-content">
                  <span className="reason-number">03</span>
                  <h3 className="reason-title">中小企業に特化</h3>
                  <p className="reason-subtitle">食品・アパレル・雑貨を中心に、日本の中小企業の海外展開を支援しています。</p>
                  <p className="reason-description">
                    初めての越境ECでも、小規模から始められる柔軟なプランをご用意。<br />貴社の海外展開を、現地に基づいたノウハウで確実に後押しします。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing section */}
        <section className="section section--blue">
          <div className="container">
            <div className="pricing-header">
              <div className="eyebrow"><p>企業規模や目的に応じて選べる！</p></div>
              <h2 className="pricing-title">越境ECサポートプラン</h2>
            </div>

            <div className="pricing-table-wrapper">
              <table className="pricing-table">
                <thead>
                  <tr>
                    <th className="table-header table-first" colSpan={3}>プラン名</th>
                    <th className="table-header table-header--light">
                      <span className="table-header__subtitle">試験的に海外展開を始めたい</span><br />
                      ライトプラン
                    </th>
                    <th className="table-header table-header--light">
                      <span className="table-header__subtitle">基本的なサービスが揃ってる</span><br />
                      スタンダードプラン
                    </th>
                    <th className="table-header table-header--light">
                      <span className="table-header__subtitle">まるっとお任せしたい</span><br />
                      プレミアムプラン
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="table-cell table-cell--feature" colSpan={3}>月額（税抜）</td>
                    <td className="table-cell table-cell--center">¥300,000</td>
                    <td className="table-cell table-cell--center">¥500,000</td>
                    <td className="table-cell table-cell--center">¥1,000,000〜</td>
                  </tr>
                  <tr>
                    <td className="table-cell table-cell--feature" colSpan={3}>対象</td>
                    <td className="table-cell table-cell--center">越境EC初期導入・テスト向け（DtoC）</td>
                    <td className="table-cell table-cell--center">本格展開・売上化を目指す企業向け</td>
                    <td className="table-cell table-cell--center">現地最適化＆継続成長型</td>
                  </tr>
                  <tr>
                    <td className="table-cell table-cell--feature" colSpan={3}>契約期間</td>
                    <td className="table-cell table-cell--center">1ヶ月</td>
                    <td className="table-cell table-cell--center">3ヶ月</td>
                    <td className="table-cell table-cell--center">6ヶ月</td>
                  </tr>
                  <tr>
                    <td className="table-cell table-cell--feature" rowSpan={12}>サービス内容</td>
                    <td className="table-cell table-cell--feature table-cell--feature-left" rowSpan={3}>戦略設計</td>
                    <td className="table-cell table-cell--feature table-cell--feature-left">市場・商品分析</td>
                    <td className="table-cell table-cell--center">○</td>
                    <td className="table-cell table-cell--center">○</td>
                    <td className="table-cell table-cell--center">○</td>
                  </tr>
                  <tr>
                    <td className="table-cell table-cell--feature table-cell--feature-left">KPIレポート提出<p className="note">※月1回</p></td>
                    <td className="table-cell table-cell--center">×</td>
                    <td className="table-cell table-cell--center">○</td>
                    <td className="table-cell table-cell--center">○</td>
                  </tr>
                  <tr>
                    <td className="table-cell table-cell--feature table-cell--feature-left">CRM導入支援</td>
                    <td className="table-cell table-cell--center">×</td>
                    <td className="table-cell table-cell--center">×</td>
                    <td className="table-cell table-cell--center">○</td>
                  </tr>
                  <tr>
                    <td className="table-cell table-cell--feature table-cell--feature-left" rowSpan={3}>EC・LP構築</td>
                    <td className="table-cell table-cell--feature table-cell--feature-left">LP制作</td>
                    <td className="table-cell table-cell--center">○</td>
                    <td className="table-cell table-cell--center">○</td>
                    <td className="table-cell table-cell--center">○</td>
                  </tr>
                  <tr>
                    <td className="table-cell table-cell--feature table-cell--feature-left">EC構築</td>
                    <td className="table-cell table-cell--center">×</td>
                    <td className="table-cell table-cell--center">○</td>
                    <td className="table-cell table-cell--center">○</td>
                  </tr>
                  <tr>
                    <td className="table-cell table-cell--feature table-cell--feature-left">問い合わせフォーム設計</td>
                    <td className="table-cell table-cell--center">×</td>
                    <td className="table-cell table-cell--center">×</td>
                    <td className="table-cell table-cell--center">○</td>
                  </tr>
                  <tr>
                    <td className="table-cell table-cell--feature table-cell--feature-left" rowSpan={2}>翻訳・ローカライズ</td>
                    <td className="table-cell table-cell--feature table-cell--feature-left">商品翻訳<p className="note">※日本語→英語/ドイツ語</p></td>
                    <td className="table-cell table-cell--center">○</td>
                    <td className="table-cell table-cell--center">○</td>
                    <td className="table-cell table-cell--center">○</td>
                  </tr>
                  <tr>
                    <td className="table-cell table-cell--feature table-cell--feature-left">ECサイトの多言語対応<p className="note">※日本語/英語/ドイツ語</p></td>
                    <td className="table-cell table-cell--center">×</td>
                    <td className="table-cell table-cell--center">×</td>
                    <td className="table-cell table-cell--center">○</td>
                  </tr>
                  <tr>
                    <td className="table-cell table-cell--feature table-cell--feature-left" rowSpan={2}>SNS・広告運用代行</td>
                    <td className="table-cell table-cell--feature table-cell--feature-left">SNS広告初期設定</td>
                    <td className="table-cell table-cell--center">○</td>
                    <td className="table-cell table-cell--center">○</td>
                    <td className="table-cell table-cell--center">○</td>
                  </tr>
                  <tr>
                    <td className="table-cell table-cell--feature table-cell--feature-left">SNS広告運用代行</td>
                    <td className="table-cell table-cell--center">×</td>
                    <td className="table-cell table-cell--center">○</td>
                    <td className="table-cell table-cell--center">○</td>
                  </tr>
                  <tr>
                    <td className="table-cell table-cell--feature table-cell--feature-left" rowSpan={2}>現地サポート</td>
                    <td className="table-cell table-cell--feature table-cell--feature-left">現地カスタマー対応</td>
                    <td className="table-cell table-cell--center">×</td>
                    <td className="table-cell table-cell--center">○</td>
                    <td className="table-cell table-cell--center">○</td>
                  </tr>
                  <tr>
                    <td className="table-cell table-cell--feature table-cell--feature-left">現地市場に合わせた改善提案<p className="note">※レポート×改善会議</p></td>
                    <td className="table-cell table-cell--center">×</td>
                    <td className="table-cell table-cell--center">×</td>
                    <td className="table-cell table-cell--center">○</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="pricing-footer">
              <p className="pricing-description">継続的なサポートが欲しい方</p>
              <table className="pricing-footer__table">
                <tbody>
                  <tr>
                    <th className="table-header">オプション<span>¥50,000〜 /月</span></th>
                    <td className="table-cell">
                      <ul className="list-disc">
                        <li>広告運用（月額）</li>
                        <li>SNS投稿代行 </li>
                        <li>Google Analyticsレポート＋改善提案</li>
                        <li>軽微なEC更新/CS調整</li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>

            </div>
            <div className="btn-row">
              <div className="btn-blue btn-document btn">
                <Link href="/">資料請求する</Link>
              </div>
              <div className="btn-red btn-contact btn">
                <Link href="/t">無料相談を申し込む</Link>
              </div>
            </div>
          </div>
        </section>


        {/* Case Studies section */}
        <section className="section">
          <div className="container">
            <h2 className="section-title">実績</h2>
            <div className="lp-case-studies-grid">
              <div className="lp-case-study-card">
                <p className="lp-case-study__category lp-case-study__category_ec">EC制作</p>
                <div className="lp-case-study-image">
                  <Image
                    src="/images/lp/work_01.jpg"
                    alt=""
                    width={440}
                    height={270}
                  />
                </div>
                <div className="lp-case-study-content-text">
                  <div className="lp-case-study-content">
                    <dl className="case-facts">
                      <div className="row">
                        <dt>サービス内容</dt>
                        <dd>Shopifyを活用したECサイト構築</dd>
                      </div>

                      <div className="row">
                        <dt>相談背景</dt>
                        <dd>日本雑貨商品の販路をEU現地に広げたい</dd>
                      </div>

                      <div className="row">
                        <dt>結果</dt>
                        <dd>
                          <ul className="list-disc">
                            <li>現地デザイナーとのコラボによりTシャツ販売数<strong>150%増</strong></li>
                          </ul>
                        </dd>
                      </div>
                    </dl>
                    <p className="case-explan">海外と日本の色彩感覚の違いを意識し、多彩なカラーに加え、日本文化や人気の漢字をデザインに取り入れました。</p>

                  </div>
                  <div className="case-btn btn-nomal btn">
                    <Link href="https://amesankoh.com/">ECサイトを見る</Link>
                  </div>
                </div>
              </div>

              <div className="lp-case-study-card">
                <p className="lp-case-study__category lp-case-study__category_sns">SNS運用</p>
                <div className="lp-case-study-image">
                  <Image
                    src="/images/lp/work_02.png"
                    alt=""
                    width={440}
                    height={270}
                  />
                </div>
                <div className="lp-case-study-content-text">
                  <div className="lp-case-study-content">
                    <dl className="case-facts">
                      <div className="row">
                        <dt>サービス内容</dt>
                        <dd>ShopifyによるEC構築＋SNS戦略支援</dd>
                      </div>

                      <div className="row">
                        <dt>相談背景</dt>
                        <dd>現地でのブランド認知拡大とファンづくり</dd>
                      </div>

                      <div className="row">
                        <dt>結果</dt>
                        <dd>
                          <ul className="list-disc">
                            <li>オランダのインフルエンサーによる商品紹介で<strong>フォロワー増加</strong></li>
                            <li>オフラインイベント出展で<strong>現地顧客との接点を拡大</strong></li>
                          </ul>
                        </dd>
                      </div>
                    </dl>
                    <p className="case-explan">単なる情報発信ではなく、現地の人々と“一緒に楽しむ”投稿を意識し、長く応援されるファンづくりを進めています。</p>
                  </div>
                  <div className="case-btn btn-nomal btn">
                    <Link href="https://f-idea-s.jp/business/europe/#branding">詳細を見る</Link>
                  </div>
                </div>
              </div>

              <div className="lp-case-study-card">
                <p className="lp-case-study__category lp-case-study__category_ec">EC制作</p>
                <div className="lp-case-study-image">
                  <Image
                    src="/images/lp/work_03.jpg"
                    alt=""
                    width={440}
                    height={270}
                  />
                </div>
                <div className="lp-case-study-content-text">
                  <div className="lp-case-study-content">
                    <dl className="case-facts">
                      <div className="row">
                        <dt>サービス内容</dt>
                        <dd>Shopifyを活用したECサイト構築</dd>
                      </div>

                      <div className="row">
                        <dt>相談背景</dt>
                        <dd>海外でも高まるポケモンカード需要に対応し、EUでの販路拡大を目指す</dd>
                      </div>

                      <div className="row">
                        <dt>結果</dt>
                        <dd>
                          <ul className="list-disc">
                            <li>メール配信サービスと連携し、<strong>消費者向け＋B向けECを構築</strong></li>
                          </ul>
                        </dd>
                      </div>
                    </dl>
                    <p className="case-explan">B向けECとしての可能性を広げ、卸売や提携も視野に入れた仕組みづくりを心がけています。</p>
                  </div>
                  <div className="case-btn btn-nomal btn">
                    <Link href="https://neotokyocards.com/ja">ECサイトを見る</Link>
                  </div>
                </div>
              </div>

              <div className="lp-case-study-card">
                <p className="lp-case-study__category lp-case-study__category_lp">LP制作</p>
                <div className="lp-case-study-image">
                  <Image
                    src="/images/lp/work_04.jpg"
                    alt=""
                    width={440}
                    height={270}
                  />
                </div>
                <div className="lp-case-study-content-text">
                  <div className="lp-case-study-content">
                    <dl className="case-facts">
                      <div className="row">
                        <dt>サービス内容</dt>
                        <dd>新規顧客獲得を目的としたLPデザイン</dd>
                      </div>

                      <div className="row">
                        <dt>相談背景</dt>
                        <dd>日本の技術を使ったアート作品をもっと身近に届けたいが、既存サイトでは「サービスの魅力が伝わりにくい」と課題を抱えていた。新規ユーザー獲得に向けて、世界観を大切にしたLPが必要だった。</dd>
                      </div>

                      <div className="row">
                        <dt>結果</dt>
                        <dd>
                          <ul className="list-disc">
                            <li>LPから申込/購入導線までの<strong>UX改善</strong></li>
                            <li>広告用に複数の<strong>クリエイティブを展開</strong></li>
                          </ul>
                        </dd>
                      </div>
                    </dl>
                    <p className="case-explan">日本の技術を利用したアートの魅力を“言葉”ではなく“体験”として伝えるために、ビジュアルの力を最大限に活かす設計を意識しました。ユーザーがLPを訪れた瞬間に世界観に没入できるように工夫しています。</p>

                  </div>
                  <div className="case-btn btn-nomal btn">
                    <Link href="https://artdeli.info/">LPを見る</Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="case-btn btn-nomal btn case-footer">
              <Link href="https://logot.de/work">その他の制作実績を見る</Link>
            </div>
          </div>
        </section>

        {/* Implementation Flow section */}
        <section className="section">
          <div className="container">
            <h2 className="section-title">導入フロー</h2>

            <div className="lp-flow-list">

              <div className="lp-flow-item">
                <div className="lp-flow-number-box">
                  <p className="flow-number">01</p>
                  <div className="flow-number-image">
                    <Image
                      src="/images/lp/flow_01.svg"
                      alt=""
                      width={100}
                      height={80}
                    />
                  </div>
                </div>
                <div className="lp-flow-content">
                  <h3 className="lp-flow-title">無料相談・ヒアリング</h3>
                  <p className="lp-flow-description">
                    まずはお気軽にご相談ください。<br />現状の課題や目指したい方向性をヒアリングし、海外展開の可能性を整理します。
                  </p>
                </div>
              </div>
              <div className="lp-flow-item">
                <div className="lp-flow-number-box">
                  <p className="flow-number">02</p>
                  <div className="flow-number-image">
                    <Image
                      src="/images/lp/flow_02.svg"
                      alt=""
                      width={100}
                      height={80}
                    />
                  </div>
                </div>
                <div className="lp-flow-content">
                  <h3 className="lp-flow-title">ご提案</h3>
                  <p className="lp-flow-description">
                    ヒアリング内容をもとに、市場調査の概要や戦略設計の方向性をご提案。<br />貴社に最適なプランをわかりやすくご説明します。
                  </p>
                </div>
              </div>
              <div className="lp-flow-item">
                <div className="lp-flow-number-box">
                  <p className="flow-number">03</p>
                  <div className="flow-number-image">
                    <Image
                      src="/images/lp/flow_03.svg"
                      alt=""
                      width={100}
                      height={80}
                    />
                  </div>
                </div>
                <div className="lp-flow-content">
                  <h3 className="lp-flow-title">ご契約</h3>
                  <p className="lp-flow-description">
                    ご提案内容にご納得いただいた後、正式にご契約。<br />スケジュールや体制を明確にし、プロジェクトを開始します。
                  </p>
                </div>
              </div>
              <div className="lp-flow-item">
                <div className="lp-flow-number-box">
                  <p className="flow-number">04</p>
                  <div className="flow-number-image">
                    <Image
                      src="/images/lp/flow_04.svg"
                      alt=""
                      width={100}
                      height={80}
                    />
                  </div>
                </div>
                <div className="lp-flow-content">
                  <h3 className="lp-flow-title">リサーチ・戦略設計</h3>
                  <p className="lp-flow-description">
                    市場調査・競合分析を実施し、現地に適した戦略を策定。<br />「売れる仕組み」を設計し、サイト構築や運用方針の基盤を整えます。
                  </p>
                </div>
              </div>
              <div className="lp-flow-item">
                <div className="lp-flow-number-box">
                  <p className="flow-number">05</p>
                  <div className="flow-number-image">
                    <Image
                      src="/images/lp/flow_05.svg"
                      alt=""
                      width={100}
                      height={80}
                    />
                  </div>
                </div>
                <div className="lp-flow-content">
                  <h3 className="lp-flow-title">各サービス提供・ローンチ（公開・運用開始）</h3>
                  <p className="lp-flow-description">
                    プランに応じて、サイト構築・翻訳・物流/決済設定・広告運用などを実施。<br />サイト公開やプロモーション開始までを伴走し、スムーズなローンチを実現します。
                  </p>
                </div>
              </div>
              <div className="lp-flow-item">
                <div className="lp-flow-number-box">
                  <p className="flow-number">06</p>
                  <div className="flow-number-image">
                    <Image
                      src="/images/lp/flow_06.svg"
                      alt=""
                      width={100}
                      height={80}
                    />
                  </div>
                </div>
                <div className="lp-flow-content">
                  <h3 className="lp-flow-title">フォローアップ（運用・改善）</h3>
                  <p className="lp-flow-description">
                    公開後も運用状況をモニタリングし、改善提案や運用代行を継続的にサポート。<br />長期的な成果につながる体制を整えます。
                    <span className="note">※本ステップはプラン内容によりご提供範囲が異なります。</span>
                  </p>
                </div>
              </div>

            </div>
            <div className="btn-row">
              <div className="btn-blue btn-document btn">
                <Link href="/">資料請求する</Link>
              </div>
              <div className="btn-red btn-contact btn">
                <Link href="/t">無料相談を申し込む</Link>
              </div>
            </div>
          </div>
        </section>
      </div>


      {/* FAQ section */}
      <section className="section section--blue">
        <div className="container">
          <h2 className="lp-faq-title">よくあるご質問</h2>
          <Accordion items={items} allowMultiple />
        </div>
      </section>

      {/* Final CTA section */}
      <section className="section section-cta">
        <div className="container">
          <div className="lp-final-cta">
            <h2 className="lp-final-cta-title">
              あなたの<span className="highlight">ビジネス</span>を、<span className="highlight">次のステージ</span>へ
            </h2>
            <p className="lp-final-cta-subtitle">まずはお気軽にご相談ください</p>
            <div className="btn-row">
              <div className="btn-blue btn-document btn">
                <Link href="/">資料請求する</Link>
              </div>
              <div className="btn-red btn-contact btn">
                <Link href="/t">無料相談を申し込む</Link>
              </div>
            </div>
          </div>
          <div className="lp-final-cta cta-mailmagazin">
            <h2>最新情報を知りたい方はこちら</h2>
            <div className="btn-row">
              <div className="btn-green btn-mailmagazin btn">
                <Link href="/">メルマガを登録する</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <Image
                src="/images/lp/logo_W.png"
                alt=""
                width={100}
                height={80}
              />
            </div>
            <p className="adress">〒155-0033<br />東京都世田谷区代田5丁目1-9 エトワール一番館101</p>
          </div>
          <ul className="footer-link">
            <li><Link href="/">プライバシーポリシー</Link></li>
            <li><Link href="/">利用規約</Link></li>
            <li><Link href="/">クッキーポリシー</Link></li>
          </ul>
          <small>© 2025 Amesankoh, Inc. All Rights Reserved.</small>
        </div>

      </footer>
    </main>
  )
}
