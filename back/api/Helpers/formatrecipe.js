const formatrecipe = (array) => {

    let ret = []
    for (let element of array) {
        let instructions = ""
        for (e of element.analyzedInstructions[0].steps) {
            instructions += e.step + " "
        }
        var aux = { code: element.id, title: element.title, imagen: element.image, resumen: element.summary, healthskil: element.healthScore, steps: instructions, diets: element.diets }
        ret.push(aux)
    }
    return ret;
}

module.exports = formatrecipe