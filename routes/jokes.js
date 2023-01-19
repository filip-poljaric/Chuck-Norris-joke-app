const express = require("express");
const jwtDecode = require("jwt-decode");
const User = require("../model/user");
const verifyToken = require("../middleware/auth");
const sendJoke = require("../utils/sendJoke");

const jokesRouter = express.Router();

jokesRouter.get("/get", async (req, res) => {
  if (!verifyToken(global.token)) {
    return res.status(400).send("Token expired");
  }

  const decoded = jwtDecode(global.token);
  const userToSend = await User.findOne({ email: decoded.email });

  if (!userToSend)
    return res.status(400).send(`No logged in user to send the joke to.`);

  const joke = await fetch("https://api.chucknorris.io/jokes/random").then(
    (response) => {
      return response.json();
    }
  );
  await sendJoke(joke?.value, userToSend.email);
  return res
    .status(200)
    .send(`Chuck Norris joke sent to user with email: ${userToSend.email}`);
});

module.exports = jokesRouter;
