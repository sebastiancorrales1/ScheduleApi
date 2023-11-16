const { AreasSchema, Areas } = require('./areas.model');
const { UserSchema, User } = require('./user.model')
const { Schedules, SchedulesSchema } = require('./schedule.model')
const { ScheduleUsers, ScheduleUsersSchema } = require('./schedule_users.model')
function setupModels(sequelize) {
    User.init(UserSchema, User.config(sequelize));
    Areas.init(AreasSchema, Areas.config(sequelize));
    Schedules.init(SchedulesSchema, Schedules.config(sequelize))
    ScheduleUsers.init(ScheduleUsersSchema, ScheduleUsers.config(sequelize))
    User.associate(sequelize.models)
    Areas.associate(sequelize.models)
    Schedules.associate(sequelize.models)
    ScheduleUsers.associate(sequelize.models)
}
module.exports = setupModels