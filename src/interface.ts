//Phases of Game....................................
interface Phase{
    'BEGINING_OF_GAME':number,
    'CHOOSING_DIFFICULTY_LEVEL':number,
    'IN_BETWEEN_OF_GAME':number,
    'END_OF_GAME':number
}

//Difficulty MOde of Game............................
interface Mode{
    'MODE':string,
    'CHANCES':number,
}

interface Rounds{
    HIGH_SCORE:number,
    DIFFICULTY:string,
    STATUS:string,
}

export {Phase,Mode,Rounds};
