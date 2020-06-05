const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
//mongoDB connection
const mongoose = require("mongoose");
const url = "mongodb://localhost:27017/onlineShopping";

// men demo product details
const menPro = require("./routes/ds/menMainProData");
// women demo product details
const womenPro = require("./routes/ds/womenMainProData");
// kids demo product details
const kidPro = require("./routes/ds/kidMainProData");
// mobile demo product details
const mobilePro = require("./routes/ds/mobileMainProData");
// all women product details after user login
const shePro = require("./routes/mainDs/she");
// all kids product details after user login
const childPro = require("./routes/mainDs/kid");
// all men product details after user login
const malePro = require("./routes/mainDs/he");
// all mobile product details after user login
const mobPro = require("./routes/mainDs/mob");
//slide images main file for all users
const slidePro = require("./routes/ds/slideProData");
//login validation router file
// const loginVal = require("./routes/usersLog/loginCon&Check");
// const users = require("./routes/usersLog/users");
app = express();
// mongoose connection
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.on("open", () => {
  console.log("connected..");
});
app.use(express.json());
// giving access to all users how req to this server
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

//url for demo mens pro-details
app.use("/main/mens", menPro);
//url for demo womens pro-details
app.use("/main/womens", womenPro);
//url for demo kids pro-details
app.use("/main/kids", kidPro);
//url for demo mobiles pro-details
app.use("/main/mobiles", mobilePro);
//url for main womens pro-details after user login
app.use("/she/cloths/details", shePro);
//url for main kids pro-details after user login
app.use("/child/cloths/details", childPro);
//url for main mens pro-details after user login
app.use("/he/cloths/details", malePro);
//url for main mobiles pro-details after user login
app.use("/mob/shop/data", mobPro);
//url for slide images
app.use("/slide/img/pro", slidePro);
//url for login validation
// app.use("/login", loginVal);
// app.use("api/users", users);
app.use("/", require("./routes/usersLog/users"));
app.get("/", (req, res) => {
  res.end("welcome");
});
app.listen(2424, () => {
  console.log("server is runnig at 2424");
});
