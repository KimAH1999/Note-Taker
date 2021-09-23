// Write Your Code Below
function compareValues(a,b){
  if(a===b){
    console.log("They are equal in type and value" )
  } else if (a==b){
    console.log("They are equal in value")
  } else {
    console.log("The values are not equal")
  }
}

compareValues("10",10)
compareValues("10","10")
compareValues("hello World", "yesy")