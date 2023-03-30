const axios = require("axios")
require('dotenv').config({ path: 'E:/curso Henry/PI-Food/back/api/.env' });
const { API_KEY } = process.env
const { endpointPreload } = require("../routes/endpoints")
const formatrecipe = require("../Helpers/formatrecipe")
const fs = require('fs');
const path = require('path');
const store = []

const loadserver = () => {

    // FUNCION REAL, USAR UNA VEZ ESTE TODO TESTEADO 


    // try {
    //     const response = await axios.get(`${endpointPreload(API_KEY)}`)
    //     //const aux = formatrecipe(response.data.results)
    //     store.push(response.data)
    //     console.log("server cargado")

    // } catch (error) {
    //     console.log(error.message)
    // }

    try {
        // Carga el archivo JSON local
        const recipesData = fs.readFileSync(path.resolve(__dirname, 'recipes.json'), 'utf8');

        // Convierte los datos del archivo JSON a un objeto JavaScript
        const recipes = JSON.parse(recipesData);

        // Aquí puedes hacer cualquier formateo necesario de los datos.
        // Agrega los datos formateados a la matriz `store`
        store.push(recipes.results);

        console.log("server cargado");
    } catch (error) {
        console.log(error.message);
    }

}

module.exports = { loadserver, store }