import { CETAGORIES_DATA } from "../constent";

import axios from "axios";

export const CetagoriesAction = () => {
    return async function  CetagoriesCallBack (Dispatch, getState) {
        const response = await axios.get("http://localhost:4040/categories/nested");
        Dispatch({type : CETAGORIES_DATA.CETAGORIES, payload : response})
    }
}

export const CetagorieUpdateAction = (id) => {
    console.log(id)
    return async function CetagorieUpdateCallBack (Dispatch, getState) {
        const response = await axios.get(`http://localhost:4040/brands/${id}`);
        Dispatch({type : CETAGORIES_DATA.CETAGORIES_UPDATE, payload : response})
    }
}

