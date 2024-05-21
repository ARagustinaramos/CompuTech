const axios = require('axios');
const { Type } = require('../db')

const getTypesController = async () => {
    let typesApi = await Type.findAll();
    if (typesApi.length === 0) {
        typesApi = await axios.get('https://pokeapi.co/api/v2/type');
        const apiResults = typesApi.data.results;
        // Mapeo
        const typesDataApi = apiResults.map(e => ({ nombre: e.name }));
        // Guardar en la base de datos
         typesApi = await Type.bulkCreate(typesDataApi);
    }else{
        return typesApi
    }
    return typesApi;
}

module.exports = { getTypesController };

