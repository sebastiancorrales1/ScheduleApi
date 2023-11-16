const { models } = require('../libs/sequelize')

class AreaService {
    constructor() {
        this.model = models.Areas
    }
    async getAll() {
        const areas = await this.model.findAll()
        return areas;
    }
    async create( name, code, observations, status) {

        const values = {
             name, code, observations, status
        }
        const area = await this.model.create(values)
        return area
    }
    async findOne(id) {
        const area = await this.model.findByPk(id)
        return area
    }
    async update(id, values) {
        const area = await this.model.findOne(id)
        if (!area) return null
        const areaUpdate = area.update(values)
        return areaUpdate
    }
}

module.exports = AreaService