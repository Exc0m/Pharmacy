const Category = require("../models/Category.model");

module.exports.categoryController = {
  getCategories: async (req, res) => {
    try {
      const categories = await Category.find();
      returnres.json(categories);
    } catch (error) {
      res.json({ error: "Ошибка запроса" });
    }
  },
  addCategory: async (req, res) => {
    try {
      const category = await Category.create({
        name: req.body.name,
      });
      returnres.json({ message: "Категори создана", category });
    } catch (error) {
      res.json({ error: "Ошибка запроса" });
    }
  },
  updateCategory: async (req, res) => {
    try {
      const category = await Category.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
      });
      returnres.json({ message: "Категори изменена", category });
    } catch (error) {
      res.json({ error: "Ошибка запроса" });
    }
  },
  deleteCategory: async (req, res) => {
    try {
      const category = await Category.findByIdAndRemove(req.params.id);
      returnres.json({ message: "Категори удалена", category });
    } catch (error) {
      res.json({ error: "Ошибка запроса" });
    }
  },
};
