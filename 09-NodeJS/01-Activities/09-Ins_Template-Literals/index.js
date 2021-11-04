const arya = {
  first: "Arya",
  last: "Stark",
  origin: "Winterfell",
  allegiance: "House Stark"
};
const x = ()=>{ 
  return "hello"
}
// const greeting = "my name is" + arya.first +  "\n I am loyal to" + arya.allegiance 
const greeting = `My name is ${arya.first}!
I am loyal to ${arya.allegiance}.
One more sentence
Here is another`;

console.log(greeting); // prints
// My name is Arya!
// I am loyal to House Stark.

