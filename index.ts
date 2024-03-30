#!/usr/bin/env node

import inquirer from "inquirer";
// computer will generate a random number.
// user will input for guessing number.
// compare user input with computer generated number.

const randomNumber = Math.floor(Math.random()*6+1);



const answers = await inquirer.prompt([
    {
        name: "userguessednumber",
        type:"number",
        message:"please guess a number between 1 to 6",

    }
]);
if(answers.userguessednumber === randomNumber){
    console.log("congratulation you guess right number.")
}else{
    console.log("you guess wrong number")
}

console.log(answers);