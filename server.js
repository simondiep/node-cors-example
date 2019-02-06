const express = require('express');
const server = express();
const cors = require('cors');
const bodyParser = require('body-parser');

const messages = ['hi there'];

server.use(express.static('.'));

server.options('*', cors()) // allow preflight requests
server.use(cors({
  methods: ['GET', 'POST',],
  origin: 'http://127.0.0.1:8080',
}));

server.use(bodyParser.urlencoded({
  extended: true
}));
server.use(bodyParser.json());

server.get('/message', (req, res) => {
  console.log('get ', messages);
  res.send(messages);
});

server.post('/message', (req, res) => {
  console.log('adding ', req.body.message);
  messages.push(req.body.message);
  res.status(201);
  res.send();
});

server.listen(3000);
console.log("Server listening on localhost:3000");