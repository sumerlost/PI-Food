const mapdiets = (recipes) => {
    const aux = [].concat(...recipes.map((i) => { return i.diets }))
    const aux2 = new Set(aux)
    const diets = Array.from(aux2)
    return diets
}

module.exports = mapdiets