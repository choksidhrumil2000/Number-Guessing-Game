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
const rl = readline_1.default.createInterface({
    input: process.stdin,
    output: process.stdout
});
const MODE = {
    'BEGINING_OF_GAME': 0,
    'CHOOSING_DIFFICULTY_LEVEL': 1,
    'IN_BETWEEN_OF_GAME': 2,
    'END_OF_GAME': 3
};
let askAgain = true;
// const starting_text:string = 
// `Welcome to Number Guessing Game!!
// I am Thinking of a number between 1 and 100.
// DO You Want to Start a Game?`;
// console.log(starting_text);
const starting_statement = 'Do You Want to Start a Game?';
let START_AGAIN = true;
// while(START_AGAIN){
//     askIfUserWantsToPlay();
//     // console.log('Do You Want to Start a Game?');
//     // rl_beg.question("Enter ['Y'==>'Yes'/'N'==>'No']: ", (inp:string) => {
//     //     let isValid:boolean = isAnswerValid(inp,MODE.BEGINING_OF_GAME);
//     //     if(isValid){
//     //         if(inp === 'N'){
//     //             START_AGAIN = false;
//     //             rl_beg.close();
//     //         }
//     //         // let gaming_description:string = `Welcome To Number Guessing Game!`;
//     //         // console.log(gaming_description);
//     //         // let difficulty_description:string = `Please Select Difficulty Level:
//     //         // 1.Easy (10 Chances)
//     //         // 2.Medium (5 Chances)
//     //         // 3.Hard (3 Chances)`;
//     //         // console.log(difficulty_description);
//     //         // rl.question("Enter Your Choice: ",(choice:string)=>{
//     //         //     let isChoiceValid:boolean = isAnswerValid(choice,MODE.CHOOSING_DIFFICULTY_LEVEL);
//     //         //     if(isChoiceValid){
//     //         //     }
//     //         // });
//     //     }else{
//     //         console.log("Please Provide Valid Answer!!");
//     //     }
//     //     // if (askAgain) loop();
//     // });
// }
// async function askIfUserWantsToPlay(){
//     console.log('Do You Want to Start a Game?');
//     await rl_beg.question("Enter ['Y'==>'Yes'/'N'==>'No']: ", (inp:string) => {
//         let isValid:boolean = isAnswerValid(inp,MODE.BEGINING_OF_GAME);
//         if(isValid){
//             if(inp === 'N'){
//                 START_AGAIN = false;
//                 rl_beg.close();
//             }
//             // let gaming_description:string = `Welcome To Number Guessing Game!`;
//             // console.log(gaming_description);
//             // let difficulty_description:string = `Please Select Difficulty Level:
//             // 1.Easy (10 Chances)
//             // 2.Medium (5 Chances)
//             // 3.Hard (3 Chances)`;
//             // console.log(difficulty_description);
//             // rl.question("Enter Your Choice: ",(choice:string)=>{
//             //     let isChoiceValid:boolean = isAnswerValid(choice,MODE.CHOOSING_DIFFICULTY_LEVEL);
//             //     if(isChoiceValid){
//             //     }
//             // });
//         }else{
//             console.log("Please Provide Valid Answer!!");
//         }
//         // if (askAgain) loop();
//     });
// }
(function loop() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('Do You Want to Start a Number Guessing Game?');
        var answer = yield new Promise((resolve) => {
            rl.question("Enter ['Y'==>'Yes'/'N'==>'No']: ", (inp) => {
                resolve(inp);
            });
        });
        let isValid = isAnswerValid(answer, MODE.BEGINING_OF_GAME);
        if (isValid) {
            if (answer === 'N') {
                START_AGAIN = false;
                // break;
                rl.close();
                return;
            }
            let gaming_description = `Welcome To Number Guessing Game!`;
            console.log(gaming_description);
            let difficulty_description = `Please Select Difficulty Level:
            1.Easy (10 Chances)
            2.Medium (5 Chances)
            3.Hard (3 Chances)`;
            console.log(difficulty_description);
            // rl.question("Enter Your Choice: ",(choice:string)=>{
            //     let isChoiceValid:boolean = isAnswerValid(choice,MODE.CHOOSING_DIFFICULTY_LEVEL);
            //     if(isChoiceValid){
            //     }
            // });
            // const answer = await new Promise<string>((resolve) => {
            //     rl.question("Enter ['Y'==>'Yes'/'N'==>'No']: ", (answer) => {
            //         resolve(answer);
            //     });
            // });
        }
        else {
            console.log("Please Provide Valid Answer!!");
        }
        // }
        // const age = await new Promise<number>((resolve) => {
        // rl.question('What is your age? ', (answer) => {
        //     resolve(parseInt(answer, 10));
        // });
        // });
        // }
        // rl_beg.question("Enter ['Y'==>'Yes'/'N'==>'No']: ", (inp:string) => {
        //     let isValid:boolean = isAnswerValid(inp,MODE.BEGINING_OF_GAME);
        //     if(isValid){
        //         if(inp === 'N'){
        //             START_AGAIN = false;
        //             rl_beg.close();
        //         }
        //         // let gaming_description:string = `Welcome To Number Guessing Game!`;
        //         // console.log(gaming_description);
        //         // let difficulty_description:string = `Please Select Difficulty Level:
        //         // 1.Easy (10 Chances)
        //         // 2.Medium (5 Chances)
        //         // 3.Hard (3 Chances)`;
        //         // console.log(difficulty_description);
        //         // rl.question("Enter Your Choice: ",(choice:string)=>{
        //         //     let isChoiceValid:boolean = isAnswerValid(choice,MODE.CHOOSING_DIFFICULTY_LEVEL);
        //         //     if(isChoiceValid){
        //         //     }
        //         // });
        //     }else{
        //         console.log("Please Provide Valid Answer!!");
        //     }
        if (START_AGAIN)
            loop();
        // });
    });
})();
function isAnswerValid(inp, mode) {
    switch (mode) {
        case 0: return checkYesOrNoValidity(inp);
        case 1: return isGivenChoiceValid(inp);
        case 2:
            return false;
            break;
        case 3:
            return false;
            break;
        default: return false;
    }
}
function checkYesOrNoValidity(inp) {
    inp = inp.toLowerCase();
    if (inp !== 'y' && inp !== 'n')
        return false;
    return true;
}
function isGivenChoiceValid(choice) {
    let ch = parseInt(choice);
    if (!ch && ch !== 1 && ch !== 2 && ch !== 3)
        return false;
    return true;
}
