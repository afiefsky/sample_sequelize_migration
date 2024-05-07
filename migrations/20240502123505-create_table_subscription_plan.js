'use strict';

import { DataTypes } from 'sequelize'; // Importing Sequelize DataTypes for defining column types

export const up = async (queryInterface, Sequelize) => {
    await queryInterface.createTable('netflix_plan', {
        np_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        country_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        np_title_id: {
            type: DataTypes.STRING(100),
            allowNull: true
        },
        np_title_en: {
            type: DataTypes.STRING(100),
            allowNull: true
        },
        np_header_id: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        np_header_en: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        np_footer_id: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        np_footer_en: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        np_desc_id: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        np_desc_en: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        np_tnc_id: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        np_tnc_en: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        np_price: {
            type: DataTypes.DECIMAL(15, 3),
            allowNull: false
        },
        np_discount: {
            type: DataTypes.DECIMAL(15, 3),
            allowNull: false,
            defaultValue: 0
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

    await queryInterface.addIndex('netflix_plan', ['country_id']);
};

export const down = async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('netflix_plan');
};
