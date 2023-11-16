const { models } = require('../libs/sequelize')
const { Op } = require('sequelize')
class AttendanceService {
    constructor() {
        this.model = models.ScheduleUsers
    }
    async getAll(schedule_id, user_id, start_date, end_date) {
        let values = {}
        let value_schedules = {}
        if (user_id) values.user_id = user_id
        if (schedule_id) values.schedule_id = schedule_id
        if (start_date && end_date) value_schedules.start_date = { [Op.gte]: start_date }
        if (start_date && end_date) value_schedules.end_date = { [Op.lte]: end_date }
        console.log(values)

        const attendance = await this.model.findAll(
            {
                where: values,
                include: [
                    { as: "schedules", model: models.Schedules, where: value_schedules },
                    { as: "users", model: models.User }
                ]
            }
        )

        return attendance;
    }
    async create(schedule_id, user_id) {

        const values = {
            schedule_id, user_id
        }
        const schedule = await this.model.create(values)
        return schedule
    }
    async createAttendance(schedule_id, user_id) {

        const values = {
            schedule_id, user_id
        }
        const schedule = await this.model.create(values)
        return schedule
    }
    async findOne(id) {
        const schedule = await this.model.findByPk(id)
        return schedule
    }
    async update(id, values) {
        const schedule = await this.model.findOne(id)
        if (!schedule) return null
        const scheduleUpdate = schedule.update(values)
        return scheduleUpdate
    }
}

module.exports = AttendanceService