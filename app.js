require("dotenv").config();
require("./config/database").connect();

const express = require("express");
const authenticationRouter = require("./routes/auth");
const jokesRouter = require("./routes/jokes");

global.token = "";

const app = express();
app.use(express.json());

app.use("/auth", authenticationRouter);
app.use("/jokes", jokesRouter);

module.exports = app;
