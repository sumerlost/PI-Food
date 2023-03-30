const { Diet } = require("../db")

const dietmap = async (array) => {
    for (let element of array) {
        const aux = await Diet.create({ name: element })
    };
}

module.exports = dietmap