import React from 'react'
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import styles from './create.module.css'
import BgVideo from '../../assets/scorbunny.mp4'
import { getTypes } from '../../redux/actions/actions';
import { postPokemon } from '../../controller/controller';
import validate from './validate';
const Create = () => {
  const dispatch = useDispatch();
  const types = useSelector((state) => state.types);
  const navigate = useNavigate()
  const initialPokemon = {
    nombre: "",
    types: [],
    imagen: "",
    vida: 0,
    ataque: 0,
    defensa: 0,
    velocidad: 0
  }
  const [newPokemon, setNewPokemon] = useState({ ...initialPokemon });
  const initialerrors = {
    nombre: "Nombre de tu pokemon",
    types: null,
    imagen: "foto de tu pokemon",
    vida: "indica la vida de tu pokemon",
    ataque: "indica el ataque de tu pokemon",
    defensa: "indica la defensa de tu pokemon",
    velocidad: "indica la velocidad de tu pokemon"
  }
  
  const [errors, setErrors] = useState({...initialerrors})

  function handleChange(e) {
    setNewPokemon({
      ...newPokemon,
      [e.target.name]: e.target.value
    })

    setErrors(validate({
      ...newPokemon,
      [e.target.name]: e.target.value
    }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    await postPokemon(newPokemon);
    navigate('/home')

  }

  const handleSelect = (event) => {
    const value = event.target.value;
    if (event.target.checked) {
      // Agrega el valor al array si no está repetido
      if (!newPokemon.types.includes(value)) {
        setNewPokemon({
          ...newPokemon,
          types: [...newPokemon.types, value],
        });
      }
    } else {
      setNewPokemon({
        ...newPokemon,
        types: newPokemon.types.filter((item) => item !== value),
      });
    }


    // setNewPokemon({
    //   ...newPokemon,
    //   types: [...newPokemon.types, event.target.value]
    // });


  };

  useEffect(() => {
    dispatch(getTypes());
  }, []);


  return (
    <div className={styles.wrapper}>
      <video muted autoPlay loop>
        <source src={BgVideo} type="video/mp4" />
      </video>
      <div className={styles.container}>
        <form onSubmit={handleSubmit}>
          <h1 className={styles.titulo}>Crea tu Pokémon</h1>
          <div className={styles.inputbox}>
            <label htmlFor="nombre"></label>
            <input
              type="text"
              name='nombre'
              placeholder='Nombre'
              onChange={handleChange}
              value={newPokemon.nombre}
            />
            {errors.nombre && (
              <div className={styles.errorContainer}>
                <p>{errors.nombre}</p>
              </div>
            )}
          </div>

          <div className={styles.inputbox}>
            <label htmlFor="imagen">Imagen: </label>
            <input
              type="text"
              name='imagen'
              onChange={handleChange}
              placeholder='Link de la imagen'
              value={newPokemon.imagen}
            />
            {errors.imagen && (
              <div className={styles.errorContainer}>
                <p>{errors.imagen}</p>
              </div>
            )}
            <img src={newPokemon.imagen} style={{ width: "200px" }} />
          </div>

          <div className={styles.inputbox}>
            <label htmlFor="vida">Puntos de vida: </label>
            <input
              type="number"
              name='vida'
              onChange={handleChange}
              placeholder='Vida'
              value={newPokemon.vida}

            />
            {errors.vida && (
              <div className={styles.errorContainer}>
                <p>{errors.vida}</p>
              </div>
            )}
          </div>
          <div className={styles.inputbox}>
            <label htmlFor="ataque">Poder de ataque:   </label>
            <input
              type="number"
              name='ataque'
              placeholder='Ataque'
              onChange={handleChange}
              value={newPokemon.ataque}
            />
            {errors.ataque && (
              <div className={styles.errorContainer}>
                <p>{errors.ataque}</p>
              </div>
            )}
          </div>

          <div className={styles.inputbox}>
            <label htmlFor="defensa">Defensa:</label>
            <input
              type="number"
              name='defensa'
              placeholder='Defensa'
              onChange={handleChange}
              value={newPokemon.defensa}
            />
            {errors.defensa && (
              <div className={styles.errorContainer}>
                <p>{errors.defensa}</p>
              </div>
            )}
          </div>
          <div className={styles.inputbox}>
            <label htmlFor="velocidad">Velocidad: </label>
            <input
              type="number"
              name='velocidad'
              placeholder='Velocidad'
              onChange={handleChange}
              value={newPokemon.velocidad}
            />
            {errors.velocidad && (
              <div className={styles.errorContainer}>
                <p>{errors.velocidad}</p>
              </div>
            )}
          </div>
          <div className={styles.teamsSelect}>
            <h3>Tipo</h3>
            {types.map((e, index) => (
              <label key={index}>
                <input
                  type="checkbox"
                  name="types"
                  value={e.id}
                  onChange={(event) => handleSelect(event)}
                />
                {e.nombre}
              </label>
            ))}
          </div>
          {errors.types && (
            <div className={styles.errorContainer}>
              <p>{errors.types}</p>
            </div>
          )}
          {Object.values(errors).every((error) => error == null) && (
            <button type="submit" className={styles.btn}>
              CREAR
            </button>
          )}





        </form>
      </div>

    </div>
  )
}

export default Create