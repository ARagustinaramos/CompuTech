import axios from 'axios';

//ACTION TYPES
import { GET_ALL_PRODUCTS,
    GET_DETAIL_PRODUCT,
    GET_ALL_BRANDS,
    CLEAN_DETAIL,
    FILTER_BY_BRAND,
    FILTER_BY_CATEGORY,
    SEARCH_PRODUCTS,
    CREATE_PRODUCT,
    ORDER_PRODUCTS
             } from "../actions/types";

    //ACTIONS A LA DB
    export function getAllProducts(){
        return async (dispatch) => {
            try {
                const infoAPI = await axios.get(`http://localhost:3001/products`);
                return dispatch(
                    { 
                        type: GET_ALL_PRODUCTS, 
                        payload: infoAPI.data
                    });
            } catch (error) {
                console.log(error.response.data.error);
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
                        type: SEARCH_PRODUCTS,  
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