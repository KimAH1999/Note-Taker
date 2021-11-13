const FileIO = require("./fileIO");

const fileIO = new FileIO();

fileIO.write("message.txt", "Hello World! one more");

const message = fileIO.read("message.txt");

console.log(message);
