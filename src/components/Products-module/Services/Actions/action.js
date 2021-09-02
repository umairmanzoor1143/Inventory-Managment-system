import {PRODUCTS_DATA} from '../constent'

import axios from "axios";

export const ProductsAction = () => {
    return async function  ProductsCallBack (Dispatch, getState) {
        const response = await axios.get("http://localhost:4040/products");
        Dispatch({type : PRODUCTS_DATA.PRODUCTS, payload : response})
    }
}
export const ProductsVariationAction = (id) => {
    console.log(id);
    return async function  ProductsCallBack (Dispatch, getState) {
        const response = await axios.get(`http://localhost:4040/products/${id}/variations`);
        Dispatch({type : PRODUCTS_DATA.PRODUCTS_VARIATION, payload : response})
    }
}