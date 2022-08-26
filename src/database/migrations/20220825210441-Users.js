'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
  await queryInterface.createTable('Users', {
    id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
    displayName: {
      type: Sequelize.STRING(255),
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING(255),
      allowNull: false,
    },
    password: {
      type: Sequelize.STRING(255),
      allowNull: false,
    },
    image: {
      type: Sequelize.STRING(255),
      allowNull: false,
    },
  }
);
     
  },

  down: async (queryInterface, Sequelize) => {
  await queryInterface.dropTable('users');
  }
};
