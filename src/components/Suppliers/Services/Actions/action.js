import { SUPPLIERS_DATA } from "../constent";

import axios from "axios";

export const SuppliersAction = () => {
    return async function  SuppliersCallBack (Dispatch, getState) {
        const response = await axios.get("http://localhost:4040/suppliers");
        Dispatch({type : SUPPLIERS_DATA.SUPPLIERS, payload : response})
    }
}

export const SuppliersUpdateAction = (id) => {
    console.log(id)
    return async function SuppliersUpdateCallBack (Dispatch, getState) {
        const response = await axios.get(`http://localhost:4040/suppliers/${id}`);
        Dispatch({type : SUPPLIERS_DATA.SUPPLIERS_UPDATE, payload : response})
    }
}

