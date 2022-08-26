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
    },},
    {     timestamps: false,
          tableName: 'Categories',
      });
   
       return Category;
};