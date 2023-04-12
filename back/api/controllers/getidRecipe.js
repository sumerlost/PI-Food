const axios = require("axios")
require('dotenv').config({ path: 'E:/curso Henry/PI-Food/back/api/.env' });
const { API_KEY } = process.env
const { endpointID } = require("../routes/endpoints")
const formatrecipe = require("../Helpers/formatrecipe");
const regex = /^[0-9]+$/;
const { Recipe, Diet } = require("../../db/db");
const formatrecipedb = require("../Helpers/formatrecipedb");

const getidRecipe = async (id, res) => {

    try {
        if (regex.test(id)) {
            const datos = await axios.get(`${endpointID(id, API_KEY)}`)
            const aux = [datos.data]
            const myrecipe = formatrecipe(aux)
            res.status(200).json(myrecipe)
        }
        else {
            const datos = await Recipe.findByPk(id, { include: Diet })
            const aux = [datos]
            const myrecipe = formatrecipedb(aux)
            console.log(myrecipe)
            res.status(200).json(myrecipe)
        }
    } catch (error) {
        res.status(401).json(error.message)

    }

}

module.exports = getidRecipe;