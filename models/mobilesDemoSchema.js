const mongoose = require("mongoose");
const MobilesSchema = mongoose.Schema({
  price: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("mobilesDemo", MobilesSchema);
