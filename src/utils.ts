/*
 * @Author: CsVeryLoveXieWenLi
 * @Description: 工具
 * @Copyright (c) 2026 by CsVeryLoveXieWenLi, All Rights Reserved.
 */
class Utils {
    public static MMX(minnum: number, thenum: number, maxnum: number): number {
        return Math.max(minnum, Math.min(thenum, maxnum));
    };


    public static ZSIN(num: number, _mx: number): number {
        if (num <= 0.0) return 0.0;
        if (num < _mx) return this.Sin(this.MMX(0.0, num / _mx, 1.0) * 0.5 * 3.1415927);
        return 1.0;
    };

    private static Sin(x: number): number {
        if (x !== 0.0) return this.Cos(x - 1.5707964);
        return 0.0;
    };

    private static Cos(x: number): number {
        let num = 1.0;

        if (x < 0.0) x = -x;

        // 折叠到 [0, 2π) 区间
        x -= Math.floor(x * 0.31830987 * 0.5) * 6.2831855;

        if (x >= 3.1415927) x = 6.2831855 - x;

        if (x >= 1.5707964) {
            x = 3.1415927 - x;
            num = -1.0;
        }

        if (x > 0.7853982) {
            x = 1.5707964 - x;
            const num2 = x * x;
            return x * (1.0 - num2 * 0.16666667 + num2 * num2 * 0.008333334) * num;
        }

        const num3 = x * x;
        return (1.0 - num3 * 0.5 + num3 * num3 * 0.041666668 - num3 * num3 * num3 * 0.0013888889) * num;
    };
}


export { Utils };