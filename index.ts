import inquirer from "inquirer";
const currencies: any = {
  USD: 1, //Base currency
  EUR: 0.91,
  GBP: 0.76,
  INR: 74.57,
  PKR: 280
};

let answers = await inquirer.prompt([
  {
    name: "from",
    message: "Convert currency from: ",
    type: "list",
    choices: ["USD", "EUR", "GBP", "INR", "PKR"],
  },
  {
    name: "to",
    message: "Convert currency to: ",
    type: "list",
    choices: ["USD", "EUR", "GBP", "INR", "PKR"],
  },
  {
    name: "amount",
    message: "Enter amount here ",
    type: "number",
  },
]);

let fromAmount = currencies[answers.from];
let toAmount = currencies[answers.to];
let amount = answers.amount;

let base_amount = amount / fromAmount; // because we calcualted all the currencies realtive to USD so converting to USD.
let converted_amount = base_amount * toAmount;
let rounded_amount = converted_amount.toFixed(3);

console.log("Converted amount : " + rounded_amount);


