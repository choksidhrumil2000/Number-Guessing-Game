//=================================Number Guessing Game =========================================================
import readline from "readline";
import { PHASE, MODES } from './constants';
import { isAnswerValid } from './helper';
import { Rounds } from './interface';


//GLOBAL VARIABLES.................................................................
const rl: readline.Interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let choice_of_difficulty: string = '0';
let START_APP_AGAIN: boolean = false;
let highScore_Track:Rounds[] = [];

//main function where whole App resides...............................................
(async function main(start_game_again: boolean): Promise<void> {

    if (start_game_again) {
        console.log('Do You Want to Start a Number Guessing Game Again?');
    }else {
        console.log('Do You Want to Start a Number Guessing Game?');
    }

    let answer: string = await new Promise<string>((resolve) => {
        rl.question("Enter ['Y'==>'Yes'/'N'==>'No']: ", (inp: string) => {
            resolve(inp);
        });
    });

    let isValid: boolean = isAnswerValid(answer, PHASE.BEGINING_OF_GAME);
    
    if (isValid) {
        if (answer.toLowerCase() === 'n') {
            START_APP_AGAIN = false;
            rl.close();
            if(highScore_Track.length !== 0)ShowHighScores();
            return;
        }
        let gaming_description: string = `****************** Welcome To Number Guessing Game! ******************`;
        console.log(gaming_description);
        console.log("");
        await selectingChoicePhase(rl);

        switch (choice_of_difficulty) {
            case '1': await gamePlay(MODES[0].MODE,MODES[0].CHANCES); break;
            case '2': await gamePlay(MODES[1].MODE,MODES[1].CHANCES); break;
            case '3': await gamePlay(MODES[2].MODE,MODES[2].CHANCES); break;
            case '4': console.log("******** Exiting Game!! ********");
                START_APP_AGAIN = false;
                rl.close();
                if(highScore_Track.length !== 0)ShowHighScores();
                return;
        }
    } else {
        console.log("ERROR: Please Provide Valid Answer!!");
        console.log("");
        START_APP_AGAIN = true;
    }
    if (START_APP_AGAIN) main(START_APP_AGAIN);
    // else if(highScore_Track.length !== 0)ShowHighScores();
})(START_APP_AGAIN);

//====================================== Other Functions =======================================================

//Phase Where user user selects Difficulty..................................................
async function selectingChoicePhase(rl: readline.Interface): Promise<void> {
    choice_of_difficulty = await selectChoice();
    let isValid = isAnswerValid(choice_of_difficulty, PHASE.CHOOSING_DIFFICULTY_LEVEL);
    if (isValid) {
        console.log("Your Selected Choice is: ", choice_of_difficulty);
        return;
    } else {
        console.log("ERROR: Enter Valid Choice!!! Try Again!!");
        await selectingChoicePhase(rl);
    }
}

//Displays dificulty levels and give choice of it..........................................
async function selectChoice(): Promise<string> {
    let difficulty_description: string = 
`*********************************************************************
*           Please Select Difficulty Level:                         *
*            1.Easy (10 Chances)                                    *
*            2.Medium (5 Chances)                                   *
*            3.Hard (3 Chances)                                     *
*                                                                   *
*           **If You Want to Exit the Game Enter 4**                *
*********************************************************************`;
    console.log(difficulty_description);
    const choice: string = await new Promise<string>((resolve) => {
        rl.question("Enter Your Choice: ", (answer) => {
            resolve(answer);
        });
    });
    return choice;
}

//Function which contains code of whole Game....................................
async function gamePlay(mode:string,chances: number): Promise<void> {
    console.log("******** Lets Start The Game!! ********");
    console.log("******** If you want to exit in between the game simply write exit in the input ********");
    let computer_guess = Math.floor(Math.random() * 100) + 1;
    console.log(computer_guess);
    let isWon = false;
    let score = chances;
    while (chances > 0) {
        let user_guess: string = await new Promise<string>((resolve) => {
            rl.question("Enter Your Guess: ", (guess) => {
                resolve(guess);
            });
        });
        let isValid = isAnswerValid(user_guess,PHASE.IN_BETWEEN_OF_GAME);
        if (isValid) {
            if (user_guess === 'exit') {
                console.log('******** Exiting the Game *********');
                START_APP_AGAIN = false;
                rl.close();
                return;
            }else if(user_guess === 'hint'){
                console.log(`Number is in Between ${computer_guess-5} and ${computer_guess+5} `);
                continue;
            }
            if (computer_guess < parseInt(user_guess)) {
                console.log(`:( Incorrect!! Computer's Guess is less than ${user_guess}`);
            } else if (computer_guess > parseInt(user_guess)) {
                console.log(`:( Incorrect!! Computer's Guess is greater than ${user_guess}`);
            } else {
                console.log(":) Correct !!! Yehh !! Your Guess is Correct!!");
                console.log(":) You Won The Game!!!!");
                highScore_Track.push({HIGH_SCORE:(score-chances+1),DIFFICULTY:mode,STATUS:'Win'});
                START_APP_AGAIN = true;
                isWon = true;
                break;
            }
            if(chances > 1){
                console.log(`You have ${chances-1} chances left!!`);
                console.log("*** If You Want Hint!! Type hint in input!! ***");
            }

        } else {
            console.log("ERROR: Guess Should be Valid!!");
            chances++;
        }
        chances--;
    }
    if (!isWon) {
        console.log(":( You Lose The Game!!!");
        console.log(`******** Computer's Guess is ${computer_guess} ********`);
        highScore_Track.push({HIGH_SCORE:0,DIFFICULTY:mode,STATUS:'Lose'});
        START_APP_AGAIN = true;
    }
}

function ShowHighScores():void {
    console.log("Score Board: ");
    let lines:string = 
`----------------------------------------------------------------------------------`;
console.log(lines);
for(let i=0;i<highScore_Track.length;i++){
    console.log(`\t\tRound:${i+1} == Mode:${highScore_Track[i].DIFFICULTY} == Score:${highScore_Track[i].HIGH_SCORE} == Status:${highScore_Track[i].STATUS}`);
}
console.log(lines);
}