var express = require("express");
var router = express.Router();
const Mens = require("../../models/mensSchema");

router.get("/", async (req, res) => {
  try {
    const men = await Mens.find();
    res.json(men);
  } catch (error) {
    res.status(500).send("Error while connection to the collection" + error);
  }
});
router.post("/", async (req, res) => {
  const men = new Mens({
    price: req.body.price,
    image: req.body.image,
  });
  try {
    const m1 = await men.save();
    res.json(m1);
  } catch (error) {
    res.status(500).send("Error while connection to the collection" + error);
  }
});
module.exports = router;
