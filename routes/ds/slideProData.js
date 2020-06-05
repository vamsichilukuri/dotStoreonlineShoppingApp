var express = require("express");
var router = express.Router();
const SlideImgs = require("../../models/slideImagesSchema");
router.get("/", async (req, res) => {
  try {
    const image = await SlideImgs.find();
    res.send(image);
  } catch (error) {
    res.status(500).send("Eroor while connecting to the collection " + error);
  }
});
router.post("/", async (req, res) => {
  const image = new SlideImgs({
    img: req.body.img,
  });
  try {
    const img1 = await image.save();
    res.json(img1);
  } catch (error) {
    res.status(500).send("Eroor while connecting to the collection " + error);
  }
});
module.exports = router;
