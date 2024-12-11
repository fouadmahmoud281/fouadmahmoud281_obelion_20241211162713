const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const dataExchangeRoutes = require('./routes/dataExchangeRoutes');
const orderBookRoutes = require('./routes/orderBookRoutes');
const validationRoutes = require('./routes/validationRoutes');

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: 'db',
  user: 'agent',
  password: 'agentpass',
  database: 'Obelien AI',
  port: 8000
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database');
});

app.use('/api/data-exchange', dataExchangeRoutes);
app.use('/api/order-book', orderBookRoutes);
app.use('/api/validation', validationRoutes);

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});