const { Model, DataTypes } = require('sequelize')

const TABLE_NAME = 'schedules'

const SchedulesSchema = {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    start_date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    end_date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    start_time: {
        type: DataTypes.TIME,
        allowNull: false
    },
    end_time: {
        type: DataTypes.TIME,
        allowNull: false
    },
    place: {
        type: DataTypes.STRING,
        allowNull: false
    },
    status: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
}

class Schedules extends Model {
    static associate(models) {
        this.hasMany(models.ScheduleUsers, { as: 'schedule_users', foreignKey: 'schedule_id' });
    }
    static config(sequelize) {
        return { sequelize, tableName: TABLE_NAME, modelName: 'Schedules', timestamps: false }
    }
}

module.exports = { TABLE_NAME, SchedulesSchema, Schedules }