const express = require("express");
const User = require("../models/user.model");

const router = express.Router();

router.route("/").get((req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const userName = req.body.userName;

  console.log(req.body.userName);

  const newUser = new User({ userName });
  console.log(newUser);

  newUser
    .save()
    .then((users) => res.json("User added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
