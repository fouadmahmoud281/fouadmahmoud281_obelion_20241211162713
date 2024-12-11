const winston = require('winston');
const path = require('path');

// Create a logger instance
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.printf(({ timestamp, level, message }) => {
      return `${timestamp} [${level.toUpperCase()}]: ${message}`;
    })
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: path.join(__dirname, '../../logs/app.log') })
  ]
});

// Stream to use with morgan
logger.stream = {
  write: function (message) {
    logger.info(message.trim());
  }
};

module.exports = logger;
