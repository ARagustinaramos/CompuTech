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
    SET_FILTER,
} from "../actions/types"


let initialState = {
    allProducts: [],
    copyProducts: [],
    producto: [],
    productDetail: {},
    types: [],
    items: [],
    BrandIdBrand: '',
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
        case REMOVE_FROM_CART:
            return {
                ...state,
                items: state.items.filter(item => item.id_Product !== action.payload)
            };
        case SET_FILTER:
            return {
              ...state,
              filter: action.payload,
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
                const orderByName = [...state.copyProducts].sort((a, b) => a.name.localeCompare(b.name));
                return {
                    ...state,
                    copyPokemons: orderByName
                }
            } else if (action.payload === "z-a") {
                const orderByName = [...state.copyProducts].sort((a, b) => b.name.localeCompare(a.name));
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