const Algo = require("../algo");

describe("Algo", () => {
  describe("reverse", () => {
    // TODO: Write a test for the `reverse` method that should take a string as an argument and return a new reversed version of the string
    it("Should return the reverse of a given str", ()=>{ 
      const str = "Hello World!"
      const reversedStr = "!dlroW olleH"

      const result = new Algo().reverse(str)
      expect(result).toEqual(reversedStr)
    })
  });

  describe("isPalindrome", () => {
    // TODO: Write a test for the `isPalindrome` method that should take a string as an argument and return the boolean `true` if the provided string is a palindrome.

    it("Should return True if string is a palindrome", ()=>{
       const str = "racecar"
    const result = new Algo().isPalindrome(str)

    expect(result).toEqual(true)
    })
   
    it("Should return false if string is not palindrome", ()=>{
      const str = "will"
   const result = new Algo().isPalindrome(str)

   expect(result).toEqual(false)
   })
  });

  describe("capitalize", () => {
    // TODO: Write a test for the `capitalize` method that should take a string as an argument and return a new string with the first letter of each word capitalized

    it("Should return a string with the first letter of each word capitalized", ()=>{
      const str = "capitalize every first word of the string."
      const expectedResult = "Capitalize Every First Word Of The String."

      const result = new Algo().capitalize(str)

      expect(result).toEqual(expectedResult)
    })
  });
});
