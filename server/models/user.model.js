const mongoose = require("mongoose");

let Schema = mongoose.Schema;
const userSchema = new Schema(
  {
    userName: {
      type: String,
      required: true,
      unique: true,
      minlength: 3,
      trim: true,
    },
  },
  {
    timeStamps: true,
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
