// @desc    Logs request to console
const logger = (req, res, next) => {
    console.log(`${req.method} ${req.protocol}://${req.get('host')}${req.originalUrl}`);
    // Move on to next Middleware component in Lifecycle
    next();
};

module.exports = logger;