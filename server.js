const express = require('express');
const server = express();
const cors = require('cors');
const bodyParser = require('body-parser');

const messages = ['hi there'];

server.use(express.static('.'));

const startupArgs = process.argv.slice(2);
const enableCors = startupArgs && startupArgs.includes('cors');

if (enableCors) {
  const accessControlAllowedOrigin = 'http://127.0.0.1:8080';
  server.options(accessControlAllowedOrigin, cors()) // allow preflight requests
  server.use(cors({
    methods: ['GET', 'POST',],
    origin: accessControlAllowedOrigin,
  }));
}

server.use(bodyParser.urlencoded({
  extended: true
}));
server.use(bodyParser.json());

server.get('/message', (req, res) => {
  console.log('get ', messages);
  res.send(messages);
});

server.post('/message', (req, res) => {
  console.log('/message adding ', req.body.message);
  messages.push(req.body.message);
  res.status(201);
  res.send();
});

server.post('/messagePlainText', bodyParser.text(), (req, res) => {
  console.log('/messagePlainText adding ', req.body);
  messages.push(req.body);
  res.status(201);
  res.send();
});

server.listen(3000);
console.log("Server listening on localhost:3000");