const { Category } = require('../src/database/models');

const create = async (name) => {
    const validCategory = await Category.findAll({ where: { name } });
    if (validCategory.length > 0) {
      return { message: 'Category already registered' };
    }
    const { dataValues } = await Category.create({ name });
    return dataValues;
  };

  const getAll = async () => {
    const categories = await Category.findAll();
    return categories;
  };
  
  module.exports = {
    create,
    getAll,
  }; 