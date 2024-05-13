'use strict';

const { DataTypes } = require('sequelize');

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('food_category', {
            foocat_id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            foocat_code: {
                type: DataTypes.STRING(50),
                allowNull: false
            },
            foocat_name: {
                type: DataTypes.STRING(255),
                allowNull: false
            },
            foocat_description: {
                type: DataTypes.TEXT,
                allowNull: true
            },
            foocat_created_date: {
                type: DataTypes.DATE,
                allowNull: false,
                defaultValue: Sequelize.fn('NOW')
            },
            foocat_updated_date: {
                type: DataTypes.DATE,
                allowNull: true,
                defaultValue: null
            }
        }, {
            freezeTableName: true,
            engine: 'InnoDB',
            charset: 'utf8'
        });

        // Add index on foocat_code and foocat_name for quick lookups
        await queryInterface.addIndex('food_category', ['foocat_code']);
        await queryInterface.addIndex('food_category', ['foocat_name']);
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('food_category');
    }
};
