const formatrecipedb = (array) => {
    const recipes = []
    try {
        let aux = array.map(e => e.dataValues)
        for (let element of aux) {
            let diets = element.Diets.map(e => e.dataValues.name)
            let aux3 = { code: element.code, title: element.title, imagen: element.imagen, resumen: element.resumen, healthskil: element.healthskil, steps: element.steps, diets }
            recipes.push(aux3)
        }
        return recipes
    } catch (error) {
        return array
    }
}

module.exports = formatrecipedb