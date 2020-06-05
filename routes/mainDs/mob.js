var express = require("express");
var router = express.Router();
const Mobiles = require("../../models/mobilesSchema");
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
// var data = {
//   mainPro: [
//     {
//       price: 550,
//       image: "http://localhost:2424/images/mobiles/mobile1.JPEG",
//     },
//     {
//       price: 950,
//       image: "http://localhost:2424/images/mobiles/mobile2.JPEG",
//     },
//     {
//       price: 450,
//       image: "http://localhost:2424/images/mobiles/mobile3.JPEG",
//     },
//     {
//       price: 550,
//       image: "http://localhost:2424/images/mobiles/mobile4.JPEG",
//     },
//     {
//       price: 950,
//       image: "http://localhost:2424/images/mobiles/mobile5.JPEG",
//     },
//     {
//       price: 950,
//       image: "http://localhost:2424/images/mobiles/mobile6.JPEG",
//     },
//     {
//       price: 550,
//       image: "http://localhost:2424/images/mobiles/mobile1.JPEG",
//     },
//     {
//       price: 950,
//       image: "http://localhost:2424/images/mobiles/mobile2.JPEG",
//     },
//     {
//       price: 450,
//       image: "http://localhost:2424/images/mobiles/mobile3.JPEG",
//     },
//     {
//       price: 550,
//       image: "http://localhost:2424/images/mobiles/mobile4.JPEG",
//     },
//     {
//       price: 950,
//       image: "http://localhost:2424/images/mobiles/mobile5.JPEG",
//     },
//     {
//       price: 950,
//       image: "http://localhost:2424/images/mobiles/mobile6.JPEG",
//     },
//     {
//       price: 550,
//       image: "http://localhost:2424/images/mobiles/mobile1.JPEG",
//     },
//     {
//       price: 950,
//       image: "http://localhost:2424/images/mobiles/mobile2.JPEG",
//     },
//     {
//       price: 450,
//       image: "http://localhost:2424/images/mobiles/mobile3.JPEG",
//     },
//     {
//       price: 550,
//       image: "http://localhost:2424/images/mobiles/mobile4.JPEG",
//     },
//     {
//       price: 950,
//       image: "http://localhost:2424/images/mobiles/mobile5.JPEG",
//     },
//     {
//       price: 950,
//       image: "http://localhost:2424/images/mobiles/mobile6.JPEG",
//     },
//     {
//       price: 550,
//       image: "http://localhost:2424/images/mobiles/mobile1.JPEG",
//     },
//     {
//       price: 950,
//       image: "http://localhost:2424/images/mobiles/mobile2.JPEG",
//     },
//     {
//       price: 450,
//       image: "http://localhost:2424/images/mobiles/mobile3.JPEG",
//     },
//     {
//       price: 550,
//       image: "http://localhost:2424/images/mobiles/mobile4.JPEG",
//     },
//     {
//       price: 950,
//       image: "http://localhost:2424/images/mobiles/mobile5.JPEG",
//     },
//     {
//       price: 950,
//       image: "http://localhost:2424/images/mobiles/mobile6.JPEG",
//     },
//   ],
// };

// data = JSON.stringify(data);
// res.send(data);

module.exports = router;
