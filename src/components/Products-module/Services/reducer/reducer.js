import { PRODUCTS_DATA } from "../constent";
const initialState = {
  Products: [],
  Product: [],
  ProductsVariation : []
};


export default function ProductsReduce(state = initialState, action) {
    switch (action.type) {
      case PRODUCTS_DATA.PRODUCTS:
        return { ...state, Products:  action.payload.data.data };
        case PRODUCTS_DATA.PRODUCTS_VARIATION:
        return { ...state, ProductsVariation:  action.payload.data.data };
      case PRODUCTS_DATA.PRODUCT_DATA_UPDATE:
        return { ...state, Product: action.payload.data.data };
      case PRODUCTS_DATA.PRODUCT_RESET_STATE:
        return {
            Products: [],
            Product: [],
            ProductsVariation: [],
        };
      default:
        return state;
    }
  }