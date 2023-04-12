const { Recipe, Diet } = require("../db")

const createRecipe = async (recipe) => {
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
        return newRecipe.dataValues
    } catch (error) {
        throw error
    }
}

module.exports = createRecipe