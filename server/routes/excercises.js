const express = require("express");
const Excercise = require("../models/excercise.model");

const router = express.Router();

router.route("/").get((req, res) => {
  Excercise.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const username = req.body.username;
  const description = req.body.description;
  const duration = req.body.duration;
  const date = Date.parse(req.body.date);

  console.log(req.body.username);

  const newExcercise = new Excercise({ username, description, duration, date });
  console.log(newExcercise);

  newExcercise
    .save()
    .then((users) => res.json("User added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  Excercise.findById(req.params.id)
    .then((excercise) => {
      if (!excercise) {
        res.status(404).json("user not found with this is id " + req.params.id);
      } else {
        res.json(excercise);
      }
    })
    .catch((err) => res.status(500).json("Error " + err));
});

router.route("/:id").delete((req, res) => {
  Excercise.findByIdAndDelete(req.params.id)
    .then((excercise) => res.json("Excercise Deleted"))
    .catch((err) => res.status(404).json("Error " + err));
});

router.route("/update/:id").post((req, res) => {
  Excercise.findById(req.params.id).then((excercise) => {
    (excercise.username = req.body.username),
      (excercise.description = req.body.description),
      (excercise.duration = Number(req.body.duration)),
      (excercise.date = Date.parse(req.body.date)),
      excercise
        .save()
        .then(() => res.json("Excercise Updated Successfully"))
        .catch((err) => res.status(404).json("Error " + err));
  });
});

module.exports = router;
