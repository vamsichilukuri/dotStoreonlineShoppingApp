const mongoose = require("mongoose");

const MensSchema = new mongoose.Schema({
  price: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("mensDemo", MensSchema);
