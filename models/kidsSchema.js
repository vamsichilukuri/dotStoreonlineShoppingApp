const mongoose = require("mongoose");

const KidsSchema = new mongoose.Schema({
  price: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("kids", KidsSchema);
