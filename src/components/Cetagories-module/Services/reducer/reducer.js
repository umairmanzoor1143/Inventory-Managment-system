import { CETAGORIES_DATA } from "../constent";
const initialState = {
  Cetagories: [],
  Cetagorie: undefined,
};
const CascaderStructure = (data: any) => {
  return data.map((item: any) => {
    return {
      ...item,
      value: item.id,
      label: item.name,
      children: item.childrens?.length ? CascaderStructure(item.childrens) : item.childrens,
    };
  });
};
export default function CetagoriesReduce(state = initialState, action) {
  switch (action.type) {
    case CETAGORIES_DATA.CETAGORIES:
      return { ...state, Cetagories:  action.payload.data.data };
      case CETAGORIES_DATA.PRODUCTS_CETAGORIES:
      return { ...state, Cetagories:  CascaderStructure(action.payload.data.data) };
    case CETAGORIES_DATA.CETAGORIE_UPDATE:
      return { ...state, Cetagorie: action.payload.data.data };
    case CETAGORIES_DATA.RESET_CETAGORIES_STATE:
      return {
        Cetagories: [],
        Cetagorie: undefined,
      };
    default:
      return state;
  }
}