const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: String,
  money: {
    type: Number,
    default: 100,
  },
  isRecipe: {
    type: Boolean,
    default: false,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
