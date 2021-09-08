import { SUPPLIERS_DATA } from "../constent";
const initialState = {
  Suppliers: [],
  Supplier: undefined,
};

export default function SuppliersReduce(state = initialState, action) {
  switch (action.type) {
    case SUPPLIERS_DATA.SUPPLIERS:
      return { ...state, Suppliers:  action.payload.data.data };
    case SUPPLIERS_DATA.SUPPLIERS_UPDATE:
      return { ...state, Supplier: action.payload.data.data };
    case SUPPLIERS_DATA.RESET_SUPPLIERS_STATE:
      return {
        Suppliers: [],
        Supplier: undefined,
      };
    default:
      return state;
  }
}