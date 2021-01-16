const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/alsobought', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.Promise = global.Promise;

const productSchema = new mongoose.Schema({
  itemNum: Number,
  name: String,
  brand: String,
  price: Number,
  colors: [String],
  description: String,
  img_url: String,
  category: String,
  rating: Number,
  reviews: Number,
  features: [String],
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
