const { Recipe, Diet } = require("../../db/db")

const createRecipe = async (recipe) => {
    try {
        if (recipe.diets && recipe.diets.length) {
            const diets = await Diet.findAll({
                where: {
                    name: recipe.diets
                }
            });
            const dietIds = diets.map(diet => diet.id);
            await newRecipe.setDiets(dietIds);
        }
    } catch (error) {

    }
}


const postRecipe = async (req, res) => {

    const { recipe } = req.body;

    try {
        const newRecipe = await Recipe.create(recipe);
        if (recipe.diets && recipe.diets.length) {
            const diets = await Diet.findAll({
                where: {
                    name: recipe.diets
                }
            });
            const dietIds = diets.map(diet => diet.id);
            await newRecipe.setDiets(dietIds);
        }
        res.status(201).json(newRecipe);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }

}

module.exports = postRecipe;