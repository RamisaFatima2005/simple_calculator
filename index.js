#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter first number", type: "number", name: "firstNumber" },
    { message: "Enter second number", type: "number", name: "secondNumber" },
    { message: "Select one of the operators to perform operation", type: "list", name: "operator", choices: ["addition", "subtraction", "multiplication", "division", "modulus", "exponentiation"] },
]);
console.log(answer);
//conditional statement
if (answer.operator === "addition") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "subtraction") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "division") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else if (answer.operator === "modulus") {
    console.log(answer.firstNumber ** answer.secondNumber);
}
else if (answer.operator === "exponentiation") {
    console.log(answer.firstNumber % answer.secondNumber);
}
else {
    console.log("please select a valid operator");
}
