const axios = require("axios")
require('dotenv').config({ path: 'E:/curso Henry/PI-Food/back/api/.env' });
const { API_KEY } = process.env
const { endpointID } = require("../routes/endpoints")
const { Recipe } = require("../../db/db")

const getidRecipe = async (id, res) => {
    try {
        const datos = await axios.get(`${endpointID(id, API_KEY)}`)
        res.status(200).json(datos.data)
        return datos.data
    } catch (error) {
        res.status(401).json(error.message)

    }

}

module.exports = getidRecipe;