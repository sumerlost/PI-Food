const router = require("express").Router()
const getrecipeName = require("../../Controllers/getrecipeName")
const { store } = require("../../Controllers/loadserver")

router.get("/recipes/name", (req, res) => {

    getrecipeName(store[0], req, res)
})

module.exports = router