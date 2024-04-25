#! /usr/bin/env node

import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { massage: "Enter Your Firstnumber", type: "number", name: "firstnumber" },
  { massage: "Enter Your Secondnumber", type: "number", name: "secondnumber" },
  {
    massage: "select one of the operators to preform operation",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subraction", "Multiplication", "Division"],
  },
]);

//condition statement
if (answer.operator === "Addition") {
  console.log(answer.firstnumber + answer.secondnumber);
} else if (answer.operator === "Subraction") {
  console.log(answer.firstnumber - answer.secondnumber);
} else if ( answer.operator === "Multiplication") {
  console.log(answer.firstnumber * answer.secondnumber);
}
 else if (answer.operator === "Division") {
  console.log(answer.firstnumber / answer.secondnumber);
} else {
  console.log("please select valid operator")
}
console.log("the code is end");







