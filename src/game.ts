/*
 * @Author: CsVeryLoveXieWenLi
 * @Description: 游戏核心相关
 * @Copyright (c) 2026 by CsVeryLoveXieWenLi, All Rights Reserved.
 */
import type { Board } from './board';
import type { State } from './state';

import { PLAYER_ENUM, STONE_ENUM } from './enum';


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


export { GameEnd };