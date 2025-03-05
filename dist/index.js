"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//=================================Number Guessing Game =========================================================
const readline_1 = __importDefault(require("readline"));
const constants_1 = require("./constants");
const helper_1 = require("./helper");
//GLOBAL VARIABLES.................................................................
const rl = readline_1.default.createInterface({
    input: process.stdin,
    output: process.stdout
});
let choice_of_difficulty = '0';
let START_APP_AGAIN = false;
let highScore_Track = [];
//main function where whole App resides...............................................
(function main(start_game_again) {
    return __awaiter(this, void 0, void 0, function* () {
        if (start_game_again) {
            console.log('Do You Want to Start a Number Guessing Game Again?');
        }
        else {
            console.log('Do You Want to Start a Number Guessing Game?');
        }
        let answer = yield new Promise((resolve) => {
            rl.question("Enter ['Y'==>'Yes'/'N'==>'No']: ", (inp) => {
                resolve(inp);
            });
        });
        let isValid = (0, helper_1.isAnswerValid)(answer, constants_1.PHASE.BEGINING_OF_GAME);
        if (isValid) {
            if (answer.toLowerCase() === 'n') {
                START_APP_AGAIN = false;
                rl.close();
                if (highScore_Track.length !== 0)
                    ShowHighScores();
                return;
            }
            let gaming_description = `****************** Welcome To Number Guessing Game! ******************`;
            console.log(gaming_description);
            console.log("");
            yield selectingChoicePhase(rl);
            switch (choice_of_difficulty) {
                case '1':
                    yield gamePlay(constants_1.MODES[0].MODE, constants_1.MODES[0].CHANCES);
                    break;
                case '2':
                    yield gamePlay(constants_1.MODES[1].MODE, constants_1.MODES[1].CHANCES);
                    break;
                case '3':
                    yield gamePlay(constants_1.MODES[2].MODE, constants_1.MODES[2].CHANCES);
                    break;
                case '4':
                    console.log("******** Exiting Game!! ********");
                    START_APP_AGAIN = false;
                    rl.close();
                    if (highScore_Track.length !== 0)
                        ShowHighScores();
                    return;
            }
        }
        else {
            console.log("ERROR: Please Provide Valid Answer!!");
            console.log("");
            START_APP_AGAIN = true;
        }
        if (START_APP_AGAIN)
            main(START_APP_AGAIN);
        // else if(highScore_Track.length !== 0)ShowHighScores();
    });
})(START_APP_AGAIN);
//====================================== Other Functions =======================================================
//Phase Where user user selects Difficulty..................................................
function selectingChoicePhase(rl) {
    return __awaiter(this, void 0, void 0, function* () {
        choice_of_difficulty = yield selectChoice();
        let isValid = (0, helper_1.isAnswerValid)(choice_of_difficulty, constants_1.PHASE.CHOOSING_DIFFICULTY_LEVEL);
        if (isValid) {
            console.log("Your Selected Choice is: ", choice_of_difficulty);
            return;
        }
        else {
            console.log("ERROR: Enter Valid Choice!!! Try Again!!");
            yield selectingChoicePhase(rl);
        }
    });
}
//Displays dificulty levels and give choice of it..........................................
function selectChoice() {
    return __awaiter(this, void 0, void 0, function* () {
        let difficulty_description = `*********************************************************************
*           Please Select Difficulty Level:                         *
*            1.Easy (10 Chances)                                    *
*            2.Medium (5 Chances)                                   *
*            3.Hard (3 Chances)                                     *
*                                                                   *
*           **If You Want to Exit the Game Enter 4**                *
*********************************************************************`;
        console.log(difficulty_description);
        const choice = yield new Promise((resolve) => {
            rl.question("Enter Your Choice: ", (answer) => {
                resolve(answer);
            });
        });
        return choice;
    });
}
//Function which contains code of whole Game....................................
function gamePlay(mode, chances) {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("******** Lets Start The Game!! ********");
        console.log("******** If you want to exit in between the game simply write exit in the input ********");
        let computer_guess = Math.floor(Math.random() * 100) + 1;
        console.log(computer_guess);
        let isWon = false;
        let score = chances;
        while (chances > 0) {
            let user_guess = yield new Promise((resolve) => {
                rl.question("Enter Your Guess: ", (guess) => {
                    resolve(guess);
                });
            });
            let isValid = (0, helper_1.isAnswerValid)(user_guess, constants_1.PHASE.IN_BETWEEN_OF_GAME);
            if (isValid) {
                if (user_guess === 'exit') {
                    console.log('******** Exiting the Game *********');
                    START_APP_AGAIN = false;
                    rl.close();
                    return;
                }
                else if (user_guess === 'hint') {
                    console.log(`Number is in Between ${computer_guess - 5} and ${computer_guess + 5} `);
                    continue;
                }
                if (computer_guess < parseInt(user_guess)) {
                    console.log(`:( Incorrect!! Computer's Guess is less than ${user_guess}`);
                }
                else if (computer_guess > parseInt(user_guess)) {
                    console.log(`:( Incorrect!! Computer's Guess is greater than ${user_guess}`);
                }
                else {
                    console.log(":) Correct !!! Yehh !! Your Guess is Correct!!");
                    console.log(":) You Won The Game!!!!");
                    highScore_Track.push({ HIGH_SCORE: (score - chances + 1), DIFFICULTY: mode, STATUS: 'Win' });
                    START_APP_AGAIN = true;
                    isWon = true;
                    break;
                }
                if (chances > 1) {
                    console.log(`You have ${chances - 1} chances left!!`);
                    console.log("*** If You Want Hint!! Type hint in input!! ***");
                }
            }
            else {
                console.log("ERROR: Guess Should be Valid!!");
                chances++;
            }
            chances--;
        }
        if (!isWon) {
            console.log(":( You Lose The Game!!!");
            console.log(`******** Computer's Guess is ${computer_guess} ********`);
            highScore_Track.push({ HIGH_SCORE: 0, DIFFICULTY: mode, STATUS: 'Lose' });
            START_APP_AGAIN = true;
        }
    });
}
function ShowHighScores() {
    console.log("Score Board: ");
    let lines = `----------------------------------------------------------------------------------`;
    console.log(lines);
    for (let i = 0; i < highScore_Track.length; i++) {
        console.log(`\t\tRound:${i + 1} == Mode:${highScore_Track[i].DIFFICULTY} == Score:${highScore_Track[i].HIGH_SCORE} == Status:${highScore_Track[i].STATUS}`);
    }
    console.log(lines);
}
