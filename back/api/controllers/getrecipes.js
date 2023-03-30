const axios = require("axios")
require('dotenv').config({ path: 'E:/curso Henry/PI-Food/back/api/.env' });
const { API_KEY } = process.env
const { endpointPreload } = require("../routes/endpoints")
const recipemap = require("../../db/controllers/recipemap")
const { store } = require("./loadserver")
const formatrecipe = require("../Helpers/formatrecipe")


const getrecipes = async (res) => {
    try {
        const recipes = formatrecipe(store[0])
        res.status(200).json(recipes)
    } catch (error) {
        console.log(error.message)

    }
}

module.exports = getrecipes;