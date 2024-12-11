const OrderBook = require('../models/OrderBook');

// Create a new order book entry
async function createOrderBook(req, res) {
  try {
    const { orderNumber, customerName, orderDate, totalAmount, status } = req.body;
    const newOrderBook = await OrderBook.create({
      orderNumber,
      customerName,
      orderDate,
      totalAmount,
      status,
    });
    res.status(201).json(newOrderBook);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create order book entry' });
  }
}

// Get all order book entries
async function getOrderBooks(req, res) {
  try {
    const orderBooks = await OrderBook.findAll();
    res.status(200).json(orderBooks);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve order books' });
  }
}

// Get a single order book entry by ID
async function getOrderBookById(req, res) {
  try {
    const { id } = req.params;
    const orderBook = await OrderBook.findByPk(id);
    if (orderBook) {
      res.status(200).json(orderBook);
    } else {
      res.status(404).json({ error: 'Order book entry not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve order book entry' });
  }
}

// Update an order book entry by ID
async function updateOrderBook(req, res) {
  try {
    const { id } = req.params;
    const { orderNumber, customerName, orderDate, totalAmount, status } = req.body;
    const orderBook = await OrderBook.findByPk(id);
    if (orderBook) {
      await orderBook.update({
        orderNumber,
        customerName,
        orderDate,
        totalAmount,
        status,
      });
      res.status(200).json(orderBook);
    } else {
      res.status(404).json({ error: 'Order book entry not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to update order book entry' });
  }
}

// Delete an order book entry by ID
async function deleteOrderBook(req, res) {
  try {
    const { id } = req.params;
    const orderBook = await OrderBook.findByPk(id);
    if (orderBook) {
      await orderBook.destroy();
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Order book entry not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete order book entry' });
  }
}

module.exports = {
  createOrderBook,
  getOrderBooks,
  getOrderBookById,
  updateOrderBook,
  deleteOrderBook,
};
