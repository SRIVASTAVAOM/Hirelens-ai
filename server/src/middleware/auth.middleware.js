const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {

  try {

    const authHeader = req.headers.authorization;

    // Check token exists
    if (!authHeader) {
      return res.status(401).json({
        message: "No token provided"
      });
    }

    // Remove Bearer
    const token = authHeader.split(" ")[1];

    // Verify token
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    // Attach user data
    req.user = decoded;

    next();

  } catch (error) {

    return res.status(401).json({
      message: "Invalid token"
    });

  }

};

module.exports = authMiddleware;