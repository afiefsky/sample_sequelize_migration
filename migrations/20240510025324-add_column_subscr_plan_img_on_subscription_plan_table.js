'use strict';

const { DataTypes } = require('sequelize');

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.addColumn('netflix_plan', 'np_img', {
            type: DataTypes.TEXT,
            allowNull: true,
            after: 'np_tnc_en'  // Place the column after np_tnc_en
        });
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.removeColumn('netflix_plan', 'np_img');
    }
};
