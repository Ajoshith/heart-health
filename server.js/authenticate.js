const jwt = require("jsonwebtoken");
const User = require("./userSchema");
const Authentication = (req, resp, next) => {
  try {
    const token = req.cookies.jwtoken;
    const jwtSecret = process.env.JWT_SECRET || "fallback_secret_key_if_not_set";
    if (token) {
      const result = jwt.verify(token, jwtSecret);
      req.userId = result._id;
      console.log(999); // Consider removing debug logs
    } else {
      req.userId = "false";
    }
    next();
  } catch (err) {
    console.log(err);
  }
};
module.exports = Authentication;
