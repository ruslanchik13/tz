require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const models = require('./models/models.js')
const cors = require('cors')
const router = require('./routes/router')
const PORT = process.env.PORT || 3000

const app = express()

app.use(express.json())
app.use(cors())
app.use('/api', router)

const start = async function() {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`server started on port ${PORT}`))
    } catch (err) {
        console.log(err)
    }
}

start()

