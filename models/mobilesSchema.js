const mongoose = require("mongoose");
const MobileSchema = mongoose.Schema({
  price: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("mobiles", MobileSchema);
