const formatrecipe = require("../Helpers/formatrecipe")
const mapdiets = require("../Helpers/mapdiets")
const filters = require("../Helpers/filters")
const paginado = require("../Helpers/paginado")

const getrecipeName = (recipes, req, res) => {
    try {
        const aux = recipes.filter(i => i.title.toUpperCase().includes(req.query.name.toUpperCase()))
        const myrecipe = formatrecipe(aux)
        console.log(myrecipe)
        const diets = mapdiets(myrecipe)
        const filterecipe = filters(myrecipe, req.query.filtros)
        const len = filterecipe.length
        const { page } = req.query
        const recipepage = paginado(page, filterecipe)
        res.status(200).json({ recipepage, diets, len })
    }
    catch (error) {
        res.status(400).json(error.message)
    }
}

module.exports = getrecipeName