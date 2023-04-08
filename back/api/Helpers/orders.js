const asc = (a, b) => {
    return a - b
}
const des = (a, b) => {
    return a + b
}
const ascalf = (a, b) => {
    if (a < b) {
        return -1;
    } else if (a > b) {
        return 1;
    } else {
        return 0;
    }
}
const desalf = (a, b) => {
    if (a < b) {
        return 1;
    } else if (a > b) {
        return -1;
    } else {
        return 0;
    }
}
const orders = (recipes, query, ord) => {
    console.log(query)

    if (query === "none" || undefined) {
        return recipes
    }
    switch (query) {
        case "hs":
            if (ord === "asc") {
                return recipes.sort((a, b) => asc(a.healthskil, b.healthskil))
            }
            else {
                return recipes.sort((a, b) => des(a.healthskil, b.healthskil))
            }
        case "name":
            if (ord === "asc") {
                return recipes.sort((a, b) => ascalf(a.title, b.title))
            }
            else {
                return recipes.sort((a, b) => desalf(a.title, b.title))
            }
    }
}


module.exports = orders;