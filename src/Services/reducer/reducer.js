import { FATCH_DATA } from '../constent'
const initialState =  {};

export function suppliersReduce(state = initialState, action) {
    switch (action.type) {
        case FATCH_DATA.SUPPLIERS:
            return{ ...state, suppliers : action.payload.data.data};
              
        default:
            return state
    }


}
export function cetagorysReduce(state = initialState, action) {
    switch (action.type) {
        case FATCH_DATA.CETAGORY:
            return{ ...state, cetagory : action.payload.data.data};
              
        default:
            return state
    }


}

