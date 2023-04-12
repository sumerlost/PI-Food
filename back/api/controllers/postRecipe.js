const { Recipe, Diet } = require("../../db/db")
const createRecipe = require("../../db/controllers/createrecipe")


const postRecipe = async (req, res) => {

    const { recipe } = req.body;
    try {
        const newRecipe = await createRecipe(recipe)
        res.status(201).json(newRecipe.code);
    } catch (error) {
        res.status(400).json({ error: "this recipe already exist" })
    }

}

module.exports = postRecipe;