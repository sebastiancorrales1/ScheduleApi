const { Model, DataTypes } = require('sequelize')

const TABLE_NAME = 'schedule_users'

const ScheduleUsersSchema = {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    user_id: {
        field: 'user_id',
        type: DataTypes.INTEGER,
        references: {
            model: 'areas',
            key: 'id'
        }
    },
    schedule_id: {
        field: 'schedule_id',
        type: DataTypes.INTEGER,
        references: {
            model: 'areas',
            key: 'id'
        }
    },
    status: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
}

class ScheduleUsers extends Model {
    static associate(models) {
        this.belongsTo(models.Schedules, { as: 'schedules', foreignKey: 'schedule_id' })
        this.belongsTo(models.User, { as: 'users', foreignKey: 'user_id' })
    }
    static config(sequelize) {
        return { sequelize, tableName: TABLE_NAME, modelName: 'ScheduleUsers', timestamps: false }
    }
}

module.exports = { TABLE_NAME, ScheduleUsersSchema, ScheduleUsers }