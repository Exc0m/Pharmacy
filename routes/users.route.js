const { Router } = require("express");
const { usersController } = require("../controllers/users.controller");

const router = Router();

router.post("/", usersController.addUser);
router.get("/", usersController.getAllUsers);
router.patch("/:id", usersController.updateUser);
router.delete("/:id", usersController.deleteUser);
router.patch("/:id/money/:money", usersController.upMoney)

module.exports = router;
