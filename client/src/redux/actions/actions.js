import axios from "axios";
import {
    GET_DETAIL,
    GET_PRODUCTS,
    GET_BY_NAME,
    GET_TYPES,
    FILTERDBAPI,
    FILTER_TYPE,
    ORDER_NAME,
    ORDER_ATTACK,
    CLEAN_DETAIL,
    SET_FILTER,
    ADD_TO_CART,
    REMOVE_FROM_CART,
    UPDATE_CART_ITEM_QUANTITY,
    SET_FILTER_PRODUCTS,
    DELETE_PRODUCT,
    SET_ALL_PRODUCTS,
    SET_CATEGORY_FILTER,
    SET_BRAND_FILTER,
    SET_CART_ITEMS,
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
            cartItemId: Math.random().toString(36).substr(2, 9) // Generates a unique ID for the cartItemId
        }
    };
};

export const updateCartItemQuantity = (itemId, quantity) => ({
    type: UPDATE_CART_ITEM_QUANTITY,
    payload: { itemId, quantity },
});

export const removeFromCart = (cartItemId) => ({
    type: REMOVE_FROM_CART,
    payload: cartItemId
});

export const setCartItems = (items) => ({
    type: SET_CART_ITEMS,
    payload: items
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

export const getByName = (nombre) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`http://localhost:3001/pokemons?nombre=${nombre}`);
            return dispatch({
                type: GET_BY_NAME,
                payload: data
            });
        } catch (error) {
            console.log(error.message);
        }
    };
};

export const getTypes = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get('http://localhost:3001/types/', {});
            return dispatch({
                type: GET_TYPES,
                payload: data
            });
        } catch (error) {
            console.log(error.message);
        }
    };
};

export const filterDbApi = (value) => {
    return {
        type: FILTERDBAPI,
        payload: value
    };
};

export const filterType = (payload) => {
    return {
        type: FILTER_TYPE,
        payload
    };
};

export const orderName = (order) => {
    return {
        type: ORDER_NAME,
        payload: order
    };
};

export const orderAttack = (payload) => {
    return {
        type: ORDER_ATTACK,
        payload
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
