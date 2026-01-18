import Link from 'next/link';
import { ArrowLeft, MessageCircle, ExternalLink } from 'lucide-react';

export default function LinePage() {
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
          LINEで相談
        </h1>
        <p className="text-sm text-navy-600">
          お気軽にメッセージをお送りください。
        </p>
      </section>

      <section className="mb-8">
        <a
          href="https://line.me/example"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-4 rounded-lg border border-navy-100 bg-white p-6 text-center transition-shadow hover:shadow-md"
        >
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
            <MessageCircle className="h-8 w-8 text-green-600" />
          </div>
          <div>
            <p className="text-base font-semibold text-navy-800">LEFY公式LINE</p>
            <p className="mt-1 text-sm text-navy-500">友だち追加してメッセージを送る</p>
          </div>
          <span className="flex items-center gap-1 text-sm font-medium text-green-600">
            LINEを開く
            <ExternalLink className="h-4 w-4" />
          </span>
        </a>
      </section>

      <section className="rounded-lg border border-navy-100 bg-navy-50/30 p-4">
        <h2 className="mb-2 text-sm font-semibold text-navy-700">LINEでできること</h2>
        <ul className="space-y-1.5 text-xs text-navy-600">
          <li>- 学習に関するご相談</li>
          <li>- 無料診断のお申し込み</li>
          <li>- 資料請求・お問い合わせ</li>
        </ul>
        <p className="mt-3 text-xs text-navy-400">
          通常1営業日以内にご返信いたします
        </p>
      </section>
    </div>
  );
}
