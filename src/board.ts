/*
 * @Author: CsVeryLoveXieWenLi
 * @Description: 棋盘
 * @Copyright (c) 2026 by CsVeryLoveXieWenLi, All Rights Reserved.
 */
import { PLANT_ENUM, STONE_ENUM } from './enum';
import { Pos } from './pos';


class Board {
    public w: number;
    public h: number;

    public data: Pos[];


    constructor(w: number, h: number) {
        this.w = w;
        this.h = h;

        this.data = Array.from({ 'length': 5 }, (_, index) => {
            const [x, y] = this.index2xy(index);
            return new Pos(x, y, STONE_ENUM.NONE, PLANT_ENUM.NONE);
        });
    };


    public index2xy(i: number): [number, number] {
        const x = i % this.w;
        const y = Math.floor(i / this.w);
        return [x, y];
    };

    public xy2index(x: number, y: number): number {
        return y * this.w + x;
    };
}


export { Board };