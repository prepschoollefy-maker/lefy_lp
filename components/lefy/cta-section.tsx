import Link from 'next/link';
import { MessageCircle } from 'lucide-react';

interface CTASectionProps {
  variant?: 'default' | 'compact';
}

export function CTASection({ variant = 'default' }: CTASectionProps) {
  if (variant === 'compact') {
    return (
      <div className="rounded-lg border border-navy-100 bg-navy-50/50 p-6">
        <p className="mb-4 text-sm text-navy-700">
          ご不明点や学習状況の整理は、無料でご相談いただけます。
        </p>
        <div className="flex flex-col gap-2 sm:flex-row">
          <Link
            href="/contact"
            className="flex items-center justify-center gap-2 rounded-lg bg-orange-500 px-6 py-3 text-base font-bold text-navy-900 shadow-lg transition-all hover:bg-orange-600 hover:shadow-xl"
          >
            学習カウンセリングに申し込む
          </Link>
          <Link
            href="https://lin.ee/P0lR1LD"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-lg bg-line px-6 py-3 text-base font-semibold text-white transition-all hover:bg-line-dark"
          >
            <MessageCircle className="h-4 w-4" />
            LINEで申し込む
          </Link>
        </div>
      </div>
    );
  }

  return (
    <section className="rounded-2xl bg-gradient-to-br from-navy-600 to-navy-700 p-8 shadow-2xl">
      <h2 className="mb-3 text-xl font-bold text-white">
        お気軽にご相談ください
      </h2>
      <p className="mb-6 text-base leading-relaxed text-navy-100">
        近年の中学受験は入試問題のレベルが非常に高くなっているため、直前対策だけでは間に合いません。
        <br className="hidden sm:block" />
        日々の勉強がうまく回らないと思っている間にあっという間に6年生を迎えてしまいます。
        <br className="hidden sm:block" />
        着実に伸びる勉強サイクルを今すぐ実現しましょう。
      </p>
      <div className="flex flex-col gap-2 sm:flex-row">
        <Link
          href="/contact"
          className="flex items-center justify-center gap-2 rounded-lg bg-orange-500 px-6 py-3 text-base font-bold text-navy-900 shadow-lg transition-all hover:bg-orange-600 hover:shadow-xl"
        >
          学習カウンセリングに申し込む
        </Link>
        <Link
          href="https://lin.ee/P0lR1LD"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 rounded-lg bg-line px-6 py-3 text-base font-semibold text-white transition-all hover:bg-line-dark"
        >
          <MessageCircle className="h-4 w-4" />
          LINEで申し込む
        </Link>
      </div>
    </section>
  );
}
