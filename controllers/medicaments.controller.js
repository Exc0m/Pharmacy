const Medicament = require("../models/Medicament.model");

module.exports.medicamentsController = {
  addMedicament: async (req, res) => {
    try {
      const { name, price, needRecipe, category } = req.body;
      await Medicament.create({
        name: name,
        price: price,
        needRecipe: needRecipe,
        category: category,
      });

      return res.json("Лекарство добавлено");
    } catch (e) {
      return res.json(`Не удалось добавить лекарство ${e}`);
    }
  },
  getAllMedicament: async (req, res) => {
    try {
      const medicament = await Medicament.find();

      return res.json(medicament);
    } catch (e) {
      return res.json(`Не удалось вывести все лекарства ${e}`);
    }
  },
  getMedicament: async (req, res) => {
    try {
      const medicament = await Medicament.findById(req.params.id);

      return res.json(medicament);
    } catch (e) {
      return res.json(`Не удалось вывести лекарство ${e}`);
    }
  },
  patchMedicament: async (req, res) => {
    try {
      const { name, price, needRecipe, category } = req.body;
      await Medicament.findByIdAndUpdate(req.params.id, {
        name: name,
        price: price,
        needRecipe: needRecipe,
        category: category,
      });

      return res.json(`Лекарство с ID ${req.params.id} изменено`);
    } catch (e) {
      return res.json(`Не удалось изменить лекарство ${e}`);
    }
  },
  deleteMedicament: async (req, res) => {
    try {
      await Medicament.findByIdAndRemove(req.params.id);

      return res.json(`Лекарство с ID ${req.params.id} удалено`);
    } catch (e) {
      return res.json(`Не удалось удалить лекарство ${e}`);
    }
  },
};
