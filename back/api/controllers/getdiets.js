const getdiets = (recipes, res) => {
    try {
        const aux = [].concat(...recipes.map((i) => { return i.diets }))
        const aux2 = new Set(aux)
        const diets = Array.from(aux2)
        res.status(201).send(diets)
        return diets
    } catch (error) {
        res.status(400).json(error.message)

    }
}

module.exports = getdiets
