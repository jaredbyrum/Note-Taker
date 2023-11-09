const notes = require('express').Router();
const fs = require('fs');
const uuid = require('../helpers/uuid');
const path = require('path');


// '../db/db.json'

//display json to page
notes.get('/', (req, res) => {
  console.info(`${req.method} request recieved.`);
  let notesDb = fs.readFileSync(path.join(__dirname, '../db/db.json'));
  res.send(JSON.parse(notesDb));
});

//create new note and add it to the notes db in db.json
notes.post('/', (req, res) => {
  console.info(`${req.method} request recieved.`);
  let notesDb = fs.readFileSync(path.join(__dirname, '../db/db.json'));
  notesDb = JSON.parse(notesDb);
  notesDb.push({
    "title": `${req.body.title}`,
    "text": `${req.body.text}`,
    "id": `${uuid()}`
  });

  fs.writeFileSync(path.join(__dirname, '../db/db.json'), JSON.stringify(notesDb));

  res.json(req.body);
});

//delete existing note and remove it from the db
notes.delete('/:id', (req, res) => {
  let notesDb = fs.readFileSync(path.join(__dirname, '../db/db.json'));
  notesDb = JSON.parse(notesDb);
  notesDb.splice(notesDb.indexOf(req.body.id), 1);

  fs.writeFileSync(path.join(__dirname, '../db/db.json'), JSON.stringify(notesDb));

  res.json(req.body);
});

module.exports = notes;