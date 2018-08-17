const express = require('express');
const {json} = require('body-parser');
const massive = require('massive');
const controller = require('./controller.js');
require('dotenv').config();

const app = express();
const port = 5000;

massive(process.env.CONNECTION_STRING)
  .then(db => {
    app.set('db', db);
  })
  .catch(err => console.log(err));

app.use(json());

app.get('/api/games', controller.getGames);
app.get('/api/games/:game_id', controller.getGameById);

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});