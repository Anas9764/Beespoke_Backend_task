const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  product_id: String,
  product_category: String,
  rank: Number,
  brand_name: String,
  product_description: String,
  price: Number,
  image_link: String,
});

const Product = mongoose.model('catalog', productSchema);

module.exports = Product;
