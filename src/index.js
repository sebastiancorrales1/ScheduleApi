const express = require('express')
const routerApi = require('./routes')
const { port: APP_PORT } = require('./config/config')
const app = express()
app.use(express.json())
routerApi(app)
app.listen(APP_PORT, () => {
    console.log(`Running on PORT ${APP_PORT}`)
})

