// TODO: Import `maths.js`

const math = require("./maths")
const consoleandOperate = require("./stuff")

// TODO: Capture the values passed from the command line into these three variables: `operation`, `numOne` and `numTwo`

const operation = process.argv[2]
const num1 = parseInt(process.argv[3])
const num2 = parseInt(process.argv[4])

consoleandOperate.consoleandOperate(operation,num1,num2)


// TODO: Create a `switch` statement that accepts an `operation` parameter
// and each `case` uses the corresponding `maths` method
// to perform each math operation on the two numbers, `numOne` and `numTwo`
// let value = 0
// switch (operation) {
//   case "sum":
//       value = math.sum(num1, num2)
//     break;

//     case "substract":
//       value = math.difference(num1,num2)
//     break;
//     case "multiply":
//       value= math.product(num1,num2)
//     break;
//     case "quotient":
//       value = math.quotient(num1,num2)
//     break;
//   default:
//     console.log("Please pass in a correct operation")
//     break;
// }

// console.log(value)