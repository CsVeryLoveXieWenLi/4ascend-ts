/*
 * @Author: CsVeryLoveXieWenLi
 * @Description: 点
 * @Copyright (c) 2026 by CsVeryLoveXieWenLi, All Rights Reserved.
 */
import type { STONE_ENUM, PLANT_ENUM } from './Enum';


class Pos {
    private x: number;
    private y: number;

    private stone: STONE_ENUM;
    private plant: PLANT_ENUM;


    constructor(x: number, y: number, s: STONE_ENUM, p: PLANT_ENUM) {
        this.x = x;
        this.y = y;

        this.stone = s;
        this.plant = p;
    };


    eqxy_p(p: Pos): boolean {
        return p.x === this.x && p.y === this.y;
    };

    eqxy_xy(x: number, y: number): boolean {
        return x === this.x && y === this.y;
    };


    eqstone_p(p: Pos): boolean {
        return p.stone === this.stone;
    };

    eqstone_v(v: STONE_ENUM): boolean {
        return v === this.stone;
    };


    eqplant_p(p: Pos): boolean {
        return p.plant === this.plant;
    };

    eqplant_v(v: PLANT_ENUM): boolean {
        return v === this.plant;
    };
}


export { Pos };