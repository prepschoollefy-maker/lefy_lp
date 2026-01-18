import Link from 'next/link';
import { ArrowLeft, CheckCircle2, Target, Calendar, Users, MessageCircle2, BookOpen, TrendingUp, Clock } from 'lucide-react';
import { SectionHeader } from '@/components/lefy/section-header';
import { CTASection } from '@/components/lefy/cta-section';

// メインコピー候補（クライアント選択用）
// 候補1: 集団塾の学習を、"合格する回り方"に整える1対1個別指導。
// 候補2: SAPIX/日能研/四谷大塚… 大手塾のカリキュラムを"武器"に変える場所。
// 候補3: あと10点が届かない理由を、1対1で解明する。

const concerns = [
  '宿題が多く、復習や直しが崩れる',
  'テスト直しをしても次に活きない',
  '算数が「分かったつもり」→類題で落ちる',
  '親が管理しないと回らない／親子関係が疲れる',
  '志望校や優先順位が曖昧で不安',
  '集団のペースが合わず、学習が空回りすることがある',
  '何を捨てて何をやるべきか分からない',
];

const strengths = [
  {
    number: 1,
    title: 'やることを絞る（優先順位づけ）',
    description: '全部やるのではなく、点数に直結する順に並べ替える。志望校と現状から「今やるべきこと」を明確にします。',
    icon: Target,
    points: [
      '宿題の取捨選択（やる/やらない）を決定',
      '直しの粒度（どこまでやるか）を設計',
      '志望校と現状から「今週の最優先」を作る',
    ],
  },
  {
    number: 2,
    title: '家庭学習が回るように設計する',
    description: '家庭の負担を増やしすぎず、週単位で回る形に落とし込む。何をいつやるかを具体化し、学習の詰まりを先回りで解消します。',
    icon: Calendar,
    points: [
      '週のどこで何をどれくらい（時間/量）まで具体化',
      'テスト直しの型（原因分類→次週の打ち手）を作る',
      '学習の「詰まりポイント」を先回りで潰す',
    ],
  },
  {
    number: 3,
    title: '1対1で原因を特定し、最短で修正する',
    description: '解説不足ではなく、理解のズレ・手順の曖昧さ・思考の癖を見抜く。一人ひとりの躓きを特定し、最短ルートで修正します。',
    icon: TrendingUp,
    points: [
      '算数：式や図の意味づけ、手順の再現性を整える',
      '国語：設問の読み方、根拠の取り方を型にする',
      '理社：知識の穴を特定し、優先順位をつけて埋める',
    ],
  },
];

const consultationSteps = [
  {
    title: '現状の詰まりを整理',
    description: '宿題・復習・直しの状況を確認し、どこで詰まっているかを明確にします。',
  },
  {
    title: '直近2週間の回し方を仮設計',
    description: '何をやる/やらないを決め、実際に回せる学習プランを設計します。',
  },
  {
    title: '併用/LEFY中心どちらが合うか提案',
    description: '現状とご希望から、最適な通塾スタイルを率直にご提案します。',
  },
  {
    title: '合う・合わないも含めて率直に伝える',
    description: 'LEFYでサポートできること・できないことを正直にお伝えします。',
  },
];

