const express = require('express');
const router = express.Router();
const dataExchangeController = require('../controllers/dataExchangeController');

router.post('/data-exchanges', dataExchangeController.initiateDataExchange);
router.get('/data-exchanges', dataExchangeController.getDataExchanges);
router.put('/data-exchanges/:id', dataExchangeController.updateDataExchange);
router.delete('/data-exchanges/:id', dataExchangeController.deleteDataExchange);

module.exports = router;
