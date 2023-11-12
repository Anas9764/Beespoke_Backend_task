const Product = require('../models/productModel');

const productController = {};

productController.productSearch = async (req, res) => {
  try {
    const { keyword, price_min, price_max } = req.query;

    // Build the query based on keyword, price_min, and price_max
    const query = {
      $or: [
        { product_description: new RegExp(keyword, 'i') },
        { brand_name: new RegExp(keyword, 'i') },
      ],
    };
    if (price_min && price_max) {
      query.price = { $gte: parseFloat(price_min), $lte: parseFloat(price_max) };
    }

    // Apply the query and sort by rank
    const products = await Product.find(query).sort({ rank: 1 }).limit(10);

    res.status(200).json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = productController;
