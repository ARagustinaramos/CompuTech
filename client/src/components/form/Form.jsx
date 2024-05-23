import { useState } from 'react';
import axios from 'axios';

export default function ProductForm() {

  // Cloudinary settings
  const preset = 'presetComputech'; 
  const cloudName = 'damfsltm2';
  const url = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;

  const [url_img, setUrl_img] = useState('');

  console.log('url de la imagen cloudinary', url_img);

  const changeUploadImage = async (e) => {
    const file = e.target.files[0];
    console.log(file);

    const data = new FormData();
    data.append('file', file);
    data.append('upload_preset', preset);

    try {
      const response = await axios.post(url, data);
      console.log(response.data);
      setUrl_img(response.data.secure_url);
    } catch (error) {
      alert('Error al subir la imagen');
      console.error(error);
    }
  };

  // Reset image
  const deleteImage = () => {
    setUrl_img('');
  };

  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
    stock: "",
    brand: "",
    category: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProduct({
      ...product,
      [name]: value
    });
  };

  const validateForm = () => {
    let isValid = true;
    let errorMessage = '';

    if (!product.name || !product.description || !product.price || !url_img || !product.stock || !product.brand || !product.category) {
      isValid = false;
      errorMessage += "Todos los campos son obligatorios\n";
    }
    if (isNaN(product.price)) {
      isValid = false;
      errorMessage += "El precio debe ser un número\n";
    }
    if (isNaN(product.stock)) {
      isValid = false;
      errorMessage += "El stock debe ser un número\n";
    }

    if (!isValid) {
      alert(errorMessage);
    }

    return isValid;
  };

  const handleSave = async (event) => {
    event.preventDefault();
    if (validateForm()) {

      const parsedProduct = {
        ...product,
        price: parseFloat(product.price),
        stock: parseInt(product.stock, 10),
        image: url_img.split(',').map(img => img.trim())
      };
  
      try {
        const response = await fetch('http://localhost:3001/products', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(parsedProduct),
        });
  
        if (response.ok) {
          alert('Producto guardado correctamente');
          setProduct({
            name: "",
            description: "",
            price: "",
            image: "",
            stock: "",
            brand: "",
            category: ""
          });
          setUrl_img('')
        } else {
          const errorData = await response.json();
          alert(`Error al guardar el producto: ${errorData.message}`);
        }
      } catch (error) {
        console.error('Error:', error);
        alert('Error al guardar el producto');
      }
    }
  };
  

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Añade un producto</h1>
        <form onSubmit={handleSave}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre</label>
            <input
              type="text"
              id="name"
              name="name"
              value={product.name}
              onChange={handleChange}
              className="mt-1 p-2 w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">Descripción</label>
            <textarea
              id="description"
              name="description"
              value={product.description}
              onChange={handleChange}
              className="mt-1 p-2 w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue500 h-32 resize-none overflow-y-auto focus:outline-none focus:ring focus:border-blue-500"
            ></textarea>
          </div>
          <div className="mb-4">
            <label htmlFor="price" className="block text-sm font-medium text-gray-700">Precio</label>
            <input
              type="text"
              id="price"
              name="price"
              value={product.price}
              onChange={handleChange}
              className="mt-1 p-2 w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="image" className="block text-sm font-medium text-gray-700">Imagen</label>
            <input
              type="file"
              accept="image/*"
              id="image"
              name="image"
              onChange={changeUploadImage}
              className="mt-1 p-2 w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
            {url_img && (
              <div>
                <img src={url_img} alt="Uploaded" className="mt-2" />
                <button
                  type="button"
                  className="text-white bg-red-500 hover:bg-red-600 px-4 py-2 rounded mt-2"
                  onClick={deleteImage}
                >
                  Eliminar imagen
                </button>
              </div>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="stock" className="block text-sm font-medium text-gray-700">Stock</label>
            <input
              type="number"
              id="stock"
              name="stock"
              value={product.stock}
              onChange={handleChange}
              className="mt-1 p-2 w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="brand" className="block text-sm font-medium text-gray-700">Marca</label>
            <input
              type="text"
              id="brand"
              name="brand"
              value={product.brand}
              onChange={handleChange}
              className="mt-1 p-2 w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="category" className="block text-sm font-medium text-gray-700">Categoría</label>
            <input
              type="text"
              id="category"
              name="category"
              value={product.category}
              onChange={handleChange}
              className="mt-1 p-2 w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
