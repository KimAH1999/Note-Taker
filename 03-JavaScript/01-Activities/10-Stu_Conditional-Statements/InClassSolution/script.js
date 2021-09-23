// Change the values and operators below to test your algorithm meets all conditions
var x = 50;
var expression1 = (x >= 25); //false
var expression2 = (x >= 50); // false


// Write Your JavaScript Code Here

if(expression1 && expression2){
  console.log("True ✅ True ✅")
} else if(expression1){ 
  console.log("True ✅ False ❌")
} else if (expression2){
  console.log("False ❌ True ✅")
} else { 
  console.log("False ❌ False ❌")
}