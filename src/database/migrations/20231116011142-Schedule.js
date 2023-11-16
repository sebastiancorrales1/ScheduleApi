'use strict';
const { TABLE_NAME } = require('../models/schedule.model')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(TABLE_NAME, {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
      },
      start_date: {
        type: Sequelize.DataTypes.DATEONLY,
        allowNull: false,
      },
      end_date: {
        type: Sequelize.DataTypes.DATEONLY,
        allowNull: false,
      },
      start_time: {
        type: Sequelize.DataTypes.TIME,
        allowNull: false
      },
      end_time: {
        type: Sequelize.DataTypes.TIME,
        allowNull: false
      },
      place: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
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
