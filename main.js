import inquirer from "inquirer";
let myBalance = 10000;
let myPin = 1990;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter your pin number: ",
        type: "number",
    },
]);
if (pinAnswer.pin === myPin) {
    console.log("correct pin code!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "please select option",
            type: "list",
            choices: ["withdraw", "check balance", "fast Cash"],
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
        myBalance -= amountAns.amount;
        console.log("Your remaining balance is: " + myBalance);
    }
    else if (operationAns.operation === "check balance") {
        console.log(`your balance is ${myBalance}`);
    }
}
else {
    console.log("Incorrect answer!");
}
