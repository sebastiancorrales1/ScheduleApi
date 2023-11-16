const { Router } = require('express')
const userRouter = require('./users.routes')
const areaRouter = require('./areas.routes')
const scheduleRouter = require('./schedules.routes')

function routerApi(app) {
    const router = Router()
    app.use('/api/v1', router)
    router.use('/users', userRouter)
    router.use('/areas', areaRouter)
    router.use('/schedules', scheduleRouter)
}
module.exports = routerApi

