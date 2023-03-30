const { Recipe } = require("../db")

const recipemap = async (array) => {
    let ret = []

    for (let element of array) {
        let instructions = ""
        for (e of element.analyzedInstructions[0].steps) {
            instructions += e.step + ". "
        }
        var aux = await Recipe.create({ code: element.id, title: element.title, imagen: element.image, resumen: element.summary, healthskil: element.healthScore, steps: instructions })
        ret.push(aux.dataValues)
    }
    return ret;
}

module.exports = recipemap