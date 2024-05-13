const { Sequelize, DataTypes } = require('sequelize');
const { expect } = require('chai');

// Initialize Sequelize with test database connection
const sequelize = new Sequelize('database', 'username', 'password', {
  dialect: 'mysql', // Change to match your database type
  logging: false,   // Disable logging for cleaner test output
});

// Define and run migration for food_category table
const migration = require('../path/to/your/migration_file');

describe('Migration Tests', () => {
  before(async () => {
    // Apply migration to create food_category table
    await migration.up(sequelize.getQueryInterface(), Sequelize);
  });

  after(async () => {
    // Rollback migration by dropping food_category table
    await migration.down(sequelize.getQueryInterface(), Sequelize);
    await sequelize.close(); // Close Sequelize connection after tests
  });

  it('should create food_category table', async () => {
    const FoodCategory = sequelize.define('food_category', {
      // Define model to interact with food_category table
      foocat_name: DataTypes.STRING,
      foocat_code: DataTypes.STRING,
      foocat_description: DataTypes.TEXT,
    });

    // Sync model to create table in database (should match migrated table structure)
    await FoodCategory.sync();

    // Query database to check if food_category table exists
    const tableExists = await sequelize.getQueryInterface().showAllTables();
    expect(tableExists).to.include('food_category');
  });
});
