const router = require("express").Router()
const getrecipes = require("../../Controllers/getrecipes");

router.get("/recipes", async (req, res) => {
    getrecipes(req, res)
})

module.exports = router