// WRITE YOUR CODE HERE
var students = ["Parisa", "Hekma", "Pana", "Leah"]

console.log(students.length)
console.log("Welcome to the class " + students[6])
var og = students[0]

students[0] = "Andrew"
console.log(students)



if(students[0] != og){
  console.log(students[0] + " is in class")
}