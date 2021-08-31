import { OUTLETS_DATA } from "../constent";

import axios from "axios";

export const outletsAction = () => {
    return async function  outletsCallBack (Dispatch, getState) {
        const response = await axios.get("http://localhost:4040/outlets");
        Dispatch({type : OUTLETS_DATA.OUTLETS, payload : response})
    }
}


