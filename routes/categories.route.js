const { Router } = require("express");
const { categoryController } = require("../controllers/categories.controller");

const router = Router();

router.get("/", categoryController.getCategories);
router.post("/admin/add", categoryController.addCategory);
router.patch("/admin/edit", categoryController.updateCategory);
router.delete("/admin/delete", categoryController.deleteCategory);

module.exports = router;
