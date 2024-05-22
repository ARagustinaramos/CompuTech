const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("Review", {
        id_Review:{
            type:DataTypes.UUID,
            defaultValue:DataTypes.UUIDV4,
            allowNull:false,
            primaryKey:true,
        },
        ranking:{
            type:DataTypes.INTEGER,
            allowNull:true,
        },
        comment:{
            type:DataTypes.STRING,
            allowNull:true,
        }
    }, {timestamps: false},
);
};