const NCA = require('../models/NCA');

exports.initiateDataExchange = async (req, res) => {
  try {
    const { frequency, scope } = req.body;

    if (!frequency || !scope) {
      return res.status(400).json({ error: 'Frequency and scope are required.' });
    }

    const newExchange = await NCA.create({ frequency, scope });

    return res.status(201).json(newExchange);
  } catch (error) {
    console.error('Error initiating data exchange:', error);
    return res.status(500).json({ error: 'Internal server error.' });
  }
};

exports.getDataExchanges = async (req, res) => {
  try {
    const exchanges = await NCA.findAll();
    return res.status(200).json(exchanges);
  } catch (error) {
    console.error('Error fetching data exchanges:', error);
    return res.status(500).json({ error: 'Internal server error.' });
  }
};

exports.updateDataExchange = async (req, res) => {
  try {
    const { id } = req.params;
    const { frequency, scope } = req.body;

    const exchange = await NCA.findByPk(id);

    if (!exchange) {
      return res.status(404).json({ error: 'Data exchange not found.' });
    }

    exchange.frequency = frequency || exchange.frequency;
    exchange.scope = scope || exchange.scope;
    await exchange.save();

    return res.status(200).json(exchange);
  } catch (error) {
    console.error('Error updating data exchange:', error);
    return res.status(500).json({ error: 'Internal server error.' });
  }
};

exports.deleteDataExchange = async (req, res) => {
  try {
    const { id } = req.params;

    const exchange = await NCA.findByPk(id);

    if (!exchange) {
      return res.status(404).json({ error: 'Data exchange not found.' });
    }

    await exchange.destroy();

    return res.status(204).json();
  } catch (error) {
    console.error('Error deleting data exchange:', error);
    return res.status(500).json({ error: 'Internal server error.' });
  }
};
