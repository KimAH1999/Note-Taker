function Algo() {}

Algo.prototype.reverse = function(str) {
  // TODO: Your code here
  return str.split("").reverse().join("")

};

Algo.prototype.isPalindrome = function(str) {
  // TODO: Your code here
  return this.reverse(str) === str
};

Algo.prototype.capitalize = function(str) {
  // TODO: Your code here 

  const arrStr = str.split(" ")

  return arrStr.map((word)=>{
    return word[0].toUpperCase() + word.substring(1)
  }).join(" ")
};

module.exports = Algo;
