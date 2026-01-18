'use client';

import Link from 'next/link';
import { ArrowLeft, FileText, Clock, Shield } from 'lucide-react';
import { CTASection } from '@/components/lefy/cta-section';
import { SectionHeader } from '@/components/lefy/section-header';
import { FeeSimulator } from '@/components/tuition/fee-simulator';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: '週何コマから始められますか？',
    answer: '週1コマからご受講いただけます。まずは1コマで様子を見て、必要に応じて増やす方が多いです。',
  },
  {
    question: '途中でコマ数を変更できますか？',
    answer: 'はい、月単位で変更可能です。塾の進度や学校行事に合わせて柔軟に調整いただけます。',
  },
  {
    question: '教材費はかかりますか？',
    answer: '原則、集団塾のテキストを使用します。追加教材が必要な場合は別途ご案内します。',
  },
  {
    question: '体験授業はありますか？',
    answer: 'はい、無料の学習戦略診断（カウンセリング）後に体験授業をご案内しています。',
  },
  {
    question: '季節講習は必須ですか？',
    answer: 'いいえ、必須ではありません。必要な方のみ、個別にプランをご提案します。',
  },
  {
    question: '支払い方法は？',
    answer: '口座振替（毎月27日引き落とし）が基本です。初回のみ振込も可能です。',
  },
  {
    question: '退塾時の手続きは？',
    answer: '退塾月の前月末までにお申し出いただければ、翌月末での退塾となります。違約金等はありません。',
  },
];

export default function PricingPage() {
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
          授業料／システム
        </h1>
        <div className="flex items-center gap-2 text-xs text-navy-400">
          <Clock className="h-3.5 w-3.5" />
          読む目安 1分
        </div>
      </section>

      <section className="mb-8 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50/50 p-6 shadow-sm">
        <div className="flex items-start gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-100">
            <Shield className="h-5 w-5 text-blue-600" />
          </div>
          <div>
            <h3 className="mb-1 text-base font-bold text-navy-800">安心してご検討ください</h3>
            <p className="text-sm leading-relaxed text-navy-600">
              押し売りはしません。料金はシンプルで明確です。ご不明点があればお気軽にお問い合わせください。
            </p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <FeeSimulator />
      </section>

      <section className="mb-10">
        <SectionHeader title="よくある質問" />
        <Accordion type="single" collapsible className="rounded-lg border border-navy-100 bg-white">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className={index !== faqs.length - 1 ? 'border-b border-navy-100' : ''}
            >
              <AccordionTrigger className="px-4 py-3 text-left text-sm font-medium text-navy-700 hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-3 text-sm text-navy-500">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>



      <CTASection />
    </div>
  );
}
