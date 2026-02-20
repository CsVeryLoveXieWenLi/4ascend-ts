/*
 * @Author: CsVeryLoveXieWenLi
 * @Description: 游戏核心相关
 * @Copyright (c) 2026 by CsVeryLoveXieWenLi, All Rights Reserved.
 */
import type { Board } from './board';
import type { State } from './state';

import { OVER_ENUM, PLAYER_ENUM, STONE_ENUM } from './enum';


class GameEnd {
    private board: Board;
    private state: State;


    constructor(board: Board, state: State) {
        this.board = board;
        this.state = state;
    };


    public end(x: number, y: number, stone: STONE_ENUM): boolean {
        const pos = this.board.get_stone(x, y);
        const ascend = stone === STONE_ENUM.BLACK ? STONE_ENUM.WHITE_ASCEND : STONE_ENUM.BLACK_ASCEND;

        // 必须是空格子或者对方棋子处于进攻状态（ASCEND）
        if (pos !== STONE_ENUM.NONE && pos !== ascend) return false;


        this.board.set_stone(x, y, stone);
        this.state.turn_player = this.state.turn_player === PLAYER_ENUM.BLACK ? PLAYER_ENUM.WHITE : PLAYER_ENUM.BLACK;
        this.state.turn_count++;
        return true;
    };
}

class PlantEnd {
    private board: Board;
    private state: State;

    private unascend_charge: number;
    private unascend_chargef: [number, number];


    private ascend_status: boolean; // just_unascend
    private over_status: OVER_ENUM;

    private cd: number;


    constructor(board: Board, state: State) {
        this.board = board;
        this.state = state;

        this.unascend_charge = 25;
        this.unascend_chargef = [9, 9];

        this.ascend_status = false;
        this.over_status = OVER_ENUM.NONE;

        this.cd = 11; // grow_count
    };


    public end(): [number, number][] | null {
        if (this.state.turn_ascend) return null;


        if (!this.state.turn_atk) {
            if (this.unascend_charge > 0) this.unascend_charge--;

            if (this.unascend_chargef[1] > 0) this.unascend_chargef[1]--;
            if (this.unascend_chargef[0] > 0) this.unascend_chargef[0]--;

            this.ascend_status = false;
        }
    };
}


export { GameEnd };