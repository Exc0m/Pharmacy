const mongoose = require("mongoose");

const medicamentSchema = mongoose.Schema({
  name: String,
  price: Number,
  needRecipe: Boolean,
});

const Medicament = mongoose.model("Medicament", medicamentSchema);

module.exports = Medicament;
