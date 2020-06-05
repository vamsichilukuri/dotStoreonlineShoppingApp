const mongoose = require("mongoose");
const WomensSchema = new mongoose.Schema({
  price: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("womens", WomensSchema);
