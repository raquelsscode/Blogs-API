module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define('Category', {
      id: {
         type: DataTypes.INTEGER,
         allowNull: false,
         autoIncrement: true,
         primaryKey: true,
    },
      name: {
        allowNull: false,
        type: DataTypes.STRING(255),
    }},
      {
          updatedAt: false,
          underscored: true,
          tableName: 'Categories',
      });
   
       Category.associate = (models) => {
           Category.hasMany(models.PostCategory, {
               foreignKey: 'categoryId',
               as: 'category',
        });
    }
   
       return Category;
};