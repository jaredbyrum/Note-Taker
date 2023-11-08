const notes = require('express').Router();
const fs = require('fs');
const uuid = require('../helpers/uuid');


notes.get('/', (req, res) => {
  console.info(`${req.method} request recieved.`);
  return res.json(JSON.parse(fs.readFileSync(__dirname + '/../db/db.json')));
});

notes.post('/', (req, res) => {
  console.info(`${req.method} request recieved.`);
  const newNote = {
    title: req.body.title,
    text: req.body.text,
    id: uuid()
  }
  fs.readFile('../db/db.json', function (err, data) {
    let json = JSON.parse(data);
    json.push(newNote);
    fs.writeFile('../db/db.json', JSON.stringify(json), (err) =>
    err ? console.log(err) : console.log("Success!"));
  }); 
});

// func for writing to db
// fs.writeFile('./db/db.json', JSON.stringify(data), (err) => 
// err ? console.error(err) : console.log('Success!')
// );

// new note data
//newNote = {
//title: req.body.title,
//text: req:body.title,
//id = uuid();
//}

module.exports = notes;