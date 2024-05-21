import React from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getDetail } from '../../redux/actions/actions';
import { cleanDetail } from '../../redux/actions/actions';

import styles from './detail.module.css'


const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const pokemon = useSelector((state) => state.pokemonDetail);

  useEffect(() => {
    const pokeRender = async () => {
      try {
        dispatch(getDetail(id));
      } catch (error) {
        console.log(error.message)
      }
    }
    pokeRender()
    return () => dispatch(cleanDetail());
  }, [dispatch])
  console.log(pokemon.Types)

  const hasObjectWithName = pokemon.Types && pokemon.Types.some((item) => typeof item === 'object' && item.hasOwnProperty('nombre'));

  return (
    <div className={styles.detail}>
      <h3>{pokemon.nombre}</h3>
      <p>Vida: {pokemon.vida}</p>
      <p>Ataque: {pokemon.ataque}</p>
      <p>Defensa: {pokemon.defensa}</p>
      <p>Altura: {pokemon.altura}</p>
      <p>Peso: {pokemon.peso}</p>
      <p>Velocidad: {pokemon.velocidad}</p>
      <p>Tipo: {pokemon.Types}</p>

      <img src={pokemon.imagen}></img>

    </div>
  )
}

export default Detail