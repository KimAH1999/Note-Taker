var home = {
  address:"1233 camera st.",
  phone: 1234567890,
  rooms:["1bd","2bd","4bd"],
  isVacant: true,
  "how-long": false,
  "2016-2018":"Best Year Ever",
  "2019-2021":"some data"
}

console.log("Whats your Address?")
console.log(home.address)

// console.log(home.2016-2018)
console.log(home["2016-2018"])

console.log(home.how-long)





// Objects are a collection of properties
var planet = {
  // Properties are made up of key-value pairs
  name: "Earth",
  age: "4.543 billion years",
  moons: 1,
  isPopulated: true,
  population: "7.594 billion"
};

// To access a property's value that is a string, number or booleean, use the object's name and the associated key	
// Uses dot notation and logs "Earth"	
console.log(planet.name);
	
// Uses bracket notation and logs "Earth"
console.log(planet["name"]);
