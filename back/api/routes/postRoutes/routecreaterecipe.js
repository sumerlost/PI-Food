const router = require("express").Router();
const { Recipe, Diet } = require("../../../db/db");

router.post("/recipes/create", async (req, res) => {

    const { recipe } = req.body;
    console.log(recipe)
    try {
        const newRecipe = await Recipe.create(recipe);
        if (recipe.diets && recipe.diets.length) {
            const diets = await Diet.findAll({
                where: {
                    name: recipe.diets
                }
            });
            console.log(diets)
            const dietIds = diets.map(diet => diet.id);
            await newRecipe.setDiets(dietIds);
        }
        res.status(201).json(newRecipe);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }

});

module.exports = router;
