import { CETAGORIES_DATA } from "../constent";
const initialState = {
  Cetagories: [],
  Cetagorie: undefined,
};

export default function CetagorieReduce(state = initialState, action) {
  switch (action.type) {
    case CETAGORIES_DATA.CETAGORIES:
      return { ...state, Cetagories:  action.payload.data.data };
    case CETAGORIES_DATA.CETAGORIES_UPDATE:
      return { ...state, Cetagorie: action.payload.data.data };
    case CETAGORIES_DATA.RESET_STATE:
      return {
        Cetagories: [],
        Cetagorie: undefined,
      };
    default:
      return state;
  }
}