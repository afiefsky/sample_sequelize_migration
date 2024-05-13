import { expect } from 'chai'; // Use require syntax for CommonJS Modules
import { Sequelize, DataTypes } from 'sequelize';

// Initialize Sequelize with test database connection
const sequelize = new Sequelize('testdb', 'root', 'Fore1234', {
  dialect: 'mysql', // Change to match your database type
  logging: false,   // Disable logging for cleaner test output
});

// Define and run migration for food_category table
import { up, down } from '../migrations/20240513034100-create_table_food_category';

describe('Migration Tests', () => {
  before(async () => {
    // Apply migration to create food_category table
    await up(sequelize.getQueryInterface(), Sequelize);
  });

  after(async () => {
    // Rollback migration by dropping food_category table
    await down(sequelize.getQueryInterface(), Sequelize);
    await sequelize.close(); // Close Sequelize connection after tests
  });

  it('should create food_category table', async () => {
    const FoodCategory = sequelize.define('food_category', {
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
