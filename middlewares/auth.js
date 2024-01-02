const jwt = require('jsonwebtoken');
const User = require('../models/user');
const logger = require('../logger');

const ENV = require('../environment/environment');

module.exports = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const isTokenExpired = isTokenExpired(token, ENV.RANDOM_TOKEN_EXPIRY);
    if (isTokenExpired) {
      logger.info({ message: 'Token expired' });
      res.status(403).json({ "message": "Unauthorized - Token expired" });
      return;
    }

    const decodedToken = jwt.verify(token, ENV.RANDOM_TOKEN_SECRET);
    const user = await User.findOne({ email: decodedToken.user.email });

    if (!user) {
      logger.warning({ message: 'Invalid token' });
      res.status(403).json({ "message": "Unauthorized - Invalid token" });
      return;
    }

    req.user = user;
    next();
  } catch (err) {
    logger.error({ message: err.toString() });
    res.status(403).json({ "message": "Unauthorized - 0" });
  }
}
