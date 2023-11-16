const {Sequelize} = require('sequelize')
const {db_user, db_password, db_host, db_name, env, db_connection, db_port} = require('./../config/config')
const setupModels = require('./../database/models/')

const USER = encodeURIComponent(db_user)
const PASSWORD = encodeURI(db_password)

const URI = `${db_connection}://${USER}:${PASSWORD}@${db_host}:${db_port}/${db_name}`

const sequelize = new Sequelize(URI, {
    dialect:db_connection,
    loggin: env == 'dev'
})
setupModels(sequelize)

module.exports = sequelize