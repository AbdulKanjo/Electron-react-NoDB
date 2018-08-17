const axios = require("axios");

const getGames = async (req, res) => {
  let games = await axios.get(
    `https://www.giantbomb.com/api/games/?api_key=${
      process.env.API_KEY
    }&format=json`
  );
  res.send(games.data.results);
};

const getGameById = async (req, res) => {
  let {game_id} = req.params;
  let game = await axios.get(`https://www.giantbomb.com/api/game/${game_id}/?api_key=${process.env.API_KEY}&format=json`);
  res.send(game.data.results);
}

module.exports = {
  getGames,
  getGameById
}
