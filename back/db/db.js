require("dotenv").config()

const { Sequelize } = require("sequelize")
const Recipe = require("./models/Recipe")
const Diet = require("./models/Diet")

const user = "postgres"
const pass = "4227435"
const PORT = "5432"
const dbname = "foods"
const { DB_USER, DB_PASS, DB_PORT, DB_NAME } = process.env;



const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASS}@localhost:${DB_PORT}/${DB_NAME}`, { logging: false })

Recipe(sequelize)
Diet(sequelize)

module.exports = { sequelize, ...sequelize.models }