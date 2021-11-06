let item1 = process.argv[2]
let item2 = process.argv[3]

// normal
// function compare(x,y){
//   if(x === y){
//     return true
//   } else { 
//     return false
//   }
// }

// clean
// function compare(x,y){
//   return x===y
// }
// console.log(compare(item1,item2))



// Even Cleaner
console.log(item1===item2)