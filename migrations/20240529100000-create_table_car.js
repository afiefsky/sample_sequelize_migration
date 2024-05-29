'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('cars', {  // Table name is 'cars'
      car_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      car_make: {
        type: Sequelize.STRING,
        allowNull: false
      },
      car_model: {
        type: Sequelize.STRING,
        allowNull: false
      },
      car_year: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      car_createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      car_updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('cars');  // Ensure the correct table name is used here
  }
};
