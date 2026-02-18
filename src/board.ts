/*
 * @Author: CsVeryLoveXieWenLi
 * @Description: 棋盘
 * @Copyright (c) 2026 by CsVeryLoveXieWenLi, All Rights Reserved.
 */
import { Pos } from './pos';


class Board {
    public w: number;
    public h: number;

    public data: Pos[];


    constructor(w: number, h: number) {
        this.w = w;
        this.h = h;

        this.data = [];
    };
}


export { Board };