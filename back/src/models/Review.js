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
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: 'pending' // Estado por defecto es "pending"
          }
    }, {timestamps: false},
);
};