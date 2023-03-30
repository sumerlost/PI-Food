const router = require("express").Router()
const getrecipeName = require("../../Controllers/getrecipeName")
const { store } = require("../../Controllers/loadserver")

router.get("/recipes/name", (req, res) => {
    const { name } = req.query
    getrecipeName(store[0], name, res)
})

module.exports = router