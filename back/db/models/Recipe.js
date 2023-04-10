const { DataTypes } = require("sequelize");

const RecipeModel = (sequelize) => {
    sequelize.define("Recipe", {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,

        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
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
    }, {
        timestamps: false
    })
}

module.exports = RecipeModel;