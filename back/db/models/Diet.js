const { DataTypes } = require("sequelize")

const Diet = (sequelize) => {
    sequelize.define("Diet", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
        {
            timestamps: false
        })
}

module.exports = Diet