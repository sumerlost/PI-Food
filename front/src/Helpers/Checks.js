export const Checks = (state) => {
    const diets = []
    for (let key in state) {
        if (state[key] === true) {
            diets.push(key)
        }

    }
    return diets
}
