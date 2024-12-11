const Validation = require('../models/Validation');

const validateFile = async (req, res) => {
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

    const validation = await Validation.create({
      senderCode,
      fileName,
      fileSize,
      isValid: true,
      validationMessage: 'File is valid.'
    });

    return res.status(200).json(validation);
  } catch (error) {
    return res.status(500).json({ message: 'An error occurred during validation.', error: error.message });
  }
};

const getAllValidations = async (req, res) => {
  try {
    const validations = await Validation.findAll();
    return res.status(200).json(validations);
  } catch (error) {
    return res.status(500).json({ message: 'An error occurred while fetching validations.', error: error.message });
  }
};

const getValidationById = async (req, res) => {
  try {
    const validation = await Validation.findByPk(req.params.id);
    if (!validation) {
      return res.status(404).json({ message: 'Validation not found.' });
    }
    return res.status(200).json(validation);
  } catch (error) {
    return res.status(500).json({ message: 'An error occurred while fetching the validation.', error: error.message });
  }
};

const deleteValidation = async (req, res) => {
  try {
    const validation = await Validation.findByPk(req.params.id);
    if (!validation) {
      return res.status(404).json({ message: 'Validation not found.' });
    }
    await validation.destroy();
    return res.status(200).json({ message: 'Validation deleted successfully.' });
  } catch (error) {
    return res.status(500).json({ message: 'An error occurred while deleting the validation.', error: error.message });
  }
};

module.exports = {
  validateFile,
  getAllValidations,
  getValidationById,
  deleteValidation
};
