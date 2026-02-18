/*
 * @Author: CsVeryLoveXieWenLi
 * @Description: 共享状态与数据
 * @Copyright (c) 2026 by CsVeryLoveXieWenLi, All Rights Reserved.
 */
import { PLAYER_ENUM } from './enum';


class State {
    public turn_count: number = 0;
    public turn_player: PLAYER_ENUM = PLAYER_ENUM.BLACK;
}


export { State };