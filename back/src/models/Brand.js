const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("Brand", {
        id_Brand:{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false,
        },
        name:{
            type: DataTypes.STRING,
            allowNull: false,
        }
    }, {timestamps: false},
);
};