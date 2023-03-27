const express = require("express")
const server = express()
const PORT = 3001
const { router } = require("./routes/get")
const { sequelize } = require("../db/db")


server.use(express.json())
server.use(router)



server.listen(PORT, async () => {
    await sequelize.sync({ force: true })
})