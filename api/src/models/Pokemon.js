const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Pokemon', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING,
      
    },
    imagen: {
      type: DataTypes.STRING,
     
    },
    vida: {
      type: DataTypes.INTEGER,
      
    },
    ataque: {
      type: DataTypes.INTEGER,
     
    },
    defensa: {
      type: DataTypes.INTEGER,
      
    },
    velocidad: {
      type: DataTypes.INTEGER,
      
    },
    altura: {
      type: DataTypes.INTEGER
      
    },
    peso: {
      type: DataTypes.INTEGER
      
    },
    created:{
      type:DataTypes.BOOLEAN,
      allowNull:false,
      defaultValue:true

    }
  });
};
