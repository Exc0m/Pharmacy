const { Router } = require("express");
const { medicamentsController } = require("../controllers/medicaments.controller");

const router = Router();

router.post("/admin/add", medicamentsController.addMedicament); // Добавление лекарства админом
router.get("/", medicamentsController.getAllMedicament); // Вывод всех лекарств
router.get("/category/:id", medicamentsController.getMedicamentByCategory); // Вывод лекарств по категории
router.get("/id", medicamentsController.getMedicament); // Вывод лекарства по ID
router.patch("/admin/:id", medicamentsController.patchMedicament); // Изменение лекарства
router.delete("/admin/:id", medicamentsController.deleteMedicament); // Удаление лекарства

module.exports = router;
