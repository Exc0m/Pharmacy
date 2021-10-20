const Cart = require("../models/Cart.model")
const User = require("../models/User.model")
const Medicament = require("../models/Medicament.model")

module.exports.cartsController = {
  addToCart: async (req, res) => {
    try {
      const cart = await Cart.findOne({ user: req.params.userId })
      const medicament = await Medicament.findById(req.params.medicamentId)
      const user = await User.findById(req.params.userId)

      if (!cart) {
        await Cart.create({
          user: req.params.userId,
        })
      }
      if (medicament.needRecipe && !user.isRecipe) {
        return res.json("У вас нет рецепта")
      }

      await Cart.updateOne(
        { user: req.params.userId },
        { $push: { medicaments: req.params.medicamentId } }
      )
      cart.total += medicament.price

      await cart.save()

      res.json("Лекарство добавлено в корзину")
    } catch (e) {
      res.json(e)
    }
  },
  removeCartItem: async (req, res) => {
    try {
      const cart = await Cart.findOne({ user: req.params.userId })
      const medicament = await Medicament.findById(req.params.medicamentId)

      await Cart.updateOne(
        { user: req.params.userId },
        { $pull: { medicaments: req.params.medicamentId } }
      )
      cart.total -= medicament.price

      await cart.save()

      res.json("Лекарство удалено из корзины")
    } catch (e) {
      res.json(e)
    }
  },
  clearCart: async (req, res) => {
    try {
      const cart = await Cart.findOne({ user: req.params.userId })

      await Cart.updateOne({ user: req.params.userId }, { medicaments: [] })
      cart.total = 0

      await cart.save()

      res.json("Корзина очищена")
    } catch (e) {
      res.json(e)
    }
  },
  paymentCart: async (req, res) => {
    try {
      const cart = await Cart.findOne({ user: req.params.userId })
      const user = await User.findById(req.params.userId)

      if (user.money < cart.total) {
        return res.json("У вас не хватает денег")
      }

      await Cart.updateOne({ user: req.params.userId }, { medicaments: [] })

      user.money -= cart.total
      cart.total = 0

      await user.save()
      await cart.save()

      res.json("Покупка выполнена")
    } catch (e) {
      res.json(e)
    }
  },
}
