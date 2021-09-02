import { ATTRIBUTES_DATA } from "../constent";
const initialState = {
  Attributes: [],
  Attribute: undefined,
};

export default function AttributesReduce(state = initialState, action) {
  switch (action.type) {
    case ATTRIBUTES_DATA.ATTRIBUTES:
      return { ...state, Attributes:  action.payload.data.data };
    case ATTRIBUTES_DATA.ATTRIBUTES_UPDATE:
      return { ...state, Attribute: action.payload.data.data };
    case ATTRIBUTES_DATA.RESET_ATTRIBUTES_STATE:
      return {
        Attributes: [],
        Attribute: undefined,
      };
    default:
      return state;
  }
}