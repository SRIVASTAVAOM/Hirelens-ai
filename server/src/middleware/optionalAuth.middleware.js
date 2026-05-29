const jwt = require("jsonwebtoken");

const optionalAuth =
async (req, res, next) => {

  try {

    const authHeader =
      req.headers.authorization;

    if (!authHeader) {

      return next();

    }

    const token =
      authHeader.split(" ")[1];

    if (!token) {

      return next();

    }

    const decoded =
      jwt.verify(

        token,

        process.env.JWT_SECRET

      );

    req.user = decoded;

    next();

  } catch (error) {

    next();

  }

};

module.exports = optionalAuth;