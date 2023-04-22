const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
  label: String,
  value: Number,
});

module.exports = mongoose.model('DataItem', dataSchema);
