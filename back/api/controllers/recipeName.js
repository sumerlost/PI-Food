
const recipeName = (recipes, name) => {
    const myrecipe = recipes.filter(i => i.title.includes(name))
    return myrecipe
}

module.exports = recipeName