const filters = (recipes, query) => {
    let filt = []
    let aux = []
    if (query === "none") {
        return recipes
    }
    if (typeof query === "string") {
        aux.push(query)
    }
    else {
        aux = query
    }
    for (let element of recipes) {
        let included = aux.every((e) => element.diets.includes(e))
        if (included) {
            filt.push(element)
        }
    }
    return filt
}

module.exports = filters