const { models } = require('./../libs/sequelize')

class UserService {
    constructor() {
        this.model = models.User
    }
    async getAll() {
        const users = await this.model.findAll({
            include: ['areas'],
            attributes: {
                exclude: ['password']
            }
        })
        return users;
    }
    async create(name, email, password, status, area_id, area) {

        if (area_id && area) {
            throw new Error("You can't provide area_id and area on same time")
        }
        const values = {
            name, email, password, status
        }
        if (area_id) {
            values.area_id = area_id
        }

        if (area) {
            values.areas = area
        }

        const user = await this.model.create(values, {
            include: [{
                association: 'areas'
            }]
        })
        return user
    }
    async findOne(id) {
        const user = await this.model.findByPk(id, {
            include: ['areas']
        })
        return user
    }
    async update(id, values) {
        const user = await this.model.findOne(id)
        if (!user) return null
        const userUpdate = user.update(values)
        return userUpdate
    }
}

module.exports = UserService