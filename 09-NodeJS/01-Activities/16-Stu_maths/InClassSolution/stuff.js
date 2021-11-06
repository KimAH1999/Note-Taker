const math = require("./maths")

function consoleandOperate(operation,num1,num2){
  let value = 0
switch (operation) {
  case "sum":
      value = math.sum(num1, num2)
    break;

    case "substract":
      value = math.difference(num1,num2)
    break;
    case "multiply":
      value= math.product(num1,num2)
    break;
    case "quotient":
      value = math.quotient(num1,num2)
    break;
  default:
    console.log("Please pass in a correct operation")
    break;
}

console.log(value)
}

module.exports = { 
  consoleandOperate:consoleandOperate
}