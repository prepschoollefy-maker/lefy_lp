import Link from 'next/link';
import { ArrowLeft, FileText, Clock, TrendingUp, BookOpen, Home, ArrowRight } from 'lucide-react';
import { CTASection } from '@/components/lefy/cta-section';
import { SectionHeader } from '@/components/lefy/section-header';

const reasons = [
  {
    number: 1,
    title: '競争激化・難化で"穴"が致命傷に',
    description: '近年の中学受験は難化傾向。基礎の穴が一つあると、応用問題で大きく差がつきます。',
    icon: TrendingUp,
  },
  {
    number: 2,
    title: '集団塾の教材は幅広く、最適化が必要',
    description: '集団塾はクラス全体向けのカリキュラム。お子様に本当に必要な部分を見極める必要があります。',
    icon: BookOpen,
  },
  {
    number: 3,
    title: '共働き増で「家庭管理」がボトルネック化',
    description: '学習管理を家庭だけで担うのは限界があります。親御さんの負担を分担する仕組みが必要です。',
    icon: Home,
  },
];

const pillars = [
  { title: '仕分け', description: 'やらないことを決める' },
  { title: 'マネジメント', description: '計画と進捗を管理' },
  { title: '講師品質', description: '最適なマッチング' },
];

export default function WhyPrivatePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <Link
        href="/"
        className="mb-6 inline-flex items-center gap-1 text-sm text-navy-500 transition-colors hover:text-navy-700"
      >
        <ArrowLeft className="h-4 w-4" />
        トップに戻る
      </Link>

      <section className="mb-8">
        <h1 className="mb-3 text-xl font-bold text-navy-800 sm:text-2xl">
          なぜ中学受験で個別利用が増えているのか
        </h1>
        <div className="flex items-center gap-2 text-xs text-navy-400">
          <Clock className="h-3.5 w-3.5" />
          読む目安 2分
        </div>
      </section>

      <section className="mb-10">
        <SectionHeader title="3つの理由" />
        <div className="space-y-3">
          {reasons.map((reason) => (
            <div
              key={reason.number}
              className="rounded-lg border border-navy-100 bg-white p-4"
            >
              <div className="mb-2 flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-navy-100 text-xs font-bold text-navy-600">
                  {reason.number}
                </div>
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-navy-50">
                  <reason.icon className="h-4.5 w-4.5 text-navy-600" />
                </div>
              </div>
              <h3 className="mb-1.5 text-sm font-semibold text-navy-800">
                {reason.title}
              </h3>
              <p className="text-xs leading-relaxed text-navy-500">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <div className="rounded-lg border border-navy-200 bg-navy-50/50 p-4">
          <p className="mb-4 text-sm font-medium text-navy-700">
            だから必要なのは、努力の追加より"設計と管理"
          </p>
          <div className="grid grid-cols-3 gap-2">
            {pillars.map((pillar, index) => (
              <div
                key={index}
                className="rounded-md bg-white p-3 text-center shadow-sm"
              >
                <p className="text-xs font-semibold text-navy-700">{pillar.title}</p>
                <p className="mt-1 text-[10px] text-navy-500">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mb-8">
        <Link
          href="/about"
          className="flex items-center justify-between rounded-lg border border-navy-100 bg-white p-4 transition-shadow hover:shadow-md"
        >
          <div>
            <p className="text-sm font-medium text-navy-700">LEFYの詳しい強みを見る</p>
            <p className="text-xs text-navy-500">仕分け・マネジメント・講師品質</p>
          </div>
          <ArrowRight className="h-4 w-4 text-navy-400" />
        </Link>
      </section>

      <section className="mb-8">
        <Link
          href="/pdf/guide.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 rounded-lg border border-navy-100 bg-white p-4 transition-shadow hover:shadow-md"
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-navy-50">
            <FileText className="h-5 w-5 text-navy-600" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-navy-700">PDFでも詳しくご覧いただけます</p>
            <p className="text-xs text-navy-500">中学受験×個別指導のご案内</p>
          </div>
        </Link>
      </section>

      <CTASection variant="compact" />
    </div>
  );
}
