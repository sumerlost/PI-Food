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
const dietmap = require("../db/controllers/dietmap")
const create = require("./routes/postRoutes/routecreaterecipe")

const dietsdb = loadserver()
server.use(cors())
server.use(express.json())
server.use(recipes)
server.use(recipename)
server.use(recipeid)
server.use(diets)
server.use(create)


server.listen(PORT, async () => {
    await sequelize.sync({ force: true })
    dietmap(dietsdb)
})