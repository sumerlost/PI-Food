const { DataTypes } = require("sequelize");

const Recipe = (sequelize) => {
    sequelize.define("Recipe", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        code: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,

        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,

        },
        imagen: {
            type: DataTypes.STRING,
            defaultValue: "https://vistapointe.net/images/unknown-2.jpg"
        },
        resumen: {
            type: DataTypes.TEXT,
            defaultValue: "unknown"
        },
        healthskil: {
            type: DataTypes.FLOAT,
            allowNull: false,

        },
        steps: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
    })
}

module.exports = Recipe;