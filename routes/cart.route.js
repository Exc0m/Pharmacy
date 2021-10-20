const { Router } = require("express")
const { cartsController } = require("../controllers/cart.controller")

const router = Router()

router.post(
  "/user/:userId/medicament/:medicamentId/add",
  cartsController.addToCart
)
router.patch(
  "/user/:userId/medicament/:medicamentId/remove",
  cartsController.removeCartItem
)
router.patch("/user/:userId/clean", cartsController.clearCart)
router.patch("/user/:userId/payment", cartsController.paymentCart)

module.exports = router
