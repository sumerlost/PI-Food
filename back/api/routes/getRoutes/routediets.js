const router = require("express").Router()
const getdiets = require("../../Controllers/getdiets")
const { store } = require("../../Controllers/loadserver")

router.get("/diets", (req, res) => {
    getdiets(store, res)
})

module.exports = router