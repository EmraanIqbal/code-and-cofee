const mongoose = require("mongoose");

let Schema = mongoose.Schema;

const excerciseSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    duration: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Excercise = mongoose.model("Excercise", excerciseSchema);

module.exports = Excercise;
