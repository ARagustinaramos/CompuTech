import axios from "axios";

export async function postProduct(create){
    //event.preventDefault()
    try {
        console.log("previus")
        const response = await axios.post("http://localhost:3001/pokemons", create);
        console.log(response)
        if (response) {
          alert("Producto creado con éxito");
        } else {
          alert("Error al crear el producto");
        }
    } catch (error) {
        console.log(error.message)
    }
}