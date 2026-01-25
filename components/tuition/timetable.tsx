'use client';

import { Clock } from 'lucide-react';
import { SectionHeader } from '@/components/lefy/section-header';

const timetableData = [
    { time: '12:30-13:50', weekday: '×', saturday: '×', sunday: '○', session: '○' },
    { time: '14:00-15:20', weekday: '×', saturday: '○', sunday: '○', session: '○' },
    { time: '15:30-16:50', weekday: '×', saturday: '○', sunday: '○', session: '○' },
    { time: '17:00-18:20', weekday: '○', saturday: '○', sunday: '○', session: '△' },
    { time: '18:30-19:50', weekday: '○', saturday: '○', sunday: '○', session: '△' },
    { time: '20:00-21:20', weekday: '○', saturday: '○', sunday: '×', session: '△' },
];

const legends = [
    { symbol: '○', label: '受講可能', color: 'bg-green-500', borderColor: 'border-green-500' },
    { symbol: '×', label: '受講不可', color: 'bg-red-500', borderColor: 'border-red-500' },
    { symbol: '△', label: '要相談', color: 'bg-orange-500', borderColor: 'border-orange-500' },
];

export function Timetable() {
    return (
        <div className="rounded-3xl border-2 border-navy-100 bg-gradient-to-br from-white to-slate-50/50 p-8 shadow-2xl transition-shadow hover:shadow-3xl">
            <div className="mb-8 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-navy-600 to-navy-700 shadow-lg">
                    <Clock className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-navy-800">時間割</h3>
            </div>

            {/* Legend - Modern badge style */}
            <div className="mb-8 flex flex-wrap items-center gap-3 rounded-2xl border border-navy-100 bg-white p-5 shadow-md">
                {legends.map((legend) => (
                    <div key={legend.symbol} className="flex items-center gap-2 rounded-full border-2 bg-white px-4 py-2 shadow-sm transition-all hover:shadow-md" style={{ borderColor: legend.color.replace('bg-', '#') }}>
                        <span className={`flex h-8 w-8 items-center justify-center rounded-full ${legend.color} text-base font-bold text-white shadow`}>
                            {legend.symbol}
                        </span>
                        <span className="text-sm font-semibold text-navy-700">{legend.label}</span>
                    </div>
                ))}
            </div>

            {/* Timetable - Desktop */}
            <div className="hidden overflow-hidden rounded-2xl border-2 border-navy-200 shadow-xl sm:block">
                <table className="w-full">
                    <thead>
                        <tr className="bg-gradient-to-r from-navy-700 via-navy-600 to-navy-700">
                            <th className="border-r border-navy-500/30 px-8 py-5 text-left text-lg font-bold text-white">
                                <div className="flex items-center gap-2">
                                    <Clock className="h-5 w-5" />
                                    時間帯
                                </div>
                            </th>
                            <th className="border-r border-navy-500/30 px-6 py-5 text-center text-base font-bold text-white">
                                平日<br /><span className="text-xs font-normal text-navy-200">（月～金）</span>
                            </th>
                            <th className="border-r border-navy-500/30 px-6 py-5 text-center text-base font-bold text-white">
                                土曜日
                            </th>
                            <th className="border-r border-navy-500/30 px-6 py-5 text-center text-base font-bold text-white">
                                日曜日
                            </th>
                            <th className="px-6 py-5 text-center text-base font-bold text-white">
                                講習期間
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {timetableData.map((row, index) => (
                            <tr
                                key={row.time}
                                className={`group ${index % 2 === 0 ? 'bg-white' : 'bg-gradient-to-r from-slate-50/50 to-white'
                                    } transition-all duration-200 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50/30 hover:shadow-md`}
                            >
                                <td className="border-r border-navy-100 px-8 py-5 text-base font-semibold text-navy-800">
                                    <div className="flex items-center gap-2">
                                        <span className="flex h-2 w-2 rounded-full bg-navy-400"></span>
                                        {row.time}
                                    </div>
                                </td>
                                <td className="border-r border-navy-100 px-6 py-5 text-center">
                                    <span
                                        className={`inline-flex h-12 w-12 items-center justify-center rounded-full text-xl font-bold shadow-md transition-all group-hover:scale-110 ${row.weekday === '○'
                                            ? 'bg-gradient-to-br from-green-400 to-green-600 text-white'
                                            : row.weekday === '×'
                                                ? 'bg-gradient-to-br from-red-400 to-red-600 text-white'
                                                : 'bg-gradient-to-br from-orange-400 to-orange-600 text-white'
                                            }`}
                                    >
                                        {row.weekday}
                                    </span>
                                </td>
                                <td className="border-r border-navy-100 px-6 py-5 text-center">
                                    <span
                                        className={`inline-flex h-12 w-12 items-center justify-center rounded-full text-xl font-bold shadow-md transition-all group-hover:scale-110 ${row.saturday === '○'
                                            ? 'bg-gradient-to-br from-green-400 to-green-600 text-white'
                                            : row.saturday === '×'
                                                ? 'bg-gradient-to-br from-red-400 to-red-600 text-white'
                                                : 'bg-gradient-to-br from-orange-400 to-orange-600 text-white'
                                            }`}
                                    >
                                        {row.saturday}
                                    </span>
                                </td>
                                <td className="border-r border-navy-100 px-6 py-5 text-center">
                                    <span
                                        className={`inline-flex h-12 w-12 items-center justify-center rounded-full text-xl font-bold shadow-md transition-all group-hover:scale-110 ${row.sunday === '○'
                                            ? 'bg-gradient-to-br from-green-400 to-green-600 text-white'
                                            : row.sunday === '×'
                                                ? 'bg-gradient-to-br from-red-400 to-red-600 text-white'
                                                : 'bg-gradient-to-br from-orange-400 to-orange-600 text-white'
                                            }`}
                                    >
                                        {row.sunday}
                                    </span>
                                </td>
                                <td className="px-6 py-5 text-center">
                                    <span
                                        className={`inline-flex h-12 w-12 items-center justify-center rounded-full text-xl font-bold shadow-md transition-all group-hover:scale-110 ${row.session === '○'
                                            ? 'bg-gradient-to-br from-green-400 to-green-600 text-white'
                                            : row.session === '×'
                                                ? 'bg-gradient-to-br from-red-400 to-red-600 text-white'
                                                : 'bg-gradient-to-br from-orange-400 to-orange-600 text-white'
                                            }`}
                                    >
                                        {row.session}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Timetable - Mobile */}
            <div className="overflow-x-auto sm:hidden">
                <div className="min-w-[600px] overflow-hidden rounded-2xl border-2 border-navy-200 shadow-xl">
                    <table className="w-full">
                        <thead>
                            <tr className="bg-gradient-to-r from-navy-700 via-navy-600 to-navy-700">
                                <th className="border-r border-navy-500/30 px-4 py-3 text-left text-sm font-bold text-white">
                                    時間帯
                                </th>
                                <th className="border-r border-navy-500/30 px-3 py-3 text-center text-xs font-semibold text-white">
                                    平日<br /><span className="text-[10px] font-normal">(月～金)</span>
                                </th>
                                <th className="border-r border-navy-500/30 px-3 py-3 text-center text-xs font-semibold text-white">
                                    土
                                </th>
                                <th className="border-r border-navy-500/30 px-3 py-3 text-center text-xs font-semibold text-white">
                                    日
                                </th>
                                <th className="px-3 py-3 text-center text-xs font-semibold text-white">
                                    講習<br />期間
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {timetableData.map((row, index) => (
                                <tr
                                    key={row.time}
                                    className={index % 2 === 0 ? 'bg-white' : 'bg-slate-50'}
                                >
                                    <td className="border-r border-navy-100 px-4 py-3 text-xs font-semibold text-navy-700">
                                        {row.time}
                                    </td>
                                    <td className="border-r border-navy-100 px-3 py-3 text-center">
                                        <span
                                            className={`inline-flex h-9 w-9 items-center justify-center rounded-full text-base font-bold shadow-sm ${row.weekday === '○'
                                                ? 'bg-gradient-to-br from-green-400 to-green-600 text-white'
                                                : row.weekday === '×'
                                                    ? 'bg-gradient-to-br from-red-400 to-red-600 text-white'
                                                    : 'bg-gradient-to-br from-orange-400 to-orange-600 text-white'
                                                }`}
                                        >
                                            {row.weekday}
                                        </span>
                                    </td>
                                    <td className="border-r border-navy-100 px-3 py-3 text-center">
                                        <span
                                            className={`inline-flex h-9 w-9 items-center justify-center rounded-full text-base font-bold shadow-sm ${row.saturday === '○'
                                                ? 'bg-gradient-to-br from-green-400 to-green-600 text-white'
                                                : row.saturday === '×'
                                                    ? 'bg-gradient-to-br from-red-400 to-red-600 text-white'
                                                    : 'bg-gradient-to-br from-orange-400 to-orange-600 text-white'
                                                }`}
                                        >
                                            {row.saturday}
                                        </span>
                                    </td>
                                    <td className="border-r border-navy-100 px-3 py-3 text-center">
                                        <span
                                            className={`inline-flex h-9 w-9 items-center justify-center rounded-full text-base font-bold shadow-sm ${row.sunday === '○'
                                                ? 'bg-gradient-to-br from-green-400 to-green-600 text-white'
                                                : row.sunday === '×'
                                                    ? 'bg-gradient-to-br from-red-400 to-red-600 text-white'
                                                    : 'bg-gradient-to-br from-orange-400 to-orange-600 text-white'
                                                }`}
                                        >
                                            {row.sunday}
                                        </span>
                                    </td>
                                    <td className="px-3 py-3 text-center">
                                        <span
                                            className={`inline-flex h-9 w-9 items-center justify-center rounded-full text-base font-bold shadow-sm ${row.session === '○'
                                                ? 'bg-gradient-to-br from-green-400 to-green-600 text-white'
                                                : row.session === '×'
                                                    ? 'bg-gradient-to-br from-red-400 to-red-600 text-white'
                                                    : 'bg-gradient-to-br from-orange-400 to-orange-600 text-white'
                                                }`}
                                        >
                                            {row.session}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Note - Modern alert style */}
            <div className="mt-8 rounded-2xl border-2 border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50/50 p-5 shadow-md">
                <div className="flex items-start gap-3">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-500 text-white">
                        <span className="text-xs font-bold">!</span>
                    </div>
                    <p className="text-sm leading-relaxed text-navy-700">
                        <span className="font-semibold">※ ご注意：</span>◯の時間帯でご受講可能です。ただし、学校が終わる時間等によっては、△、×の箇所でも対応できる可能性がございますので、お気軽にご相談ください。
                    </p>
                </div>
            </div>
        </div>
    );
}
