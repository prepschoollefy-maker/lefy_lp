// 学年から学年グループへのマッピング
const GRADE_GROUP_MAP: Record<string, string> = {
    '小3': '小3-小5',
    '小4': '小3-小5',
    '小5': '小3-小5',
    '小6': '小6',
    '中1': '中1/2',
    '中2': '中1/2',
    '中3': '中3/高1',
    '高1': '中3/高1',
    '高2': '高2/高3',
    '高3': '高2/高3',
};

// ハイスタンダードコースの週1回あたりの月額（税抜）
const TUITION_BASE_EXCL_TAX: Record<string, number> = {
    '小3-小5': 35000,
    '小6': 40000,
    '中1/2': 37000,
    '中3/高1': 38000,
    '高2/高3': 40000,
};

// 学年の選択肢
export const GRADE_OPTIONS = [
    '小3', '小4', '小5', '小6',
    '中1', '中2', '中3',
    '高1', '高2', '高3',
] as const;

export type Grade = typeof GRADE_OPTIONS[number];

// 計算結果の型
export interface FeeCalculationResult {
    gradeGroup: string;
    baseExclTax: number;  // 週1単価（税抜）
    feeExclTax: number;   // 税抜月謝（割引前）
    discount: number;     // 割引額（税抜）
    feeExclTaxAfterDiscount: number;  // 税抜月謝（割引後）
    facilityFeeExclTax: number;  // 設備利用料（税抜）
    subtotalExclTax: number;  // 小計（税抜）
    tax: number;  // 消費税
    totalInclTax: number;   // 税込合計
    error?: string;
}

// 複数コマ割引表（税抜）
const MULTI_COURSE_DISCOUNT: Record<number, number> = {
    2: 5000,
    3: 10000,
    4: 15000,
    5: 20000,
    6: 20000,  // 週5以上は20,000円固定
    7: 20000,
};

// 設備利用料（税抜）
const FACILITY_FEE_EXCL_TAX = 3000;

// 消費税率
const TAX_RATE = 0.1;

/**
 * 月謝を計算する純関数
 * @param grade 学年
 * @param weeklyCount 週あたりの授業回数
 * @returns 計算結果
 */
export function calculateMonthlyFee(
    grade: string,
    weeklyCount: number
): FeeCalculationResult {
    // バリデーション
    if (!grade || weeklyCount < 1) {
        return {
            gradeGroup: '',
            baseExclTax: 0,
            feeExclTax: 0,
            discount: 0,
            feeExclTaxAfterDiscount: 0,
            facilityFeeExclTax: FACILITY_FEE_EXCL_TAX,
            subtotalExclTax: FACILITY_FEE_EXCL_TAX,
            tax: Math.round(FACILITY_FEE_EXCL_TAX * TAX_RATE),
            totalInclTax: FACILITY_FEE_EXCL_TAX + Math.round(FACILITY_FEE_EXCL_TAX * TAX_RATE),
            error: '学年と週回数を選択してください',
        };
    }

    // 学年グループの取得
    const gradeGroup = GRADE_GROUP_MAP[grade];
    if (!gradeGroup) {
        return {
            gradeGroup: '',
            baseExclTax: 0,
            feeExclTax: 0,
            discount: 0,
            feeExclTaxAfterDiscount: 0,
            facilityFeeExclTax: FACILITY_FEE_EXCL_TAX,
            subtotalExclTax: FACILITY_FEE_EXCL_TAX,
            tax: Math.round(FACILITY_FEE_EXCL_TAX * TAX_RATE),
            totalInclTax: FACILITY_FEE_EXCL_TAX + Math.round(FACILITY_FEE_EXCL_TAX * TAX_RATE),
            error: '無効な学年です',
        };
    }

    // 週1単価の取得
    const baseExclTax = TUITION_BASE_EXCL_TAX[gradeGroup];
    if (!baseExclTax) {
        return {
            gradeGroup,
            baseExclTax: 0,
            feeExclTax: 0,
            discount: 0,
            feeExclTaxAfterDiscount: 0,
            facilityFeeExclTax: FACILITY_FEE_EXCL_TAX,
            subtotalExclTax: FACILITY_FEE_EXCL_TAX,
            tax: Math.round(FACILITY_FEE_EXCL_TAX * TAX_RATE),
            totalInclTax: FACILITY_FEE_EXCL_TAX + Math.round(FACILITY_FEE_EXCL_TAX * TAX_RATE),
            error: '料金情報が見つかりません',
        };
    }

    // 月謝計算（割引前）
    const feeExclTax = baseExclTax * weeklyCount;

    // 複数コマ割引の適用
    const discount = MULTI_COURSE_DISCOUNT[weeklyCount] || 0;

    // 割引後の税抜月謝
    const feeExclTaxAfterDiscount = feeExclTax - discount;

    // 小計（税抜）= 授業料（割引後）+ 設備利用料
    const subtotalExclTax = feeExclTaxAfterDiscount + FACILITY_FEE_EXCL_TAX;

    // 消費税を計算
    const tax = Math.round(subtotalExclTax * TAX_RATE);

    // 税込合計
    const totalInclTax = subtotalExclTax + tax;

    return {
        gradeGroup,
        baseExclTax,
        feeExclTax,
        discount,
        feeExclTaxAfterDiscount,
        facilityFeeExclTax: FACILITY_FEE_EXCL_TAX,
        subtotalExclTax,
        tax,
        totalInclTax,
    };
}

/**
 * 金額をカンマ区切りの文字列にフォーマット
 */
export function formatCurrency(amount: number): string {
    return `¥${amount.toLocaleString('ja-JP')}`;
}
