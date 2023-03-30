const formatrecipe = require("../Helpers/formatrecipe")

const getrecipeName = (recipes, name, res) => {
    try {
        const aux = recipes.filter(i => i.title.toUpperCase().includes(name.toUpperCase()))
        const myrecipe = formatrecipe(aux)
        res.status(200).json(myrecipe)
        return myrecipe
    }
    catch (error) {
        res.status(400).json(error.message)
    }
}

module.exports = getrecipeName