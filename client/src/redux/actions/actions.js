import axios from "axios";
import {
  GET_DETAIL,
  GET_PRODUCTS,
  GET_USERS,
  CLEAN_DETAIL,
  SET_FILTER,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_CART_ITEM_QUANTITY,
  SET_FILTER_PRODUCTS,
  DELETE_PRODUCT,
  SET_ALL_PRODUCTS,
  SET_CATEGORY_FILTER,
  FILTER_BY_BRAND,
  FILTER_BY_CATEGORY,
  SET_BRANDS,
  SEARCH_PRODUCTS_BY_NAME,
  SET_CATEGORIES,
  SET_NAME_ORDER,
  SET_PRICE_ORDER,
  SET_CART_ITEMS,
  REVIEW_SENT_SUCCESS,
  REVIEW_SENT_ERROR,
  UPDATE_REVIEW_REQUEST,
  UPDATE_REVIEW_SUCCESS,
  UPDATE_REVIEW_ERROR,
  DELETE_REVIEW_REQUEST,
  DELETE_REVIEW_SUCCESS,
  DELETE_REVIEW_FAILURE,
  GET_ALL_REVIEW_USER,
  ADMIN_REVIEW,
  GET_PRODUCT_REVIEW,
  GET_USER_BY_ID,
  SET_USER_DATA
} from "./types";

export const getProducts = () => async (dispatch) => {
  try {
    const response = await fetch("http://localhost:3001/products");
    const data = await response.json();
    dispatch(setAllProducts(data));
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};
export const setNameOrder = (order) => ({
  type: SET_NAME_ORDER,
  payload: order,
});
export const setPriceOrder = (order) => ({
  type: SET_PRICE_ORDER,
  payload: order,
});
export const getBrands = () => async (dispatch) => {
  try {
    const response = await fetch("http://localhost:3001/brands");
    const data = await response.json();
    dispatch({ type: SET_BRANDS, payload: data });
  } catch (error) {
    console.error("Error fetching brands:", error);
  }
};
export const getCategories = () => async (dispatch) => {
  try {
    const response = await fetch("http://localhost:3001/categories");
    const data = await response.json();
    dispatch({ type: SET_CATEGORIES, payload: data });
  } catch (error) {
    console.error("Error fetching brands:", error);
  }
};

export const searchProductsByName = (name) => {
  return async (dispatch, getState) => {
    try {
      let response;
      if (name.trim() === "") {
        // Si el nombre está vacío, obtiene todos los productos
        response = await axios.get('http://localhost:3001/products');
      } else {
        // Busca productos por nombre
        response = await axios.get(`http://localhost:3001/products/name?name=${name}`);
      }

      if (response.data.length === 0) {
        // Si el resultado de la búsqueda está vacío, muestra un mensaje de alerta
        alert("No se encontraron productos con ese nombre");
      }

      const searchResults = response.data;

      dispatch({
        type: SEARCH_PRODUCTS_BY_NAME,
        payload: searchResults,
      });
    } catch (error) {
      console.error('Error searching products:', error);
    }
  };
};
export const setAllProducts = (products) => ({
  type: SET_ALL_PRODUCTS,
  payload: products,
});
export const setCategoryFilter = (category) => ({
  type: SET_CATEGORY_FILTER,
  payload: category,
});
export const resetFilters = () => ({
  type: RESET_FILTERS,
});
export const setFilterProducts = (products) => ({
  type: SET_FILTER_PRODUCTS,
  payload: products,
});
export const setBrandFilter = (brand) => ({
  type: FILTER_BY_BRAND,
  payload: brand,
});
export const filterByBrand = (brand) => {
  return {
    type: FILTER_BY_BRAND,
    payload: brand,
  };
};
export const filterByCategory = (category) => {
  return {
    type: FILTER_BY_CATEGORY,
    payload: category,
  }
}
export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: {
      ...product,
      cartItemId: Math.random().toString(36).substr(2, 9), // Genera un ID único para el cartItemId
    },
  };
};
export const updateCartItemQuantity = (itemId, quantity) => ({
  type: UPDATE_CART_ITEM_QUANTITY,
  payload: { itemId, quantity },
});
export const removeFromCart = (cartitemId) => ({
  type: REMOVE_FROM_CART,
  payload: cartitemId,
});
export const getDetail = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`http://localhost:3001/products/${id}`);
      return dispatch({
        type: GET_DETAIL,
        payload: data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};
export const cleanDetail = () => {
  return {
    type: CLEAN_DETAIL,
  };
};
export const setFilter = (filter) => ({
  type: SET_FILTER,
  payload: filter,
});

export const deleteProduct = (id, boolean) => {
  return async (dispatch) => {
    try {
      console.log("action:" + id, boolean)
      await axios.delete(`http://localhost:3001/products/delete/${id}`, {
        data: { exterminateProduct: boolean }

      });
    } catch (error) {
      console.error('Error deleting product:', error);
    }

  }
};
export const setCartItems = (items) => ({
  type: SET_CART_ITEMS,
  payload: items
});

export const getUsers = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get('http://localhost:3001/users/');
      return dispatch({
        type: GET_USERS,
        payload: data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};


//**********************USERS***************************
export const getUserById = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`http://localhost:3001/users/${id}`);
      return dispatch({
        type: GET_USER_BY_ID,
        payload: data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };

}
//**********************REVIEWS***************************

export const createReview = (formData) => {
  return async (dispatch) => {
    try {
      console.log("ESTO RECIBE ACTION FORMDATA:", formData);
      const response = await axios.post(`http://localhost:3001/reviews`, formData);
      console.log("Reseña guardada exitosamente:", response);

      dispatch(reviewPostSuccess(response));

      return response;
    } catch (error) {
      console.error("Error al guardar la reseña:", error);

      dispatch(reviewPostError(error));
      throw error;
    }
  };
};



export const setUserData = (userData) => ({
  type: SET_USER_DATA,
  payload: userData,
});

const reviewPostSuccess = (data) => ({
  type: REVIEW_SENT_SUCCESS,
  payload: data,
});

const reviewPostError = (error) => ({
  type: REVIEW_SENT_ERROR,
  payload: error,
});

export const updateReview = (id, updatedBody) => {
  return async (dispatch) => {
    try {
      dispatch({ type: UPDATE_REVIEW_REQUEST });

      console.log("ID recibido en la acción:", id);
      console.log("Cuerpo actualizado recibido en la acción:", updatedBody);

      const response = await axios.put(`http://localhost:3001/reviews/${id}`, {
        body: updatedBody,
      });

      console.log("Respuesta del servidor:", response.data);

      dispatch({ type: UPDATE_REVIEW_SUCCESS, payload: response.data });
      console.log("Review updated:", response.data);
    } catch (error) {
      dispatch({ type: UPDATE_REVIEW_ERROR, payload: error.message });
      console.error("Error updating review:", error);
    }
  };
};

export const deleteReview = (id) => {
  return async (dispatch) => {
    dispatch({ type: DELETE_REVIEW_REQUEST });

    try {
      await axios.delete(`http://localhost:3001/reviews/${id}`);

      dispatch({ type: DELETE_REVIEW_SUCCESS, payload: id });
    } catch (error) {
      dispatch({ type: DELETE_REVIEW_FAILURE, payload: error.message });
    }
  };
};
export function getAllReviewUser(data) {
  return async (dispatch) => {
    try {
      dispatch({
        type: GET_ALL_REVIEW_USER,
        payload: data,
      });
    } catch (error) {}
  };
}

