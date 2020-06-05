const mongoose = require("mongoose");
const SildeImgsSchema = mongoose.Schema({
  img: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("slideimages", SildeImgsSchema);
