const mongoose = require("mongoose")

const cartSchema = mongoose.Schema({
  user: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
  },
  medicaments: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Medicament",
    },
  ],
  total: {
    type: Number,
    default: 0,
  },
})

const Cart = mongoose.model("Cart", cartSchema)

module.exports = Cart
