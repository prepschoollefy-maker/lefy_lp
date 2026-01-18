'use client';

import { useState } from 'react';
import {
    calculateMonthlyFee,
    formatCurrency,
    GRADE_OPTIONS,
    type Grade,
} from '@/lib/tuition-calculator';

export function FeeSimulator() {
    const [selectedGrade, setSelectedGrade] = useState<string>('');
    const [weeklyCount, setWeeklyCount] = useState<number>(1);

    const result = selectedGrade
        ? calculateMonthlyFee(selectedGrade, weeklyCount)
        : null;

    return (
        <div className="rounded-2xl border border-navy-200 bg-white p-6 shadow-lg sm:p-8">
            <h2 className="mb-6 text-2xl font-bold text-navy-800">
                料金シミュレーター
            </h2>

            <div className="space-y-6">
                {/* 学年選択 */}
                <div>
                    <label
                        htmlFor="grade"
                        className="mb-2 block text-sm font-semibold text-navy-700"
                    >
                        学年を選択
                    </label>
                    <select
                        id="grade"
                        value={selectedGrade}
                        onChange={(e) => setSelectedGrade(e.target.value)}
                        className="w-full rounded-lg border-2 border-navy-200 bg-white px-4 py-3 text-base text-navy-800 transition-colors hover:border-navy-300 focus:border-navy-500 focus:outline-none"
                    >
                        <option value="">-- 選択してください --</option>
                        {GRADE_OPTIONS.map((grade) => (
                            <option key={grade} value={grade}>
                                {grade}
                            </option>
                        ))}
                    </select>
                </div>

                {/* 週回数選択 */}
                <div>
                    <label
                        htmlFor="weekly-count"
                        className="mb-2 block text-sm font-semibold text-navy-700"
                    >
                        週あたりの授業回数
                    </label>
                    <select
                        id="weekly-count"
                        value={weeklyCount}
                        onChange={(e) => setWeeklyCount(Number(e.target.value))}
                        className="w-full rounded-lg border-2 border-navy-200 bg-white px-4 py-3 text-base text-navy-800 transition-colors hover:border-navy-300 focus:border-navy-500 focus:outline-none"
                    >
                        {[1, 2, 3, 4, 5, 6, 7].map((count) => (
                            <option key={count} value={count}>
                                週{count}回
                            </option>
                        ))}
                    </select>
                </div>

                {/* 結果表示 */}
                {result && !result.error && (
                    <div className="rounded-xl border-2 border-navy-200 bg-white p-5">
                        <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-navy-500">
                            月額料金（税込・設備利用料込）
                        </p>
                        <p className="text-3xl font-bold text-navy-800">
                            {formatCurrency(result.totalInclTax)}
                        </p>
                        <p className="mt-1 text-xs text-navy-500">/ 月</p>

                        <div className="space-y-2 border-t border-navy-200 pt-4">
                            <div className="flex justify-between text-sm">
                                <span className="text-navy-600">授業料（税抜・割引前）</span>
                                <span className="font-semibold text-navy-800">
                                    {formatCurrency(result.feeExclTax)}
                                </span>
                            </div>
                            {result.discount > 0 && (
                                <div className="flex justify-between text-sm">
                                    <span className="text-navy-600">複数コマ割引</span>
                                    <span className="font-semibold text-red-600">
                                        -{formatCurrency(result.discount)}
                                    </span>
                                </div>
                            )}
                            <div className="flex justify-between text-sm">
                                <span className="text-navy-600">授業料（税抜・割引後）</span>
                                <span className="font-semibold text-navy-800">
                                    {formatCurrency(result.feeExclTaxAfterDiscount)}
                                </span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-navy-600">設備利用料（税抜）</span>
                                <span className="font-semibold text-navy-800">
                                    {formatCurrency(result.facilityFeeExclTax)}
                                </span>
                            </div>
                            <div className="flex justify-between border-t border-navy-200 pt-2 text-sm font-semibold">
                                <span className="text-navy-600">小計（税抜）</span>
                                <span className="text-navy-800">
                                    {formatCurrency(result.subtotalExclTax)}
                                </span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-navy-600">消費税（10%）</span>
                                <span className="font-semibold text-navy-800">
                                    {formatCurrency(result.tax)}
                                </span>
                            </div>
                        </div>
                    </div>
                )}

                {/* エラー表示 */}
                {result && result.error && (
                    <div className="rounded-lg bg-orange-50 p-4 text-sm text-orange-800">
                        {result.error}
                    </div>
                )}

                {/* 未選択時のメッセージ */}
                {!selectedGrade && (
                    <div className="rounded-lg bg-navy-50 p-6 text-center text-sm text-navy-600">
                        学年と週回数を選択すると、月謝が表示されます
                    </div>
                )}
            </div>

            <div className="mt-6 rounded-lg bg-orange-50 p-4">
                <p className="text-xs text-navy-700">
                    ※ 入塾金33,000円（税込）が別途必要です。キャンペーン期間は無料０円となります。<br />
                    ※ 設備利用料3,300円（税込）/月が含まれています。<br />
                    ※ 週2コマ以上のお申し込みで、複数コマ割引が適用されます。<br />
                    ※ 教材費、講習費などは含まれておりません。
                </p>
            </div>
        </div>
    );
}
