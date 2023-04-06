export const HandlerDiets = (array) => {
    let aux = {}
    for (let element of array) {
        aux[element] = false
    }
    return aux
}
