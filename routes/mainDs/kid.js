var express = require("express");
var router = express.Router();
const Kids = require("../../models/kidsSchema");

router.get("/", async (req, res) => {
  try {
    const kidsPro = await Kids.find();
    res.json(kidsPro);
  } catch {
    res.status(500).send("You Lost");
  }
});
router.post("/", async (req, res) => {
  const kid = new Kids({
    price: req.body.price,
    image: req.body.image,
  });
  try {
    const k1 = await kid.save();
    res.json(k1);
  } catch (err) {
    res.status(500).send("Error while posting " + err);
  }
});
module.exports = router;
