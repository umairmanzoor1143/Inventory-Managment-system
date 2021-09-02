import { ATTRIBUTES_DATA } from "../constent";

import axios from "axios";

export const AttributesAction = () => {
    return async function  AttributesCallBack (Dispatch, getState) {
        const response = await axios.get("http://localhost:4040/attributes");
        Dispatch({type : ATTRIBUTES_DATA.ATTRIBUTES, payload : response})
    }
}

// export const CetagorieUpdateAction = (id) => {
//     console.log(id)
//     return async function CetagorieUpdateCallBack (Dispatch, getState) {
//         const response = await axios.get(`http://localhost:4040/categories/${id}`);
//         Dispatch({type : CETAGORIES_DATA.CETAGORIE_UPDATE, payload : response})
//     }
// }

