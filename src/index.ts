//=================================Number Guessing Game =========================================================
import readline from "readline";

const rl:readline.Interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// const rl_:readline.Interface = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

interface Mode{
    'BEGINING_OF_GAME':number,
    'CHOOSING_DIFFICULTY_LEVEL':number,
    'IN_BETWEEN_OF_GAME':number,
    'END_OF_GAME':number
}

const MODE = {
    'BEGINING_OF_GAME':0,
    'CHOOSING_DIFFICULTY_LEVEL':1,
    'IN_BETWEEN_OF_GAME':2,
    'END_OF_GAME':3
} 


let askAgain:boolean = true;
// const starting_text:string = 
// `Welcome to Number Guessing Game!!
// I am Thinking of a number between 1 and 100.
// DO You Want to Start a Game?`;
// console.log(starting_text);
const starting_statement:string = 'Do You Want to Start a Game?';
let START_AGAIN:boolean = true;
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

(async function loop() {
    
    console.log('Do You Want to Start a Number Guessing Game?');
        var answer:string = await new Promise<string>((resolve) => {
            rl.question("Enter ['Y'==>'Yes'/'N'==>'No']: ", (inp:string) => {
                resolve(inp);
            });
        });
        let isValid:boolean = isAnswerValid(answer,MODE.BEGINING_OF_GAME);
        if(isValid){
            if(answer === 'N'){
                START_AGAIN = false;
                rl.close();
                return;
            }
            let gaming_description:string = `Welcome To Number Guessing Game!`;
            console.log(gaming_description);
            let choice = await selectChoice();
            isValid = isAnswerValid(choice,MODE.CHOOSING_DIFFICULTY_LEVEL);
            if(isValid){
                if(choice === '4'){
                    console.log("Exiting Game!!");
                    rl.close();
                    return;
                }
                console.log("Your Selected Choice is: ",choice);

            }else{
                console.log("Enter Valid Choice!!! Try Again!!");
            }
        }else{
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
        if (START_AGAIN) loop();
    // });
})();


function isAnswerValid(inp:string,mode:number) : boolean {

    switch (mode) {
        case 0:return checkYesOrNoValidity(inp);
        case 1:return isGivenChoiceValid(inp);
        case 2:return false;break;
        case 3:return false;break;
        default:return false;
    }
}

function checkYesOrNoValidity(inp:string):boolean {
    inp = inp.toLowerCase();
    if(inp !== 'y' && inp !== 'n')return false;
    return true;
}

function isGivenChoiceValid(choice:string):boolean {
    let ch:number = parseInt(choice);
    if(!ch && ch !== 1 && ch !== 2 && ch !==3 && ch !=4)return false;
    return true;
}

async function selectChoice():Promise<string> {
    let difficulty_description:string = `Please Select Difficulty Level:
            1.Easy (10 Chances)
            2.Medium (5 Chances)
            3.Hard (3 Chances)
            **If You Want to Exit the Game Enter \"4\"**`;
            console.log(difficulty_description);
            const choice:string = await new Promise<string>((resolve) => {
                rl.question("Enter Your Choice: ", (answer) => {
                    resolve(answer);
                });
            });
            return choice;
}