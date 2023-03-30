const dietmap = require("../../db/controllers/dietmap")
const mapdiets = require("../Helpers/mapdiets")

const getdiets = (store, res) => {
    try {
        const diets = mapdiets(store[0])
        dietmap(diets)
        res.status(201).send(diets)
        return diets
    } catch (error) {
        res.status(400).json(error.message)

    }
}

module.exports = getdiets
