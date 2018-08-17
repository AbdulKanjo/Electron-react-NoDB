const axios = require('axios');

const getGames = async (req, res) => {
  let games = await axios.get(`https://www.giantbomb.com/api/games/?api_key=${process.env.API_KEY}&format=json`);
  res.send(games);
}

module.exports = {
  getGames
}