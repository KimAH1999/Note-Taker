const router = require("express").Router();
let data = require('../db/db.json')
const fs = require('fs');

// Shows the existed notes
router.get('/api/notes', (req, res) => res.json(data))
    
currentId = data.length;
// Add new notes
router.post('/api/notes', (req, res) => {
    const newData = req.body;

    newData['id'] = currentId+1;
    currentId++;
    data.push(newData);
    generateNotes();

    return res.status(200).end();
});

// Delete the selected note
router.delete('/api/notes/:id', (req, res) => {
    res.send('Delete request recieved!')
    const id = req.params.id;
    const smallId = data.filter((small) => small.id < id);    
    const bigId = data.filter((big) => big.id > id);
    data = smallId.concat(bigId);
    generateNotes();
})

const generateNotes = () => {
    fs.writeFile('db/db.json', JSON.stringify(data), (err) => {
        if (err) throw err;
    });
}


module.exports = router;