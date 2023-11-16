const AreaService = require('../services/area.service')


class AreaController {
    constructor() {
        this.service = new AreaService
    }
    async index() {
        const areas = await this.service.getAll()
        return areas
    }
    async create( name, code, observations, status) {
        const area = await this.service.create( name, code, observations, status)
        return area
    }
    async findOne(id) {
        const area = await this.service.findOne(id)
        if (!area) {
            throw { status: 404, message: 'Area no encontrada' }
        }
        return area
    }
    async update(id, values) {
        const area = await this.service.update(id, value)
        if (!area) {
            throw { status: 404, message: 'Area no encontrada' }
        }
        return area
    }
    async delete(id) {
        const area = await this.service.delete(id)
        if (!area) {
            throw new Error("Area no encontrada")
        }
        return area
    }

}
module.exports = AreaController