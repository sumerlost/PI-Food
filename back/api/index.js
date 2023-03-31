const express = require("express")
const server = express()
const PORT = 3001
const recipeid = require("./routes/getRoutes/routerecipeid")
const recipes = require("./routes/getRoutes/routerecipes")
const recipename = require("./routes/getRoutes/routerecipename")
const diets = require("./routes/getRoutes/routediets")
const { sequelize } = require("../db/db")
const { loadserver } = require("./Controllers/loadserver")
const cors = require("cors")


loadserver()
server.use(cors())
server.use(express.json())
server.use(recipes)
server.use(recipename)
server.use(recipeid)
server.use(diets)


server.listen(PORT, async () => {
    await sequelize.sync({ force: true })
})