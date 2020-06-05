var express = require("express");
var router = express.Router();
const Mobiles = require("../../models/mobilesDemoSchema");
router.get("/", async (req, res) => {
  try {
    const mobile = await Mobiles.find();
    res.json(mobile);
  } catch (error) {
    res.status(500).send("Error while connecting to the collection " + error);
  }
});
router.post("/", async (req, res) => {
  const mobile = new Mobiles({
    price: req.body.price,
    image: req.body.image,
  });
  try {
    const m1 = await mobile.save();
    res.json(m1);
  } catch (error) {
    res.status(500).send("Error while connecting to the collection " + error);
  }
});
module.exports = router;
