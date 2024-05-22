import {
    GET_ALL_PRODUCTS,
    GET_DETAIL_PRODUCT,
    GET_ALL_BRANDS,
    CLEAN_DETAIL,
    FILTER_BY_BRAND,
    FILTER_BY_CATEGORY,
    CREATE_PRODUCT,
    GET_BY_NAME,
    ORDER_PRODUCTS,
    ORDER_PRICE
} from "../actions/types"


let initialState = {
    allProducts: [],
    copyProducts: [],
    pokemon: [],
    pokemonDetail: {},
    types: []

}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_PRODUCTS:
            return {
                ...state,
                allProducts: action.payload,
                copyProducts: [...action.payload]
            }
        case GET_DETAIL_PRODUCT:
            return {
                ...state,
                pokemonDetail: action.payload
            }
        case CLEAN_DETAIL:
            return {
                ...state,
                pokemonDetail: {}
            }
        case GET_BY_NAME:
            return {
                ...state,
                copyProducts: action.payload
            }
        case GET_ALL_BRANDS:
            return {
                ...state,
                types: action.payload
            }
        case FILTER_BY_BRAND:
            const filterBrands = action.payload === "all" ? state.copyProducts : state.copyProducts.filter((p) => p.brands.includes(action.payload))
            return {
                ...state,
                copyProducts: filterBrands
            }
        case ORDER_PRODUCTS:
            if (action.payload === "a-z") {
                const orderByName = [...state.copyProducts].sort((a, b) => a.name.localeCompare(b.name))
                return {
                    ...state,
                    copyProducts: orderByName
                }
            } else if (action.payload === "z-a") {
                const orderByName = [...state.copyProducts].sort((a, b) => b.name.localeCompare(a.name))
                return {
                    ...state,
                    copyProducts: orderByName
                }
            }
        case ORDER_PRICE:
            const sortPrice = action.payload === "min"
                ? [...state.copyProducts].sort((a, b) => a.price - b.price)
                : [...state.copyProducts].sort((a, b) => b.price - a.price)
            return {
                ...state,
                copyProducts: sortPrice
            }
        case CREATE_PRODUCT:
            return {
                ...state,
            }
        default:
            return { ...state }
    }
}

export default rootReducer