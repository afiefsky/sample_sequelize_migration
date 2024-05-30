'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('cars', [
      {
        car_make: 'Toyota',
        car_model: 'Camry',
        car_year: 2020,
        car_createdAt: new Date(),
        car_updatedAt: new Date()
      },
      {
        car_make: 'Honda',
        car_model: 'Civic',
        car_year: 2019,
        car_createdAt: new Date(),
        car_updatedAt: new Date()
      },
      {
        car_make: 'Ford',
        car_model: 'Mustang',
        car_year: 2018,
        car_createdAt: new Date(),
        car_updatedAt: new Date()
      },
      {
        car_make: 'Chevrolet',
        car_model: 'Impala',
        car_year: 2017,
        car_createdAt: new Date(),
        car_updatedAt: new Date()
      },
      {
        car_make: 'Nissan',
        car_model: 'Altima',
        car_year: 2021,
        car_createdAt: new Date(),
        car_updatedAt: new Date()
      },
      {
        car_make: 'BMW',
        car_model: 'X5',
        car_year: 2022,
        car_createdAt: new Date(),
        car_updatedAt: new Date()
      },
      {
        car_make: 'Audi',
        car_model: 'A4',
        car_year: 2020,
        car_createdAt: new Date(),
        car_updatedAt: new Date()
      },
      {
        car_make: 'Mercedes-Benz',
        car_model: 'C-Class',
        car_year: 2019,
        car_createdAt: new Date(),
        car_updatedAt: new Date()
      },
      {
        car_make: 'Tesla',
        car_model: 'Model 3',
        car_year: 2021,
        car_createdAt: new Date(),
        car_updatedAt: new Date()
      },
      {
        car_make: 'Volkswagen',
        car_model: 'Passat',
        car_year: 2018,
        car_createdAt: new Date(),
        car_updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('cars', null, {});
  }
};
