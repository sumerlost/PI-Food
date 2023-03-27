const axios = require("axios")
require('dotenv').config({ path: 'E:/curso Henry/PI-Food/back/api/.env' });
const { API_KEY } = process.env
const { endpointPreload } = require("../routes/endpoints")

const preload = async (res) => {
    try {
        const response = await axios.get(`${endpointPreload(API_KEY)}`)
        res.status(200).send(response.data.results)
        return response.data.results
    } catch (error) {
        res.status(401).json(error.message)

    }
}

module.exports = preload;