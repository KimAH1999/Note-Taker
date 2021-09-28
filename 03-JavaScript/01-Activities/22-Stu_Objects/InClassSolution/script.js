//WRITE YOUR CODE BELOW
var customerOrder = {
  drinkName: "Cortadito",
  numberOfSugars: 5, 
  isReady: true
}

console.log("drink Name: " + customerOrder.drinkName)
console.log("sugars: "+ customerOrder["numberOfSugars"])


if(customerOrder.isReady){
  console.log("Drink is Ready")
} else {
  console.log("Drink is still in Queue")
}