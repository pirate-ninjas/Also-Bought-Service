const mongoose = require('mongoose');

const db = mongoose.connect('mongodb://localhost/fec');

module.exports = db;
