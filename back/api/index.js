const express = require("express")
const server = express()
const PORT = 3001
const recipeid = require("./routes/getRoutes/recipeid")
const recipes = require("./routes/getRoutes/recipes")
const recipename = require("./routes/getRoutes/recipename")
const diets = require("./routes/getRoutes/diets")
const { sequelize } = require("../db/db")


server.locals.recipes = []

server.use(express.json())
server.use(recipes)
server.use(recipename)
server.use(recipeid)
server.use(diets)


server.listen(PORT, async () => {
    await sequelize.sync({ force: true })
})