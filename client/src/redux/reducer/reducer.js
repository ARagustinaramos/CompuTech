import {
    ADD_TO_CART,
    CREATE_POKEMON,
    GET_BY_NAME,
    GET_DETAIL,
    GET_PRODUCTS,
    GET_TYPES,
    FILTERDBAPI,
    FILTER_TYPE,
    ORDER_NAME,
    ORDER_ATTACK,
    CLEAN_DETAIL,
    REMOVE_FROM_CART,
    UPDATE_CART_ITEM_QUANTITY
} from "../actions/types"

import { loadCartFromLocalStorage, saveCartToLocalStorage } from '../reducer/localStorageHelpers';


let initialState = {
    allProducts: [],
    copyProducts: [],
    producto: [],
    productDetail: {},
    types: [],
    items: loadCartFromLocalStorage(),


}

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
            return {
                ...state,
                items: [...state.items, action.payload]
            };
            case 'REMOVE_FROM_CART':
                return {
                    ...state,
                    items: state.items.filter(item => item.cartItemId !== action.payload)
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
                items: updatedItemsAfterQuantityChange,
            };
        case CLEAN_DETAIL:
            return {
                ...state,
                pokemonDetail: {}
            }
        case GET_BY_NAME:
            return {
                ...state,
                copyPokemons: action.payload
            }
        case GET_TYPES:
            return {
                ...state,
                types: action.payload
            }
        case FILTERDBAPI:
            console.log("Enter")
            if (action.payload === "db") {
                const result = state.allProducts.filter((e) => e.created)
                return {
                    ...state,
                    copyPokemons: result
                }
            } if (action.payload === "api") {
                const result = state.allProducts.filter((e) => e.created === false)
                return {
                    ...state,
                    copyPokemons: result
                }
            } else {
                return {
                    ...state,
                    copyPokemons: state.allProducts
                }
            }
        case FILTER_TYPE:
            const filterTypes = action.payload === "all"
                ? state.copyPokemons
                : state.copyPokemons.filter((p) => p.Types.includes(action.payload))
            return {
                ...state,
                copyPokemons: filterTypes
            }
        case ORDER_NAME:
            if (action.payload === "a-z") {
                const orderByName = [...state.copyPokemons].sort((a, b) => a.nombre.localeCompare(b.nombre))
                return {
                    ...state,
                    copyPokemons: orderByName
                }
            } else if (action.payload === "z-a") {
                const orderByName = [...state.copyPokemons].sort((a, b) => b.nombre.localeCompare(a.nombre))
                return {
                    ...state,
                    copyPokemons: orderByName
                }
            }
        case ORDER_ATTACK:
            const sortAttack = action.payload === "min"
                ? [...state.copyPokemons].sort((a, b) => a.ataque - b.ataque)
                : [...state.copyPokemons].sort((a, b) => b.ataque - a.ataque)
            return {
                ...state,
                copyPokemons: sortAttack
            }
        case CREATE_POKEMON:
            return {
                ...state,
            }
        default:
            return { ...state }
    }
}

export default rootReducer