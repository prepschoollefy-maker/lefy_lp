import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function PrivacyPage() {
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
          プライバシーポリシー
        </h1>
      </section>

      <section className="space-y-6 text-sm text-navy-600">
        <div>
          <h2 className="mb-2 font-semibold text-navy-800">1. 個人情報の取得</h2>
          <p className="leading-relaxed">
            当塾は、お問い合わせ、資料請求、入塾手続き等において、氏名、連絡先等の個人情報を適法かつ公正な手段により取得いたします。
          </p>
        </div>

        <div>
          <h2 className="mb-2 font-semibold text-navy-800">2. 個人情報の利用目的</h2>
          <p className="leading-relaxed">
            取得した個人情報は、以下の目的で利用いたします。
          </p>
          <ul className="mt-2 list-inside list-disc space-y-1 text-navy-500">
            <li>お問い合わせへの回答</li>
            <li>資料の送付</li>
            <li>入塾手続き及び授業運営</li>
            <li>サービス向上のためのご連絡</li>
          </ul>
        </div>

        <div>
          <h2 className="mb-2 font-semibold text-navy-800">3. 個人情報の第三者提供</h2>
          <p className="leading-relaxed">
            当塾は、法令に基づく場合を除き、ご本人の同意なく個人情報を第三者に提供いたしません。
          </p>
        </div>

        <div>
          <h2 className="mb-2 font-semibold text-navy-800">4. 個人情報の管理</h2>
          <p className="leading-relaxed">
            当塾は、個人情報の漏洩、滅失、毀損の防止その他の安全管理のために必要な措置を講じます。
          </p>
        </div>

        <div>
          <h2 className="mb-2 font-semibold text-navy-800">5. お問い合わせ</h2>
          <p className="leading-relaxed">
            個人情報の取扱いに関するお問い合わせは、お問い合わせフォームまたはLINEよりご連絡ください。
          </p>
        </div>

        <p className="pt-4 text-xs text-navy-400">
          最終更新日：2024年1月1日
        </p>
      </section>
    </div>
  );
}
