const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');
const OrderBook = require('../models/OrderBook');

// Function to handle file upload
function handleFileUpload(filePath) {
  return new Promise((resolve, reject) => {
    const results = [];
    fs.createReadStream(filePath)
      .pipe(csv())
      .on('data', (data) => results.push(data))
      .on('end', () => {
        resolve(results);
      })
      .on('error', (error) => {
        reject(error);
      });
  });
}

// Function to process and store order book data
async function processOrderBookData(filePath) {
  try {
    const orderData = await handleFileUpload(filePath);
    const savedOrders = await Promise.all(
      orderData.map(async (order) => {
        const { orderNumber, customerName, orderDate, totalAmount, status } = order;
        return await OrderBook.create({
          orderNumber,
          customerName,
          orderDate: new Date(orderDate),
          totalAmount: parseFloat(totalAmount),
          status,
        });
      })
    );
    return savedOrders;
  } catch (error) {
    throw new Error('Failed to process order book data');
  }
}

module.exports = {
  handleFileUpload,
  processOrderBookData,
};
