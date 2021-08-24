import {FATCH_DATA} from '../constent'

import axios from "axios";

export const brandAction = () => {
    return async function  brandCallBack (Dispatch, getState) {
        const response = await axios.get("http://localhost:4040/brands");
        Dispatch({type : FATCH_DATA.BRANS, payload : response})
    }
}
export const suppliersAction = () => {
    return async function  brandCallBack (Dispatch, getState) {
        const response = await axios.get("http://localhost:4040/Suppliers");
        Dispatch({type : FATCH_DATA.SUPPLIERS, payload : response})
    }
}