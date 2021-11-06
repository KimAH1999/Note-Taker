// function hello(msg){
//   console.log(msg)
// }

// var hello = function(msg){
//   console.log(msg)
// }

var hello = (msg)=>{
  console.log(msg)
}

hello("Hello Node with Arrow Function")

// var x = { 
//   name: "Will",
//   callName: function(){
//     console.log("This Obj name is " + this.name)
//   }
// }

// var x = { 
//   name: "Will",
//   callName: ()=>{
//     console.log("This Obj name is " + this.name)
//   }
// }

// x.callName()

// var person = {
//   name:"will",
//   saySomething: function(){
//     console.log("inside the functino-->",this.name)
//     setTimeout( function() {
//         console.log("inside the timeout-->",this.name)
//     }, (100));
//   }
// }


var person = {
  name:"will",
  saySomething: function(){
    console.log("inside the functino-->",this.name)
    setTimeout( ()=> {
        console.log("inside the timeout-->",this.name)
    }, (100));
  }
}
person.saySomething()