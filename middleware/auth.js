const jwt = require("jsonwebtoken");

const config = process.env;

const verifyToken = (token) => {
  try {
    return (decoded = jwt.verify(token, config.TOKEN_KEY));
  } catch (err) {
    return false;
  }
};

module.exports = verifyToken;
