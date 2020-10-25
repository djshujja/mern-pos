const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  qty:{
    type: Number,
    default: 0
  },
  unitPrice: {
    type: Number,
    default: 0
  }
});

module.exports = mongoose.model("Products", productSchema);
