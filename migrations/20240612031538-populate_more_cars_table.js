'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('cars', [
      {
        car_make: 'Mazda',
        car_model: 'CX-5',
        car_year: 2019,
        car_createdAt: new Date(),
        car_updatedAt: new Date()
      },
      {
        car_make: 'Hyundai',
        car_model: 'Elantra',
        car_year: 2020,
        car_createdAt: new Date(),
        car_updatedAt: new Date()
      },
      {
        car_make: 'Kia',
        car_model: 'Sorento',
        car_year: 2021,
        car_createdAt: new Date(),
        car_updatedAt: new Date()
      },
      {
        car_make: 'Subaru',
        car_model: 'Outback',
        car_year: 2018,
        car_createdAt: new Date(),
        car_updatedAt: new Date()
      },
      {
        car_make: 'Volvo',
        car_model: 'XC60',
        car_year: 2022,
        car_createdAt: new Date(),
        car_updatedAt: new Date()
      },
      {
        car_make: 'Lexus',
        car_model: 'RX 350',
        car_year: 2020,
        car_createdAt: new Date(),
        car_updatedAt: new Date()
      },
      {
        car_make: 'Jaguar',
        car_model: 'F-Pace',
        car_year: 2019,
        car_createdAt: new Date(),
        car_updatedAt: new Date()
      },
      {
        car_make: 'Land Rover',
        car_model: 'Range Rover',
        car_year: 2021,
        car_createdAt: new Date(),
        car_updatedAt: new Date()
      },
      {
        car_make: 'Porsche',
        car_model: 'Cayenne',
        car_year: 2018,
        car_createdAt: new Date(),
        car_updatedAt: new Date()
      },
      {
        car_make: 'Jeep',
        car_model: 'Wrangler',
        car_year: 2022,
        car_createdAt: new Date(),
        car_updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('cars', null, {});
  }
};
