const { Diet } = require("../db")

const dietmap = async (array) => {
    for (let element of array) {
        try {

            const aux = await Diet.create({ name: element })
        } catch (error) {
            continue
        }
    };
}

module.exports = dietmap