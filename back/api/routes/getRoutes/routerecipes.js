const router = require("express").Router()
const getrecipes = require("../../Controllers/getrecipes");

router.get("/recipes", async (req, res) => {
    getrecipes(res)
})

module.exports = router