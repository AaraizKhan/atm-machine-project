#! /usr/bin/env node

import inquirer from "inquirer"

let myBalance = 20000   // curency in DOLLAR
let myPin = 8899 

let pinAnswer = await inquirer.prompt(
    [
        {
            name: "PIN",
            message: "Enter your pin here",
            type: "number"
        }
    ]
);

if (pinAnswer.PIN === myPin){
    console.log("Correct PIN CODE !")
    let operationAnswer = await inquirer.prompt(
        [
            {
                name: "operations",
                message: "Please Select option",
                type: "list",
                choices: ["withdraw", "check balance", "Fast cash"]
            }
        ]
    );
    
    if (operationAnswer.operations === "withdraw"){
        let amountAnswer = await inquirer.prompt(
            [
                {
                    name: "amount",
                    message: "Enter amount",
                    type: "number"
                }
            ]
        );
        if(amountAnswer.amount <= myBalance){ myBalance -= amountAnswer.amount
        console.log(`Your Remaining balance is ${myBalance}`)
        }
        else if(amountAnswer.amount >= myBalance){
console.log("Insuffiecient funds in Account !")
        }
    }
 else if(operationAnswer.operations === "Fast cash"){
            let cashOptions = await inquirer.prompt(
                [
                    {
                        name: "cash",
                        message: "Select Amount",
                        type: "list",
                        choices: [1000 , 5000 , 10000, 15000, 20000, 25000, 30000, 35000, 40000]
                    }
                ]);
                if (cashOptions.cash <= myBalance ){
                    myBalance -= cashOptions.cash
                    console.log(`Your Remaining Balance is ${myBalance}`)
                }
                else if(cashOptions.cash >= myBalance){
                    console.log("Insufficient funds in Account !")
                }
            }
            else if(operationAnswer.operations === "check balance"){
                console.log(`Your remaining balance is ${myBalance}`)
            } }
            
            
        
        else{
        console.log("Incorrect PIN CODE !");   
        }