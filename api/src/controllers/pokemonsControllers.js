const axios = require('axios');
const { Pokemon, Type } = require('../db')
const { Op, where } = require("sequelize");


const getPokemonController = async () => {
    const pokemonApi = await axios.get('http://pokeapi.co/api/v2/pokemon?limit=200&offset=0')
    const pokemonData = pokemonApi.data.results

    //Mapeo
    const promises = pokemonData.map(e => axios.get(e.url))
    const pokemonResults = await Promise.all(promises)

    const pokemonfromApi = await pokemonResults.map(p => {
        return {
            id: p.data.id,
            nombre: p.data.name,
            Types: p.data.types.map((pok) => pok.type.name),
            imagen: p.data.sprites.other.home.front_default,
            vida: p.data.stats[0].base_stat,
            ataque: p.data.stats[1].base_stat,
            defensa: p.data.stats[2].base_stat,
            velocidad: p.data.stats[5].base_stat,
            altura: p.data.height,
            peso: p.data.weight,
            created: false
        }
    })

    const dbPokemons = await Pokemon.findAll({
        //busco en la tabla los modelos que necesito
        include: {
            model: Type,
            attributes: ["nombre"],
            through: { attributes: [] }
        }
    });
    const result = dbPokemons.map((p) => {
        return {
            id: p.id,
            nombre: p.nombre,
            Types: p.Types.map((e) => e.nombre),
            imagen: p.imagen,
            vida: p.vida,
            ataque: p.ataque,
            defensa: p.defensa,
            velocidad: p.velocidad,
            altura: p.altura,
            peso: p.peso,
            created: p.created
        }
    })



    //console.log(dbDataPokemon)
    // Esperar a que se resuelvan todas las promesas
    const apiPokemonsData = await Promise.all(pokemonfromApi);

    // Combinar ambos conjuntos de Pokémon
    const allPokemons = [...apiPokemonsData, ...result];


    return allPokemons;

}

const getPokemonByIdController = async (id) => {
    const allPokemons = await getPokemonController();
    const pokemonId = await allPokemons.find(e => e.id == id)

    if (pokemonId) {
        return pokemonId;
    } else {
        throw Error(`No existe el pokémon con el ID: ${id}`);
    }
}

const getPokemonByNameController = async (nombre) => {
    const name = nombre.toLowerCase()
    const allPokemons = await getPokemonController()
    const filter = allPokemons.filter((p) => p.nombre.includes(name))

    const response = filter.map((p) => {
        return {
            id: p.id,
            nombre: p.nombre,
            Types: p.Types.map((e) => e.nombre),
            imagen: p.imagen,
            vida: p.vida,
            ataque: p.ataque,
            defensa: p.defensa,
            velocidad: p.velocidad,
            altura: p.altura,
            peso: p.peso,
            created: p.created
        }
    })
    console.log(response)

    return filter
}

const createPokemonDbController = async (data) => {
    const newPokemon = await Pokemon.create({
        nombre: data.nombre.toLowerCase(),
        types: data.types,
        imagen: data.imagen,
        vida: data.vida,
        ataque: data.ataque,
        defensa: data.defensa,
        velocidad: data.velocidad,
        created: true

    })

    const type = data.types.map((e) => Number(e))
    const typeBd = await Type.findAll({ where: { id: type } })

    for (let i = 0; i < typeBd.length; i++) {
        await newPokemon.addType(typeBd[i])

    }
    console.log()
    return newPokemon

}

module.exports = {
    getPokemonController,
    getPokemonByNameController,
    getPokemonByIdController,
    createPokemonDbController
}