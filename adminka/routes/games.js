const gamesRouter = require("express").Router();
const {
  sendAllGames,
  deleteGame,
  addGameController,
} = require("../controllers/games");
const { getAllGames } = require("../middlewares/games");

gamesRouter.post("/games", getAllGames, addGameController);
gamesRouter.get("/games", sendAllGames);
gamesRouter.delete("/games/:id", deleteGame);

module.exports = gamesRouter;
