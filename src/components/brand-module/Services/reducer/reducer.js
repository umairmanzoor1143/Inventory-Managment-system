import { BRANDS_DATA } from "../constent";
const initialState = {
  brands: [],
  brand: undefined,
};

export default function BrandsReduce(state = initialState, action) {
  switch (action.type) {
    case BRANDS_DATA.BRANS:
      return { ...state, brands: action.payload.data.data };
    case BRANDS_DATA.BRAND_UPDATE:
      return { ...state, brand: action.payload.data.data };
    case BRANDS_DATA.RESET_STATE:
      return {
        brands: [],
        brand: undefined,
      };
    default:
      return state;
  }
}
