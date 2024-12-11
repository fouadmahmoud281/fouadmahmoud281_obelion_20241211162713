const express = require('express');
const {
  createOrderBook,
  getOrderBooks,
  getOrderBookById,
  updateOrderBook,
  deleteOrderBook,
} = require('../controllers/orderBookController');

const router = express.Router();

router.post('/order-books', createOrderBook);
router.get('/order-books', getOrderBooks);
router.get('/order-books/:id', getOrderBookById);
router.put('/order-books/:id', updateOrderBook);
router.delete('/order-books/:id', deleteOrderBook);

module.exports = router;
