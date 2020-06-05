// const express = require("express");
// const router = express.Router();
// //mongoDB connection
// const MongoClient = require("mongodb").MongoClient;
// const url = "mongodb://localhost:27017";
// const dataBase = "DotStore";
// const logInfo = "loginDetails";
// // making a post request
// router.post("/", (req, res) => {
//   const data = { msg: "Invalid" };
//   //connection to db
//   MongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {
//     const db = client.db(dataBase);
//     const collection = db.collection(logInfo);
//     //finding the user details
//     collection.find(req.body).toArray((err, details) => {
//       if (details.length) {
//         data.msg = "Valid";
//       } else {
//         return data.msg;
//       }
//       console.log(data);
//       data = JSON.stringify(data);
//       console.log(data);
//       res.send(data);
//       client.close();
//     });
//   });
// });
// module.exports = router;
