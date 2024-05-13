'use strict';

const { DataTypes } = require('sequelize');

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('foods', {
            food_id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            food_name: {
                type: DataTypes.STRING(255),
                allowNull: false
            },
            food_image_url: {
                type: DataTypes.STRING(255),
                allowNull: true
            },
            food_description: {
                type: DataTypes.TEXT,
                allowNull: true
            },
            food_price: {
                type: DataTypes.DECIMAL(15, 3),
                allowNull: false
            },
            food_discount: {
                type: DataTypes.DECIMAL(15, 3),
                allowNull: false,
                defaultValue: 0
            },
            food_category: {
                type: DataTypes.STRING(100),
                allowNull: true
            },
            food_available: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: true
            },
            food_ingredients: {
                type: DataTypes.TEXT,
                allowNull: true
            },
            food_calories: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
            food_preparation_time: {
                type: DataTypes.INTEGER,
                allowNull: true // in minutes
            },
            created_by: {
                type: DataTypes.INTEGER,
                allowNull: false,
                defaultValue: 0
            },
            created_date: {
                type: DataTypes.DATE,
                allowNull: false,
                defaultValue: Sequelize.fn('NOW')
            },
            updated_by: {
                type: DataTypes.INTEGER,
                allowNull: true
            },
            updated_date: {
                type: DataTypes.DATE,
                allowNull: true,
                defaultValue: null
            }
        }, {
            freezeTableName: true,
            engine: 'InnoDB',
            charset: 'utf8'
        });

        await queryInterface.addIndex('foods', ['food_name']);
        await queryInterface.addIndex('foods', ['food_category']); // Index on category if needed
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('foods');
    }
};
