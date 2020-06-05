var express = require("express");
var router = express.Router();
const Kids = require("../../models/kidsDemoSchema");

router.get("/", async (req, res) => {
  try {
    const kids = await Kids.find();
    res.json(kids);
  } catch (error) {
    res.status(500).send("Errror while connection to collection" + error);
  }
  router.post("/", async (req, res) => {
    const kid = new Kids({
      price: req.body.price,
      image: req.body.image,
    });
    try {
      const k1 = await kid.save();
      res.json(k1);
    } catch (error) {
      res.status(500).send("Error While Connecting to the collection " + error);
    }
  });
});

module.exports = router;
