const formatrecipe = (array) => {

    let ret = []
    for (let element of array) {
        let instructions = ""
        if (element.analyzedInstructions.length === 0) {
            instructions = "none"
        }
        else {
            for (e of element.analyzedInstructions[0].steps) {
                instructions += e.step + " "
            }

        }
        const resumen = element.summary.replace(/<.*?>/g, "");
        var aux = { code: element.id, title: element.title, imagen: element.image, resumen: resumen, healthskil: element.healthScore, steps: instructions, diets: element.diets }
        ret.push(aux)
    }
    return ret;
}

module.exports = formatrecipe