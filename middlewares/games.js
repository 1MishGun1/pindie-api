const games = require("../models/game");

const findAllGames = async (req, res, next) => {
  const result = await games.find({}).populate("categories").populate({
    path: "users",
    select: "-password",
  });
  req.gamesArray = result;
  console.log(result);
  next();
};

// Create new game
const createGame = async (req, res, next) => {
  console.log("POST /games");
  try {
    console.log(req.body);
    req.game = await games.create(req.body);
    next();
  } catch (error) {
    res.setHeader("Content-Type", "application/json");
    res
      .statusCode(400)
      .send(JSON.stringify({ message: "Error create new game" }));
  }
};

// Search game by id
const findGameById = async (req, res, next) => {
  try {
    req.game = await games
      .findById(req.params.id)
      .populate("categories")
      .populate({
        path: "users",
        select: "-password",
      });
    next();
  } catch (error) {
    res.setHeader("Content-Type", "application/json");
    res.statusCode(404).send(JSON.stringify({ message: "Game not found" }));
  }
};

module.exports = { findAllGames, createGame, findGameById };
