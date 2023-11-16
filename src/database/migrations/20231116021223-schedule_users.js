'use strict';
const { TABLE_NAME } = require('../models/schedule_users.model')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(TABLE_NAME, {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      user_id: {
        field: 'user_id',
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: 'areas',
          key: 'id'
        }
      },
      schedule_id: {
        field: 'schedule_id',
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: 'areas',
          key: 'id'
        }
      },
      status: {
        type: Sequelize.DataTypes.BOOLEAN,
        defaultValue: false
      }
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable(TABLE_NAME)
  }
};
