import { CETAGORIES_DATA } from "../constent";

import axios from "axios";

export const CetagoriesAction = () => {
    return async function  CetagoriesCallBack (Dispatch, getState) {
        const response = await axios.get("http://localhost:4040/categories/nested");
        Dispatch({type : CETAGORIES_DATA.CETAGORIES, payload : response})
    }
}
export const ProCetagoriesAction = () => {
    return async function  PROCetagoriesCallBack (Dispatch, getState) {
        const response = await axios.get("http://localhost:4040/categories/nested");
        Dispatch({type : CETAGORIES_DATA.PRODUCTS_CETAGORIES, payload : response})
    }
}
export const CetagorieUpdateAction = (id) => {
    console.log(id)
    return async function CetagorieUpdateCallBack (Dispatch, getState) {
        const response = await axios.get(`http://localhost:4040/categories/${id}`);
        Dispatch({type : CETAGORIES_DATA.CETAGORIE_UPDATE, payload : response})
    }
}

