// note helper functions
const fs = require('fs');
const path = require('path');

const createNewNote = (note, notesDb) => {
  notesDb.push(note);
  fs.writeFileSync(
    path.join(__dirname,'../db/db.json'),
    JSON.stringify({ notes: notesDb }, null, 2) 
  );   
}