const express = require("express")
const axios = require("axios");
const preload = require("../controllers/preload");
const router = express.Router()
const API_KEY = "68d7bfa49f974ce2b7fee6ff87907a63"
const { endpointPreload } = require("./endpoints")
const idRecipe = require("../controllers/idRecipe")

// router.get("/recipes", async (req, res) => {
//     try {
//         const datos = await axios.get(`https://api.spoonacular.com/recipes/654959/information?apiKey=${API_KEY}`)
//         // const steps = datos.data.analyzedInstructions[0].steps.map(step => step.step)
//         const nuevareceta = { code: datos.data.id, title: datos.data.title, img: datos.data.image, resumen: datos.data.summary, hs: datos.data.healthScore, pasos: datos.data.instructions }
//         res.status(200).json(nuevareceta)
//     } catch (error) {
//         res.status(400).json(error.message)

//     }

// });
var Recipes = []

router.get("/recipes/:idRecipe", async (req, res) => {
    const id = req.params.idRecipe
    idRecipe(id, res)

})

router.get("/recipes/name", async (req, res) => {

})

router.get("/preload", async (req, res) => {
    Recipes = preload(res)
})



module.exports = { router, Recipes };