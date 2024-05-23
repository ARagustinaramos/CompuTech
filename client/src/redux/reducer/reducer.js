import { 
    ADD_TO_CART, 
    GET_PRODUCTS, 
    GET_DETAIL, 
    REMOVE_FROM_CART, 
    UPDATE_CART_ITEM_QUANTITY, 
    CLEAN_DETAIL, 
    GET_BY_NAME, 
    GET_TYPES, 
    FILTERDBAPI, 
    FILTER_TYPE, 
    ORDER_NAME, 
    ORDER_ATTACK 
} from "../actions/types";

import { loadCartFromLocalStorage, saveCartToLocalStorage } from '../reducer/localStorageHelpers';

const initialState = {
    allProducts: [],
    copyProducts: [],
    producto: [],
    productDetail: {},
    types: [],
    items: loadCartFromLocalStorage(),
};

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...state,
                allProducts: action.payload,
                copyProducts: [...action.payload]
            };
        case GET_DETAIL:
            return {
                ...state,
                productDetail: action.payload
            };
        case ADD_TO_CART:
            const existingItemIndex = state.items.findIndex(item => item.id_Product === action.payload.id_Product);
            let updatedItems;
            if (existingItemIndex >= 0) {
                updatedItems = state.items.map((item, index) =>
                    index === existingItemIndex
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                updatedItems = [...state.items, { ...action.payload, quantity: 1 }];
            }
            saveCartToLocalStorage(updatedItems);
            return {
                ...state,
                items: updatedItems
            };
        case REMOVE_FROM_CART:
            const updatedItemsAfterRemoval = state.items.filter(item => item.cartItemId !== action.payload);
            saveCartToLocalStorage(updatedItemsAfterRemoval);
            return {
                ...state,
                items: updatedItemsAfterRemoval
            };
        case UPDATE_CART_ITEM_QUANTITY:
            const updatedItemsAfterQuantityChange = state.items.map(item =>
                item.cartItemId === action.payload.itemId
                    ? { ...item, quantity: action.payload.quantity }
                    : item
            );
            saveCartToLocalStorage(updatedItemsAfterQuantityChange);
            return {
                ...state,
                items: updatedItemsAfterQuantityChange
            };
        case CLEAN_DETAIL:
            return {
                ...state,
                productDetail: {}
            };
        case GET_BY_NAME:
            return {
                ...state,
                copyProducts: action.payload
            };
        case GET_TYPES:
            return {
                ...state,
                types: action.payload
            };
        case FILTERDBAPI:
            if (action.payload === "db") {
                const result = state.allProducts.filter((e) => e.created);
                return {
                    ...state,
                    copyProducts: result
                };
            } else if (action.payload === "api") {
                const result = state.allProducts.filter((e) => !e.created);
                return {
                    ...state,
                    copyProducts: result
                };
            } else {
                return {
                    ...state,
                    copyProducts: state.allProducts
                };
            }
        case FILTER_TYPE:
            const filterTypes = action.payload === "all"
                ? state.copyProducts
                : state.copyProducts.filter((p) => p.Types.includes(action.payload));
            return {
                ...state,
                copyProducts: filterTypes
            };
        case ORDER_NAME:
            if (action.payload === "a-z") {
                const orderByName = [...state.copyProducts].sort((a, b) => a.nombre.localeCompare(b.nombre));
                return {
                    ...state,
                    copyProducts: orderByName
                };
            } else if (action.payload === "z-a") {
                const orderByName = [...state.copyProducts].sort((a, b) => b.nombre.localeCompare(a.nombre));
                return {
                    ...state,
                    copyProducts: orderByName
                };
            }
        case ORDER_ATTACK:
            const sortAttack = action.payload === "min"
                ? [...state.copyProducts].sort((a, b) => a.ataque - b.ataque)
                : [...state.copyProducts].sort((a, b) => b.ataque - a.ataque);
            return {
                ...state,
                copyProducts: sortAttack
            };
        default:
            return { ...state };
    }
}

export default rootReducer;