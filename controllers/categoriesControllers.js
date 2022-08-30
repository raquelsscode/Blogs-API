const categoriesServices = require('../services/categoriesServices');

const categories = async (req, res) => {
  try {
    const { name } = req.body;

    const newCategory = await categoriesServices.create(name);

    if (newCategory.message) {
      return res.status(409).json(newCategory);
    }

    return res.status(201).json(newCategory);
  } catch (err) {
    return res.status(500).json({ message: 'Server Error', error: err.message });
  }
};

const getAll = async (_req, res) => {
    try {
      const category = await categoriesServices.getAll(); 
      return res.status(200).json(category);
    } catch (err) {
      return res.status(500).json({ message: 'Server Error', error: err.message });
    }
  };

module.exports = {
  categories,
  getAll,
}; 