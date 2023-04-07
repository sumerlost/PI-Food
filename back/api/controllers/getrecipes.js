const axios = require("axios")
require('dotenv').config({ path: 'E:/curso Henry/PI-Food/back/api/.env' });
const { API_KEY } = process.env
const { endpointPreload } = require("../routes/endpoints")
const recipemap = require("../../db/controllers/recipemap")
const { store } = require("./loadserver")
const formatrecipe = require("../Helpers/formatrecipe");
const paginado = require("../Helpers/paginado");
const mapdiets = require("../Helpers/mapdiets")
const filters = require("../Helpers/filters")

const getrecipes = async (req, res) => {
    const recipes = formatrecipe(store[0])
    const diets = mapdiets(recipes)
    try {
        const filterecipe = filters(recipes, req.query.filtros)
        const len = filterecipe.length
        const { page } = req.query
        const recipepage = paginado(page, filterecipe)
        res.status(200).json({ recipepage, diets, len })
    } catch (error) {
        console.log(error.message)

    }
}

module.exports = getrecipes;