import {FATCH_DATA} from '../constent'

import axios from "axios";

export const suppliersAction = () => {
    return async function suppliersCallBack (Dispatch, getState) {
        const response = await axios.get("http://localhost:4040/Suppliers");
        Dispatch({type : FATCH_DATA.SUPPLIERS, payload : response})
    }
}
export const cetagorysAction = () => {
    return async function cetagorysCallBack (Dispatch, getState) {
        const response = await axios.get("http://localhost:4040/categories/nested");
        Dispatch({type : FATCH_DATA.CETAGORY, payload : response})
    }
}

