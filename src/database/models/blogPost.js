module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    content: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      foreingKey: true,
      references: { model: 'Users', key: 'id' },
    },
    published: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updated: {
      allowNull: false,
      type: DataTypes.DATE
    }},
    {
        updatedAt: false,
        underscored: true,
        tableName: 'BlogPosts',
    });
 
     BlogPost.associate = (models) => {
         BlogPost.belongsTo(models.User, {
             foreignKey: 'userId',
             as: 'user',
         }),
    BlogPost.hasMany(models.PostCategorie, {
      foreignKey: 'postId',
      as: 'post',
    });
  }
 
     return BlogPost;
 };