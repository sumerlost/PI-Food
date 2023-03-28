const router = require("express").Router()
const preload = require("../../controllers/preload");

router.get("/recipes", async (req, res) => {
    req.app.locals.recipes = await preload(res)

})

module.exports = router