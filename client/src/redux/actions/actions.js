import axios from "axios";
import {
    GET_DETAIL,
    GET_PRODUCTS,
    ORDER_NAME,
    CLEAN_DETAIL,
    SET_FILTER,
    ADD_TO_CART,
    REMOVE_FROM_CART,
    UPDATE_CART_ITEM_QUANTITY,
    SET_FILTER_PRODUCTS,
    DELETE_PRODUCT,
    SET_ALL_PRODUCTS,
    SET_CATEGORY_FILTER,
    SET_BRAND_FILTER
    
    
} from "./types";

export const getProducts = () => async (dispatch) => {
    try {
      const response = await fetch('http://localhost:3001/products');
      const data = await response.json();
      dispatch(setAllProducts(data));
    } catch (error) {
      console.error('Error fetching products:', error);
    }
};

export const setAllProducts = (products) => ({
    type: SET_ALL_PRODUCTS,
    payload: products,
  });

  export const setCategoryFilter = (category) => ({
    type: SET_CATEGORY_FILTER,
    payload: category,
  });

export const setFilterProducts = (products) => ({
    type: SET_FILTER_PRODUCTS,
    payload: products,
  });

  export const setBrandFilter = (brand) => ({
    type: SET_BRAND_FILTER,
    payload: brand,
  });


export const addToCart = (product) => {
    return {
        type: ADD_TO_CART,
        payload: {
            ...product,
            cartItemId: Math.random().toString(36).substr(2, 9) // Genera un ID único para el cartItemId
        }
    };
};

export const updateCartItemQuantity = (itemId, quantity) => ({
    type: UPDATE_CART_ITEM_QUANTITY,
    payload: { itemId, quantity },
});

export const removeFromCart = (cartitemId) => ({
    type: REMOVE_FROM_CART,
    payload: cartitemId
});

export const getDetail = (id) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`http://localhost:3001/products/${id}`);
            return dispatch({
                type: GET_DETAIL,
                payload: data
            });
        } catch (error) {
            console.log(error.message);
        }
    };
};

export const orderName = (order) => {
    return {
        type: ORDER_NAME,
        payload: order
    };
};


export const cleanDetail = () => {
    return {
        type: CLEAN_DETAIL,

    }
}
export const setFilter = (filter) => ({
    type: SET_FILTER,
    payload: filter,
});

export const deleteProduct = (id) => {
    return {
        type: DELETE_PRODUCT,
        payload: id
    };
};