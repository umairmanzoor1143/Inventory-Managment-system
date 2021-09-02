import { PRODUCTS_DATA } from "../constent";
const initialState = {
  Products: [],
  Product: undefined,
  ProductsVariation : []
};


export default function ProductsReduce(state = initialState, action) {
    switch (action.type) {
      case PRODUCTS_DATA.PRODUCTS:
        return { ...state, Products:  action.payload.data.data };
        case PRODUCTS_DATA.PRODUCTS_VARIATION:
        return { ...state, ProductsVariation:  action.payload.data.data };
      case PRODUCTS_DATA.PRODUCT_UPDATE:
        return { ...state, Product: action.payload.data.data };
      case PRODUCTS_DATA.RESET_PRODUCT_RESET_STATE:
        return {
            Products: [],
            Product: undefined,
            ProductsVariation : [],
        };
      default:
        return state;
    }
  }