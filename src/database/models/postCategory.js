module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {
    postId: {
      primaryKey: true,
      foreignKey: true,
      type: DataTypes.INTEGER,
    },
    categoryId: {
      primaryKey: true,
      foreignKey: true,
      type: DataTypes.INTEGER,
    }},
    {
        updatedAt: false,
        underscored: true,
        tableName: 'PostCategories',
    });
 
    PostCategory.associate = (models) => {
      models.Category.belongsToMany(models.BlogPost, {
        through: PostCategory,
        as: 'category',
        foreignKey: 'categoryId',
        otherKey: 'postId',
      }),
      models.BlogPost.belongsToMany(models.Category, {
        through: PostCategory,
        as: 'post',
        foreignKey: 'postId',
        otherKey: 'categoryId',
      });
    }
 
     return PostCategory;
 };