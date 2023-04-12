const axios = require("axios")
require('dotenv').config({ path: 'E:/curso Henry/PI-Food/back/api/.env' });
const { API_KEY } = process.env
const { endpointPreload } = require("../routes/endpoints")
const recipemap = require("../../db/controllers/recipemap")
const { store } = require("./loadserver")
const formatrecipe = require("../Helpers/formatrecipe");
const paginado = require("../Helpers/paginado");
const mapdiets = require("../Helpers/mapdiets")
const filters = require("../Handlers/filters")
const orders = require("../Handlers/orders")
const { Recipe, Diet } = require("../../db/db");
const formatrecipedb = require("../Helpers/formatrecipedb");

const getrecipes = async (req, res) => {
    const aux1 = formatrecipe(store[0])
    const dbrecipes = await Recipe.findAll({ include: Diet })
    const aux2 = formatrecipedb(dbrecipes)
    const recipes = [...aux1, ...aux2]
    const diets = mapdiets(recipes)
    try {
        const filterecipe = filters(recipes, req.query.filtros)
        const len = filterecipe.length
        const orderpage = orders(filterecipe, req.query.order, req.query.ord)
        const { page } = req.query
        const recipepage = paginado(page, orderpage)
        res.status(200).json({ recipepage, diets, len })
    } catch (error) {
        console.log(error.message)

    }
}

module.exports = getrecipes;