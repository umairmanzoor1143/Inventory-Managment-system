import { BRANDS_DATA } from "../constent";

import axios from "axios";

export const brandsAction = () => {
    return async function  brandCallBack (Dispatch, getState) {
        const response = await axios.get("http://localhost:4040/brands");
        Dispatch({type : BRANDS_DATA.BRANS, payload : response})
    }
}

export const brandUpdateAction = (id) => {
    console.log(id)
    return async function brandUpdateCallBack (Dispatch, getState) {
        const response = await axios.get(`http://localhost:4040/brands/${id}`);
        Dispatch({type : BRANDS_DATA.BRAND_UPDATE, payload : response})
    }
}