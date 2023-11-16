const { models } = require('../libs/sequelize')

class ScheduleService {
    constructor() {
        this.model = models.Schedules
    }
    async getAll() {
        const schedules = await this.model.findAll()
        return schedules;
    }
    async create(name, start_date, end_date, start_time, end_time, place, status) {

        const values = {
             name, start_date, end_date, start_time, end_time, place, status
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

module.exports = ScheduleService