const firstTwoWeeks = [
  { step: 1, title: '現状診断', description: 'テスト・ノート・学習時間を確認' },
  { step: 2, title: '優先順位づけ', description: 'やる/やらないを明確化' },
  { step: 3, title: '週の回し方設計', description: '宿題・直しのスケジュール作成' },
  { step: 4, title: '算数の穴補強スタート', description: '必要範囲のみピンポイントで' },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8">
      <Link
        href="/"
        className="mb-6 inline-flex items-center gap-1 text-sm text-navy-500 transition-colors hover:text-navy-700"
      >
        <ArrowLeft className="h-4 w-4" />
        トップに戻る
      </Link>

      {/* Section A: ファーストビュー */}
      <section className="mb-12">
        <div className="mb-4">
          <h1 className="mb-4 text-2xl font-bold leading-tight text-navy-800 sm:text-3xl">
            集団塾の学習を、<br className="sm:hidden" />
            <span className="text-orange-600">"合格する回り方"</span>に整える
            <br />
            1対1個別指導。
          </h1>
          <div className="flex items-center gap-2 text-xs text-navy-400">
            <Clock className="h-3.5 w-3.5" />
            読む目安 5分
          </div>
        </div>
        <div className="rounded-lg bg-gradient-to-br from-orange-50 to-yellow-50 p-6 shadow-sm">
          <p className="mb-3 text-base leading-relaxed text-navy-700">
            <span className="font-semibold text-navy-800">SAPIX・グノーブル・日能研・四谷大塚・希学園・浜学園</span>
            など、大手集団塾のカリキュラムを"武器"に変える個別指導です。
          </p>
          <p className="text-sm leading-relaxed text-navy-600">
            <span className="font-semibold text-orange-600">併用でも、LEFY中心でもOK。</span>
            "全部やる"ではなく、点数が上がる順に整えます。
          </p>
        </div>
      </section>

      {/* Section B: よくある悩みチェックリスト */}
      <section className="mb-12">
        <SectionHeader
          title="こんなお悩みはありませんか？"
          icon={CheckCircle2}
        />
        <div className="space-y-2.5">
          {concerns.map((concern, index) => (
            <div
              key={index}
              className="flex items-start gap-3 rounded-lg border border-navy-100 bg-white p-4"
            >
              <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-sm border-2 border-navy-300">
                <CheckCircle2 className="h-4 w-4 text-navy-400" />
              </div>
              <p className="text-sm leading-relaxed text-navy-700">{concern}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section C: LEFYが選ばれる3つの理由 */}
      <section className="mb-12">
        <SectionHeader
          title="LEFYが選ばれる3つの理由"
          icon={BookOpen}
        />
        <div className="space-y-6">
          {strengths.map((strength) => {
            const Icon = strength.icon;
            return (
              <div
                key={strength.number}
                className="rounded-lg border border-navy-100 bg-white p-6 shadow-sm"
              >
                <div className="mb-4 flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-navy-600 to-navy-800 text-white shadow-md">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <div className="mb-1 flex items-center gap-2">
                      <span className="text-xs font-bold text-navy-400">理由{strength.number}</span>
                    </div>
                    <h3 className="mb-2 text-lg font-bold text-navy-800">{strength.title}</h3>
                    <p className="text-sm leading-relaxed text-navy-600">{strength.description}</p>
                  </div>
                </div>
                <ul className="ml-4 space-y-2 border-l-2 border-orange-200 pl-4">
                  {strength.points.map((point, idx) => (
                    <li key={idx} className="text-sm text-navy-600">
                      <span className="mr-2 text-orange-500">▸</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      {/* Section D: 2つの通塾スタイル */}
      <section className="mb-12">
        <SectionHeader
          title="LEFYは2つの通い方があります"
          subtitle="どちらのスタイルも全力でサポートします"
        />
        <div className="grid gap-6 sm:grid-cols-2">
          {/* スタイルA: 集団塾併用 */}
          <div className="rounded-lg border-2 border-navy-200 bg-white p-6 shadow-sm">
            <div className="mb-4">
              <span className="mb-2 inline-block rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-700">
                スタイルA
              </span>
              <h3 className="mb-2 text-lg font-bold text-navy-800">集団塾併用</h3>
              <p className="text-xs text-navy-500">成績最大化サポート</p>
            </div>
            <p className="mb-4 text-sm leading-relaxed text-navy-600">
              <span className="font-semibold">SAPIX・グノ・日能研・四谷・希・浜</span>
              などの宿題・テスト・志望校特訓を回したい方向け
            </p>
            <ul className="space-y-2.5">
              <li className="flex items-start gap-2 text-sm text-navy-700">
                <span className="mt-1 text-orange-500">●</span>
                <span>宿題の整理と取捨選択</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-navy-700">
                <span className="mt-1 text-orange-500">●</span>
                <span>マンスリー/組分け等の直しを得点化</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-navy-700">
                <span className="mt-1 text-orange-500">●</span>
                <span>算数の穴補強と解法の安定</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-navy-700">
                <span className="mt-1 text-orange-500">●</span>
                <span>志望校に合わせた追加対策の優先順位づけ</span>
              </li>
            </ul>
          </div>

          {/* スタイルB: LEFY中心 */}
          <div className="rounded-lg border-2 border-navy-200 bg-white p-6 shadow-sm">
            <div className="mb-4">
              <span className="mb-2 inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                スタイルB
              </span>
              <h3 className="mb-2 text-lg font-bold text-navy-800">LEFY中心</h3>
              <p className="text-xs text-navy-500">オーダーメイド受験</p>
            </div>
            <p className="mb-4 text-sm leading-relaxed text-navy-600">
              集団のペースが合わないことがある／本人の型で伸ばしたい／学習習慣から整えたい方向け
            </p>
            <ul className="space-y-2.5">
              <li className="flex items-start gap-2 text-sm text-navy-700">
                <span className="mt-1 text-blue-500">●</span>
                <span>現状診断 → 合格までの最短ルート設計</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-navy-700">
                <span className="mt-1 text-blue-500">●</span>
                <span>習慣づくり → 土台 → 志望校対策</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-navy-700">
                <span className="mt-1 text-blue-500">●</span>
                <span>「今はまだピースが散らばっているだけ」を前提に、伸び方を最適化</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-navy-700">
                <span className="mt-1 text-blue-500">●</span>
                <span>お子様の相性に合わせた進め方で土台を整える</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section E: 指導体制 */}
      <section className="mb-12">
        <SectionHeader
          title="授業だけで終わらせない体制"
          icon={Users}
        />
        <div className="rounded-lg border border-navy-100 bg-white p-6 shadow-sm">
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-orange-100">
                <span className="text-sm font-bold text-orange-600">1</span>
              </div>
              <div>
                <h4 className="mb-1 text-sm font-semibold text-navy-800">2名以上の担当制</h4>
                <p className="text-sm leading-relaxed text-navy-600">
                  学習設計担当と授業担当が連携。複数の視点でお子様をサポートします。
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-orange-100">
                <span className="text-sm font-bold text-orange-600">2</span>
              </div>
              <div>
                <h4 className="mb-1 text-sm font-semibold text-navy-800">定期的な指導報告と面談</h4>
                <p className="text-sm leading-relaxed text-navy-600">
                  学習の進捗と方針を定期的に共有。ご家庭と一緒に最適な道筋を作ります。
                </p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-orange-100">
                <span className="text-sm font-bold text-orange-600">3</span>
              </div>
              <div>
                <h4 className="mb-1 text-sm font-semibold text-navy-800">講師の相性を重視したマッチング</h4>
                <p className="text-sm leading-relaxed text-navy-600">
                  お子様の性格や学習スタイルに合った講師を選定。相性を大切にします。
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* Section F: 無料相談でやること */}
      <section className="mb-12">
        <SectionHeader
          title="無料相談でやること"
          icon={MessageCircle2}
          subtitle="1回の相談で、今やるべきことが明確になります"
        />
        <div className="grid gap-4 sm:grid-cols-2">
          {consultationSteps.map((step, index) => (
            <div
              key={index}
              className="rounded-lg border border-navy-100 bg-white p-5"
            >
              <div className="mb-2 flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-navy-600 to-navy-800 text-xs font-bold text-white">
                  {index + 1}
                </div>
                <h4 className="text-sm font-bold text-navy-800">{step.title}</h4>
              </div>
              <p className="text-xs leading-relaxed text-navy-600">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section G: 入塾後の最初の2週間 */}
      <section className="mb-12">
        <div className="rounded-lg bg-gradient-to-br from-navy-50 to-blue-50 p-6">
          <h2 className="mb-4 text-lg font-bold text-navy-800">入塾後の最初の2週間でやること</h2>
          <div className="grid gap-3 sm:grid-cols-4">
            {firstTwoWeeks.map((item) => (
              <div key={item.step} className="rounded-lg bg-white p-4">
                <div className="mb-2 flex items-center gap-2">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-orange-500 text-xs font-bold text-white">
                    {item.step}
                  </div>
                </div>
                <h4 className="mb-1 text-sm font-semibold text-navy-800">{item.title}</h4>
                <p className="text-xs text-navy-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection variant="compact" />
    </div>
  );
}
