const recipeName = (recipes, name, res) => {
    try {
        const myrecipe = recipes.filter(i => i.title.toUpperCase().includes(name.toUpperCase()))
        res.status(200).json(myrecipe)
        return myrecipe
    }
    catch (error) {
        res.status(400).json(error.message)
    }
}

module.exports = recipeName