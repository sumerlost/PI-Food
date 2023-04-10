const { DataTypes } = require("sequelize")

const DietModel = (sequelize) => {
    sequelize.define("Diet", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        }
    },
        {
            timestamps: false
        })
}

module.exports = DietModel