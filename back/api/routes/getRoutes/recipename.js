const router = require("express").Router()
const recipeName = require("../../controllers/recipeName")

router.get("/recipes/name", (req, res) => {

    const { recipes } = req.app.locals
    console.log(recipes)

    const { name } = req.query
    console.log(name)
    recipeName(recipes, name, res)
})

module.exports = router