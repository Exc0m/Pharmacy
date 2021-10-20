const mongoose = require("mongoose");

const medicamentSchema = mongoose.Schema({
  name: String,
  price: Number,
  needRecipe: Boolean,
  category: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Category",
  },
});

const Medicament = mongoose.model("Medicament", medicamentSchema);

module.exports = Medicament;
