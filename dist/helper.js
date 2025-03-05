"use strict";
//==============================Helper Functions===========================================
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAnswerValid = isAnswerValid;
//Input Checking functions..............................................................
function isAnswerValid(inp, mode) {
    switch (mode) {
        case 0: return checkYesOrNoValidity(inp);
        case 1: return isGivenChoiceValid(inp);
        case 2: return isGivenGuessValid(inp);
        default: return false;
    }
}
//Checks YesOrNo Validity............................................
function checkYesOrNoValidity(inp) {
    inp = inp.toLowerCase();
    if (!inp) {
        console.log("ERROR: Please Enter Something!!!");
        return false;
    }
    if (inp !== 'y' && inp !== 'n')
        return false;
    return true;
}
//checks if given choice of difficulty is Valid or not...............................
function isGivenChoiceValid(choice) {
    if (!choice) {
        console.log("ERROR: Please Enter Something!!");
        return false;
    }
    if (choice !== '1' && choice !== '2' && choice !== '3' && choice !== '4')
        return false;
    return true;
}
//checks if Given Guess is Valid or not................................
function isGivenGuessValid(guess) {
    if (!guess) {
        console.log("ERROR: Please Enter Your Guess!!");
        return false;
    }
    else if (guess === 'exit' || guess === 'hint') {
        return true;
    }
    else if (!parseInt(guess) || !(parseInt(guess) >= 1 && parseInt(guess) <= 100)) {
        return false;
    }
    return true;
}
