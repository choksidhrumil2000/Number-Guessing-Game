import { Phase,Mode} from './interface'

const PHASE:Phase = {
    'BEGINING_OF_GAME':0,
    'CHOOSING_DIFFICULTY_LEVEL':1,
    'IN_BETWEEN_OF_GAME':2,
    'END_OF_GAME':3
} 

// const MODE:Mode = {
//     'EASY':10,
//     'MEDIUM':5,
//     'HARD':3
// }

const MODES:Mode[]=[{
    MODE:'EASY',
    CHANCES:10,
},
{
    MODE:'MEDIUM',
    CHANCES:5,
},
{
    MODE:'HARD',
    CHANCES:3,
},]

export{
    PHASE,
    MODES,
}