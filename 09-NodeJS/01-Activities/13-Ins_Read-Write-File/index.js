// fs is a Node standard library package for reading and writing files
const fs = require('fs');

// Return the contents of 'data.csv' as a string in the variable "data"
// "utf8" encodes the raw buffer data in human-readable format
fs.readFile('data.csv', 'utf8', (error, data) =>{
  if(error) throw error;
  console.log(data)

})
  // error ? console.error(error) : console.log(data)
// );

// Uncomment this next function to write to the file with anything you pass in as process.argv[2]

fs.writeFile('log2.css', process.argv[2], (massiveIsssue) =>{
  if(massiveIsssue) throw massiveIsssue;
  console.log("Success! Saved!")
}
  // err ? console.error(err) : console.log('Success!')
);
