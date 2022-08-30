const { BlogPost, PostCategory, Category, sequelize } = require('../src/database/models');

const validCategory = async (categoryIds) => {
  const { rows } = await Category.findAndCountAll({
    where: {
      id: categoryIds,
    },
  });

  if (rows.length !== categoryIds.length) {
    return { message: '"categoryIds" not found' };
  }

  return true;
};

const create = async (postInfo, userId) => {
  const { title, content } = postInfo;
  const t = await sequelize.transaction(async (transaction) => {
    const createdPost = await BlogPost.create(
      { title, content, userId },
      { transaction },
    );
    const postId = createdPost.dataValues.id;
    const postCategories = postInfo.categoryIds.map((categoryId) => ({ postId, categoryId }));
    await PostCategory.bulkCreate(
      postCategories,
      { transaction },
    );

    return createdPost;
  });

  return t;
};

module.exports = {
  create,
  validCategory,
}; 