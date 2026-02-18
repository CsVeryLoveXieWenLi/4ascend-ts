/*
 * @Author: CsVeryLoveXieWenLi
 * @Description: 点
 * @Copyright (c) 2026 by CsVeryLoveXieWenLi, All Rights Reserved.
 */
import type { STONE_ENUM, PLANT_ENUM } from './enum';


class Pos {
    public x: number;
    public y: number;

    public stone: STONE_ENUM;
    public plant: PLANT_ENUM;


    constructor(x: number, y: number, stone: STONE_ENUM, plant: PLANT_ENUM) {
        this.x = x;
        this.y = y;

        this.stone = stone;
        this.plant = plant;
    };
}


export { Pos };