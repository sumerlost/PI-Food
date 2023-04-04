const paginado = (page, array) => {
    const aux = array.slice((page - 1) * 9, page * 9)
    return aux
}

module.exports = paginado