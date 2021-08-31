import { OUTLETS_DATA } from "../constent";
const initialState = {
  outlets: [],
};

export default function OutletsReduce(state = initialState, action) {
  switch (action.type) {
    case OUTLETS_DATA.OUTLETS:
      return { ...state, outlets: action.payload.data.data };
    case OUTLETS_DATA.RESET_STATE:
      return {
        outlets: [],
      };
    default:
      return state;
  }
}
