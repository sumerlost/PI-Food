const formatrecipe = (array) => {

    let ret = []
    for (let element of array) {
        let instructions = ""
        for (e of element.analyzedInstructions[0].steps) {
            instructions += e.step + " "
        }
        const resumen = element.summary.replace(/<.*?>/g, "");
        var aux = { code: element.id, title: element.title, imagen: element.image, resumen: resumen, healthskil: element.healthScore, steps: instructions, diets: element.diets }
        ret.push(aux)
    }
    return ret;
}

module.exports = formatrecipe