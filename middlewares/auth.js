const jwt = require("jsonwebtoken");

const checkAuth = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization || authorization.startsWith("Bearer ")) {
    res.status(401).send("Please log in");
  }

  const token = authorization.replace("Bearer ", "");

  try {
    req.user = jwt.verify(token, "some-secret-key");
  } catch (error) {
    res.status(401).send("Please log in");
  }
  next();
};

module.exports = { checkAuth };
