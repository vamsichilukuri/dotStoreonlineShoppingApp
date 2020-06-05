var express = require("express");
var router = express.Router();
const Womens = require("../../models/womensSchema");
router.get("/", async (req, res) => {
  try {
    const women = await Womens.find();
    res.json(women);
  } catch (error) {
    res.status(500).send("Error while connecting to the collection " + error);
  }
});
router.post("/", async (req, res) => {
  const women = new Womens({
    price: req.body.price,
    image: req.body.image,
  });
  try {
    const w1 = await women.save();
    res.json(w1);
  } catch (error) {
    res.status(500).send("Error while posting to the collection " + error);
  }
});
module.exports = router;
