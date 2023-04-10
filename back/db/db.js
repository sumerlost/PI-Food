require("dotenv").config()

const { Sequelize } = require("sequelize")
const RecipeModel = require("./models/Recipe")
const DietModel = require("./models/Diet")

const { DB_USER, DB_PASS, DB_PORT, DB_NAME } = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASS}@localhost:${DB_PORT}/${DB_NAME}`, { logging: false })

RecipeModel(sequelize)
DietModel(sequelize)

const { Recipe, Diet } = sequelize.models

Recipe.belongsToMany(Diet, { through: 'RecipeDiet', timestamps: false });
Diet.belongsToMany(Recipe, { through: 'RecipeDiet', timestamps: false });

module.exports = { sequelize, ...sequelize.models }