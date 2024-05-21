const {
    getPokemonController,
    getPokemonByIdController,
    getPokemonByNameController,
    createPokemonDbController
} = require("../controllers/pokemonsControllers");
const Pokemon = require("../models/Pokemon");

const getPokemonHandler = async (req, res) => {
    try {
        const { nombre } = req.query;
        if (nombre) {
            const response = await getPokemonByNameController(nombre)
            return res.status(200).json(response)
        } else {
            const response = await getPokemonController();
            return res.status(200).json(response)
        }
    } catch (error) {
        return res.status(400).json({ error: error.message })
    }
}

const getPokemonByIdHandler = async (req, res) => {
    try {
        const { id } = req.params;
        const response = await getPokemonByIdController(id)

        return res.status(200).json(response)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const createPokemonDbHandler = async (req, res) => {
    try {
        const data = req.body;
        const result  = await createPokemonDbController(data)
        
        return res.status(200).json(result)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = {
    getPokemonHandler,
    getPokemonByIdHandler,
    createPokemonDbHandler
}