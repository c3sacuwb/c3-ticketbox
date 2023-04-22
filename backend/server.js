const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const DataItem = require('./dataItem'); // Import the DataItem model
const axios = require('axios');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApi: {
      version: '1',
      strict: true,
      deprecationErrors: true,
    },
  });
  

app.get('/data', async (req, res) => {
  try {
    const data = await DataItem.find();
    res.json(data);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.post('/data', async (req, res) => {
  const newData = new DataItem(req.body);
  try {
    await newData.save();
    res.status(201).send(newData);
  } catch (error) {
    res.status(400).send(error);
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// Enable CORS on the server
axios.defaults.baseURL = 'http://localhost:5000';
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
