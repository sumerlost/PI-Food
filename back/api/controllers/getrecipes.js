const axios = require("axios")
require('dotenv').config({ path: 'E:/curso Henry/PI-Food/back/api/.env' });
const { API_KEY } = process.env
const { endpointPreload } = require("../routes/endpoints")
const recipemap = require("../../db/controllers/recipemap")
const { store } = require("./loadserver")
const formatrecipe = require("../Helpers/formatrecipe");
const paginado = require("../Helpers/paginado");
const mapdiets = require("../Helpers/mapdiets")

const getrecipes = async (req, res) => {
    const recipes = formatrecipe(store[0])
    const diets = mapdiets(recipes)
    const len = recipes.length
    try {
        if (req.query.page) {
            const { page } = req.query
            const recipepage = paginado(page, recipes)
            res.status(200).json({ recipepage, diets, len })
        }
        else {
            res.status(200).json({ recipes, diets })

        }
    } catch (error) {
        console.log(error.message)

    }
}

module.exports = getrecipes;