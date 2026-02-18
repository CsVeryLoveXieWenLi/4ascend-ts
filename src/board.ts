/*
 * @Author: CsVeryLoveXieWenLi
 * @Description: 棋盘
 * @Copyright (c) 2026 by CsVeryLoveXieWenLi, All Rights Reserved.
 */
import { Pos } from './pos';

import { PLANT_ENUM, STONE_ENUM } from './enum';


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


    public set_stone(x: number, y: number, stone: STONE_ENUM): void {
        this.data[this.xy2index(x, y)]!.stone = stone;
    };

    public get_stone(x: number, y: number): STONE_ENUM {
        return this.data[this.xy2index(x, y)]!.stone;
    };


    public set_plant(x: number, y: number, plant: PLANT_ENUM): void {
        this.data[this.xy2index(x, y)]!.plant = plant;
    };

    public get_plant(x: number, y: number): PLANT_ENUM {
        return this.data[this.xy2index(x, y)]!.plant;
    };


    public set_pos(x: number, y: number, stone: STONE_ENUM, plant: PLANT_ENUM): void {
        this.data[this.xy2index(x, y)]!.stone = stone;
        this.data[this.xy2index(x, y)]!.plant = plant;
    };

    public get_pos(x: number, y: number): Pos {
        return this.data[this.xy2index(x, y)]!;
    };
}


export { Board };