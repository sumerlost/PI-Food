const router = require("express").Router();
const { Recipe, Diet } = require("../../../db/db");
const postRecipe = require("../../Controllers/postRecipe")
router.post("/recipes/create", async (req, res) => {
    postRecipe(req, res)
});

module.exports = router;
