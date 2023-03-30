const router = require("express").Router()
const getidRecipe = require("../../Controllers/getidRecipe")

router.get("/recipes/:idRecipe", async (req, res) => {
    const id = req.params.idRecipe
    getidRecipe(id, res)
})

module.exports = router