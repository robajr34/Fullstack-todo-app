const jwt = require("jsonwebtoken");

const auth = async (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    const error = new Error("Unauthenticated");
    error.status = 401;
    return next(error);
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded;

    return next();
  } catch (err) {
    err.status = 401;
    return next(err);
  }
};

module.exports = auth;
