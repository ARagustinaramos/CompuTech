import React from 'react'
import { Link } from 'react-router-dom'
import styles from './card.module.css'



const Card = ({ id, nombre, imagen, Types }) => {
  //const { id, nombre, imagen, tipos } = pokemon
  //console.log(Types)

  return (
    <div key={id} className={styles.card}>
      <h3>Nombre: {nombre}</h3>
      {Types.map((e, index) => (<p id={index}>{e}</p>))}
      <Link to={`/detail/${id}`} key={id}>
        <img src={imagen}></img>
      </Link>
    </div>
  )
}

export default Card

// const Card = ({ id, nombre, imagen, Types }) => {
//   // Filtra los objetos en Types que tienen la propiedad "nombre"
//   const objetosConNombre = Types.filter((item) => typeof item === 'object' && item.hasOwnProperty('nombre'));

//   return (
//     <div key={id} className={styles.card}>
//       <h3>Nombre: {nombre}</h3>
//       {/* Renderizado condicional */}
//       {objetosConNombre.length > 0 ? (
//         <p>
//           {objetosConNombre.map((objeto, index) => (
//             <span key={index}>{objeto.nombre}</span>
//           ))}
//         </p>
//       ) : (
//         <p>
//           {Types.map((item, index) => (
//             <span key={index}>{item}</span>
//           ))}
//         </p>
//       )}
//       <Link to={`/detail/${id}`} key={id}>
//         <img src={imagen} alt={`Imagen de ${nombre}`} />
//       </Link>
//     </div>
//   );
// };

// export default Card;
