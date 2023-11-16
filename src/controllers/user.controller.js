const UserService = require('./../services/user.service')


class UserController {
    constructor() {
        this.service = new UserService
    }
    async index() {
        const users = await this.service.getAll()
        return users
    }
    async create(name, email, password, status, area_id, area) {
        const user = await this.service.create(name, email, password, status, area_id, area)
        return user
    }
    async findOne(id) {
        const user = await this.service.findOne(id)
        if (!user) {
            throw { status: 404, message: 'Usuario no encontrado' }
        }
        delete user.dataValues.password
        return user
    }
    async update(id, values) {
        const user = await this.service.update(id, value)
        if (!user) {
            throw { status: 404, message: 'Usuario no encontrado' }
        }
        delete user.dataValues.password
        return user
    }
    async delete(id) {
        const user = await this.service.delete(id)
        if (!user) {
            throw new Error("Usuario no encontrado")
        }
        return user
    }

}
module.exports = UserController