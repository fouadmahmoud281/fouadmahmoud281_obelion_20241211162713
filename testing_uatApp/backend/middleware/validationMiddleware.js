const Validation = require('../models/Validation');

const validationMiddleware = async (req, res, next) => {
  try {
    const { senderCode, fileName, fileSize } = req.body;

    if (!fileName.includes(senderCode)) {
      return res.status(400).json({ message: 'Sender code does not match.' });
    }

    if (fileSize === 0) {
      return res.status(400).json({ message: 'File is empty.' });
    }

    const validNamingConvention = /^[a-zA-Z0-9_\-]+\.[a-zA-Z0-9]+$/;
    if (!validNamingConvention.test(fileName)) {
      return res.status(400).json({ message: 'File naming convention is not respected.' });
    }

    if (fileSize > 10485760) {
      return res.status(400).json({ message: 'File size exceeds the allowed limit.' });
    }

    req.validationResult = {
      senderCode,
      fileName,
      fileSize,
      isValid: true,
      validationMessage: 'File is valid.'
    };

    next();
  } catch (error) {
    return res.status(500).json({ message: 'An error occurred during validation.', error: error.message });
  }
};

module.exports = validationMiddleware;
