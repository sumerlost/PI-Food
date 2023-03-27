const axios = require("axios")
require('dotenv').config({ path: 'E:/curso Henry/PI-Food/back/api/.env' });
const { API_KEY } = process.env
const { endpointID } = require("../routes/endpoints")

const idRecipe = async (id, res) => {
    try {
        const datos = await axios.get(`${endpointID(id, API_KEY)}`)
        const recipe = { code: datos.data.id, title: datos.data.title, img: datos.data.image, resumen: datos.data.summary, hs: datos.data.healthScore, pasos: datos.data.instructions }
        res.status(200).send(recipe)
        return recipe
    } catch (error) {
        res.status(401).json(error.message)

    }

}

module.exports = idRecipe;