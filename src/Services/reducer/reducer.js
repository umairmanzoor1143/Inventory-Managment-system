import { FATCH_DATA } from '../constent'
const initialState =  {};

export default function BrandsReduce(state = initialState, action) {
    switch (action.type) {
        case FATCH_DATA.BRANS:
            return{ ...state, Brands : action.payload.data.data};
              
        default:
            return state
    }


}
export function suppliersReduce(state = initialState, action) {
    switch (action.type) {
        case FATCH_DATA.SUPPLIERS:
            return{ ...state, suppliers : action.payload.data.data};
              
        default:
            return state
    }


}