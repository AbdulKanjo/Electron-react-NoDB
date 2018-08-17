const express = require('express');
const {json} = require('body-parser');
const massive = require('massive');
const controller = require('./controller.js');
require('dotenv').config();

const app = express();
const port = 5000;

app.use(json());

app.get('/api/games', controller.getGames);

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});