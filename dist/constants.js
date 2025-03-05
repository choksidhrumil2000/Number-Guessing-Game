"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MODES = exports.PHASE = void 0;
const PHASE = {
    'BEGINING_OF_GAME': 0,
    'CHOOSING_DIFFICULTY_LEVEL': 1,
    'IN_BETWEEN_OF_GAME': 2,
    'END_OF_GAME': 3
};
exports.PHASE = PHASE;
// const MODE:Mode = {
//     'EASY':10,
//     'MEDIUM':5,
//     'HARD':3
// }
const MODES = [{
        MODE: 'EASY',
        CHANCES: 10,
    },
    {
        MODE: 'MEDIUM',
        CHANCES: 5,
    },
    {
        MODE: 'HARD',
        CHANCES: 3,
    },];
exports.MODES = MODES;
