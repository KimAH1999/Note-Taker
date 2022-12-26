//back-end server function
const express = require('express');
const path = require('path');
const fs = require('fs');
// Initialize the app and create a port
const app = express();
const PORT = process.env.PORT || 3001;
// Sets up body parsing, static, and route middleware
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static('public'));
// Starts the server on the port(In terminal npm run start)
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/notes.html'))
);
app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
app.post('/notes', (req, res) => {
  const { title, text, id } = req.body;
  if (req.body) {
    const newnote = {
      title,
      text,
      id
    };
    readAndAppend(newnote, './public/db/db.json');
    res.json(`Note added successfully`);
  } else {
    res.error('Error in adding note');
  }
});
app.delete('/notes/:id', (req, res) => {
  if (req) {
    readAndDelete(req.params.id, './public/db/db.json');
    res.json(`note deleted`);
  } else {
    res.error('Error in removing note');
  }
});
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/index.html'))
);
const readAndAppend = (content, file) => {
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
    } else {
      const parsedData = JSON.parse(data);
      parsedData.push(content);
      writeToFile(file, parsedData);
    }
  });
};

const readAndDelete = (id, file) => {
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) {
      console.error(err)
    } else {
      const parsedData = JSON.parse(data);
      parsedData.forEach(element => {
        if(element.id == id){
          parsedData.splice(element,1)
        }
      })
      writeToFile(file, parsedData);
    }
  });
};

const writeToFile = (destination, content) =>
  fs.writeFile(destination, JSON.stringify(content, null, 4), (err) =>
    err ? console.error(err) : console.info(`\nData written to ${destination}`)
);
