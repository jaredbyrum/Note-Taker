const express = require('express');
const path = require('path');
const api = require('./routes');

const PORT = process.env.PORT || 3001;

const app = express();

//middleware 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

//link to api routes
app.use('/api', api);

//html routes
app.get('/', (req, res) => 
  res.sendFile(path.join(__dirname, '/public/index.html'))
);
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

//start server
app.listen(PORT, () =>
  console.log(`App live on ${PORT}.`)
);
