import axios from "axios";
import { GET_DETAIL, GET_POKEMONS, GET_BY_NAME, GET_TYPES,FILTERDBAPI,FILTER_TYPE,ORDER_NAME,ORDER_ATTACK,CLEAN_DETAIL } from "./types";

export const getPokemons = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get("http://localhost:3001/products");


            return dispatch({
                type: GET_POKEMONS,
                payload: data
            })
        } catch (error) {
            console.log(error.message)
        }
    }
}

    export function getProductsById(id){
        return async (dispatch) => {
            try {
                const infoAPI = (await axios.get(`http://localhost:3001/products/${id}`)).data;
                return dispatch(
                    { type: GET_DETAIL_PRODUCT, 
                        payload: infoAPI
                    });
            } catch (error) {
                console.log(error.response.data.error);
            }
        }
    }

    export function getByName(name){
        return async (dispatch) => {
            try {
                const infoAPI = await axios.get(`http://localhost:3001/products/?name=${name}`);
                return dispatch(
                    { 
                        type: GET_BY_NAME,  
                        payload: infoAPI.data
                    });
            } catch (error) {
                console.log(error.response.data.error);
            }
        }
    }

    export function postProduct(product){
        return async (dispatch) => {
            try {
                const infoAPI = (await axios.post(`http://localhost:3001/products`, product)).data;
                alert('Producto creado!')
                return dispatch(
                    { 
                        type: CREATE_PRODUCT,  
                        payload: infoAPI
                    });
            } catch (error) {
                alert('Faltan datos?')
                console.log(error.response.data.error);
            }
        }
    }

    export function getAllBrands(brand){
        return async (dispatch) => {
            try {
                const infoAPI = (await axios.get(`http://localhost:3001/?brand=${brand}`)).data;
                return dispatch(
                    { 
                        type: GET_ALL_BRANDS,  
                        payload: infoAPI
                    });
            } catch (error) {
                console.log(error.response.data.error);
            }
        }
    }

    //ACTIONS DE FILTRADO

    export const cleanDetail = () =>{
        return {
            type: CLEAN_DETAIL
        };
    }

    export const filterByBrand = (brand) => {
        return{
            type: FILTER_BY_BRAND,
            payload: brand
        }
    }

    export const filterByCategory = (source) => {
        return{
            type: FILTER_BY_CATEGORY,
            payload: source
        }
    }
    

    export const orderProducts = (order) => {
        return{
            type: ORDER_PRODUCTS,
            payload: order
        }
    }

    export const orderPrice = (order) => {
        return{
            type: ORDER_PRICE,
            payload: order
        }
    }

