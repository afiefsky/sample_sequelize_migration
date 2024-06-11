'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('netflix_plan', [
      {
        country_id: 1,
        np_title_id: 'Paket Dasar',
        np_title_en: 'Basic Plan',
        np_header_id: 'Dasar Header',
        np_header_en: 'Unlimited movies, TV shows, and more. Watch anywhere. Cancel anytime.',
        np_footer_id: 'Dasar Footer',
        np_footer_en: 'Terms and conditions apply.',
        np_desc_id: 'Dasar Description',
        np_desc_en: 'This plan allows you to watch on one screen at a time in standard definition. Download videos on one phone or tablet.',
        np_tnc_id: 'Dasar TNC',
        np_tnc_en: 'No contract, cancel anytime.',
        np_img: 'basic_plan.jpg',
        np_price: 9.990,
        np_discount: 0.000,
        created_by: 1,
        created_date: new Date(),
        updated_by: null,
        updated_date: null
      },
      {
        country_id: 1,
        np_title_id: 'Paket Standar',
        np_title_en: 'Standard Plan',
        np_header_id: 'Standar Header',
        np_header_en: 'Everything on Netflix for one low price.',
        np_footer_id: 'Standar Footer',
        np_footer_en: 'Terms and conditions apply.',
        np_desc_id: 'Standar Description',
        np_desc_en: 'This plan allows you to watch on two screens at a time in high definition. Download videos on two phones or tablets.',
        np_tnc_id: 'Standar TNC',
        np_tnc_en: 'No contract, cancel anytime.',
        np_img: 'standard_plan.jpg',
        np_price: 13.990,
        np_discount: 0.000,
        created_by: 2,
        created_date: new Date(),
        updated_by: null,
        updated_date: null
      },
      {
        country_id: 1,
        np_title_id: 'Paket Premium',
        np_title_en: 'Premium Plan',
        np_header_id: 'Premium Header',
        np_header_en: 'Best for families: Watch on four screens.',
        np_footer_id: 'Premium Footer',
        np_footer_en: 'Terms and conditions apply.',
        np_desc_id: 'Premium Description',
        np_desc_en: 'This plan allows you to watch on four screens at a time in ultra high definition. Download videos on four phones or tablets.',
        np_tnc_id: 'Premium TNC',
        np_tnc_en: 'No contract, cancel anytime.',
        np_img: 'premium_plan.jpg',
        np_price: 17.990,
        np_discount: 0.000,
        created_by: 3,
        created_date: new Date(),
        updated_by: null,
        updated_date: null
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('netflix_plan', {
      np_title_id: [
        'Paket Dasar',
        'Paket Standar',
        'Paket Premium'
      ]
    });
  }
};
