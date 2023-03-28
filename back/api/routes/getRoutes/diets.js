const router = require("express").Router()
const getdiets = require("../../controllers/getdiets")

router.get("/diets", (req, res) => {
    const { recipes } = req.app.locals
    getdiets(recipes, res)
})

module.exports = router