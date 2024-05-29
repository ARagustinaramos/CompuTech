import {
  ADD_TO_CART,
  GET_PRODUCTS,
  GET_DETAIL,
  REMOVE_FROM_CART,
  UPDATE_CART_ITEM_QUANTITY,
  CLEAN_DETAIL,
  GET_BY_NAME,
  ORDER_NAME,
  SET_FILTER,
  DELETE_PRODUCT,
  SET_FILTER_PRODUCTS,
  SET_ALL_PRODUCTS,
  SET_CATEGORY_FILTER, 
  SET_BRAND_FILTER
} from "../actions/types";

import {
  loadCartFromLocalStorage,
  saveCartToLocalStorage,
} from "../reducer/localStorageHelpers";

const initialState = {
  allProducts: [],
  copyProducts: [],
  producto: [],
  productDetail: {},
  items: loadCartFromLocalStorage(),
  BrandIdBrand: "",
  filteredProducts: [],
  categoryFilter: '',
  brandFilter: '',
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        allProducts: action.payload,
        copyProducts: [...action.payload],
      };
    case GET_DETAIL:
      return {
        ...state,
        productDetail: action.payload,
      };
      case SET_ALL_PRODUCTS:
      return {
        ...state,
        allProducts: action.payload,
      };
      case SET_CATEGORY_FILTER:
      return {
        ...state,
        categoryFilter: action.payload,
      };
    case SET_BRAND_FILTER:
      return {
        ...state,
        brandFilter: action.payload,
      };
    case SET_FILTER_PRODUCTS:
      return {
        ...state,
        filteredProducts: action.payload,
      };

    case ADD_TO_CART:
      const existingItemIndex = state.items.findIndex(
        (item) => item.id_Product === action.payload.id_Product
      );
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
        items: updatedItems,
      };
    case REMOVE_FROM_CART:
      const updatedItemsAfterRemoval = state.items.filter(
        (item) => item.cartItemId !== action.payload
      );
      saveCartToLocalStorage(updatedItemsAfterRemoval);
      return {
        ...state,
        items: updatedItemsAfterRemoval,
      };
    case UPDATE_CART_ITEM_QUANTITY:
      const updatedItemsAfterQuantityChange = state.items.map((item) =>
        item.cartItemId === action.payload.itemId
          ? { ...item, quantity: action.payload.quantity }
          : item
      );
      saveCartToLocalStorage(updatedItemsAfterQuantityChange);
      return {
        ...state,
        items: updatedItemsAfterQuantityChange,
      };
    case SET_FILTER:
      return {
        ...state,
        filter: action.payload,
      };

    case CLEAN_DETAIL:
      return {
        ...state,
        productDetail: {},
      };
    case GET_BY_NAME:
      return {
        ...state,
        copyProducts: action.payload,
      };


    case ORDER_NAME:
      if (action.payload === "a-z") {
        const orderByName = [...state.copyProducts].sort((a, b) =>
          a.name.localeCompare(b.name)
        );
        return {
          ...state,
          copyProducts: orderByName,
        };
      } else if (action.payload === "z-a") {
        const orderByName = [...state.copyProducts].sort((a, b) =>
          b.name.localeCompare(a.name)
        );
        return {
          ...state,
          copyProducts: orderByName,
        };
      }
    case DELETE_PRODUCT:
      return {
        ...state,
        allProducts: state.allProducts.filter(
          (product) => product.id !== action.payload
        ),
        copyProducts: state.copyProducts.filter(
          (product) => product.id !== action.payload
        ),
      };
    default:
      return { ...state };
  }
}

export default rootReducer;