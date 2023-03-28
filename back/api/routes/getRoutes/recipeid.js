const router = require("express").Router()
const idRecipe = require("../../controllers/idRecipe")

router.get("/recipes/:idRecipe", async (req, res) => {
    const id = req.params.idRecipe
    idRecipe(id, res)
})

module.exports = router