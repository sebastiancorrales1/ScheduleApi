const ScheduleService = require('../services/schedule.service')
const AttendanceService = require('../services/attendance.service')


class ScheduleController {
    constructor() {
        this.service = new ScheduleService
        this.attendanceService = new AttendanceService
    }
    async index() {
        const schedules = await this.service.getAll()
        return schedules
    }
    async create(name, start_date, end_date, start_time, end_time, place, status) {
        const schedule = await this.service.create(name, start_date, end_date, start_time, end_time, place, status)
        return schedule
    }
    async findOne(id) {
        const schedule = await this.service.findOne(id)
        if (!schedule) {
            throw { status: 404, message: 'Schedule no encontrada' }
        }
        return schedule
    }
    async update(id, values) {
        const schedule = await this.service.update(id, value)
        if (!schedule) {
            throw { status: 404, message: 'Schedule no encontrada' }
        }
        return schedule
    }
    async delete(id) {
        const schedule = await this.service.delete(id)
        if (!schedule) {
            throw new Error("Schedule no encontrada")
        }
        return schedule
    }
    async createAttendance(schedule_id, user_id) {
        const attendance = await this.attendanceService.createAttendance(schedule_id, user_id)
        return attendance
    }
    async findBy(schedule_id, user_id, start_date, end_date) {
        console.log(schedule_id, user_id, start_date, end_date)
        const attendance = await this.attendanceService.getAll(schedule_id, user_id, start_date, end_date)
        return attendance
    }

}
module.exports = ScheduleController