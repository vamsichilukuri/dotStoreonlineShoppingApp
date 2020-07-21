const express = require("express");
const router = express.Router();
const User = require("../../models/user");

//GET req to get all users details
router.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.log("ERROR" + error);
  }
});
//GET req to get users with guven id details
router.get("/users/:id", async (req, res) => {
  try {
    const users = await User.findById(req.params.id);
    res.json(users);
  } catch (error) {
    console.log("ERROR" + error);
  }
});
//POST req to post new user details
router.post("/users", async (req, res) => {
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });
  try {
    const u1 = await user.save();
    res.json(u1);
  } catch (error) {
    res.send("Error" + error);
  }
});
//user login with user name and password
router.post("/users/login", async (req, res) => {
  const data = {
    msg: "Invalid",
  };
  // console.log(req.body.name);
  const person = await User.find(req.body);
  if (person.length) {
    data.msg = "Valid";
    res.json(data);
  }
});
//PATCH req to update the user details
router.patch("/users/:id", async (req, res) => {
  const user = await User.findById(req.params.id);
  user.name = req.body.name;
  user.password = req.body.password;
  const u1 = await user.save();
  res.send(u1);
});
//DELETE req to delete the user form the db
router.delete("/users/:id", async (req, res) => {
  const user = await User.findByIdAndDelete(req.params.id);
  res.json(user);
  res.json({ msg: "Successfully Deleted" });
});
module.exports = router;
