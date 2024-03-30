import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.yellow("**....................Welcom to ATM Machine....................**"));
console.log(chalk.red("pin code is: 1990"));
let myBalance = 30000;
let myPin = 1990;
let userPin = await inquirer.prompt([
    {
        name: "pin",
        message: "Please enter your pin number: ",
        type: "number",
    },
]);
if (userPin.pin === myPin) {
    console.log(chalk.greenBright("correct pin code!"));
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "please select option: ",
            type: "list",
            choices: ["withdraw", "fast cash", "check balance"]
        },
    ]);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter your amount: ",
                type: "number",
            },
        ]);
        // (amountAns.amount >= 0 && amountAns.amount <= myBalance):
        // 1. agar jo bhi value enter karen wo 0 k equal ho ya bari ho  && (or)
        // 2. agar jo bhi value enter karen wo mere balance k equal ho ya choti ho
        if (amountAns.amount >= 0 && amountAns.amount <= myBalance) {
            myBalance -= amountAns.amount;
            console.log(chalk.blue(`your remaining balance is: ${myBalance}`));
        }
        else {
            console.log(chalk.red(`Please drow a valid amount! Your current amount is:  ${myBalance}`));
        }
    }
    if (operationAns.operation === "fast cash") {
        let cashList = await inquirer.prompt([
            {
                name: "cash",
                message: "select your fast cash amount: ",
                type: "list",
                choices: ["5000", "10000", "15000", "20000"],
            },
        ]);
        myBalance -= cashList.cash;
        console.log(chalk.blue(`your remaining balance is: ${myBalance}`));
    }
    else if (operationAns.operation === "check balance") {
        console.log(chalk.blue(`your current balance is: ${myBalance}`));
    }
}
else {
    console.log(chalk.red("Incorrect Pin Number"));
}
