const express = require('express');
const router = express.Router();
const validationController = require('../controllers/validationController');

router.post('/validate', validationController.validateFile);
router.get('/validations', validationController.getAllValidations);
router.get('/validations/:id', validationController.getValidationById);
router.delete('/validations/:id', validationController.deleteValidation);

module.exports = router;
