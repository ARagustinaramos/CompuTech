import React from 'react'
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';

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

import React, { useState } from 'react';

export default function ProductForm() {
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

    if (!product.name || !product.description || !product.price || !product.image || !product.stock || !product.brand || !product.category) {
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
        image: product.image.split(',').map(img => img.trim())  // Convertir imagen a array de strings
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
        <h1 className="text-3xl font-bold text-center mb-8">Añade un producto</h1>
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
              className="mt-1 p-2 w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 h-32 resize-none overflow-y-auto focus:outline-none focus:ring focus:border-blue-500"
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
              type="text"
              id="image"
              name="image"
              value={product.image}
              onChange={handleChange}
              className="mt-1 p-2 w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="URLs de las imágenes, separadas por comas"
            />
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