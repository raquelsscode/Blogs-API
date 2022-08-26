module.exports = (sequelize, DataTypes) => {
 const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
        displayName: {
          type: DataTypes.STRING(255),
          allowNull: false,
        },
        email: {
          type: DataTypes.STRING(255),
          allowNull: false,
        },
        password: {
          type: DataTypes.STRING(255),
          allowNull: false,
        },
        image: {
          type: DataTypes.STRING(255),
          allowNull: false,
        }},
        {
        timestamps: false,
        tableName: 'Users',
        });

    User.associate = (models) => {
        User.hasMany(models.BlogPost, {
            foreignKey: 'userId',
            as: 'blogPosts',
        });
    }

    return User;
}