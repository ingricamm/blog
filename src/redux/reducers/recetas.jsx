import {  
    GET_RECETAS_LIST_FAIL, 
    GET_RECETAS_LIST_SUCCESS 
} from "../actions/types";

const initialState = {
  recetas: null,
};

export default function recetas(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case GET_RECETAS_LIST_SUCCESS:
        return {
            ...state,
           recetas: payload.recetas,

        }
        case GET_RECETAS_LIST_FAIL:
        return {
            ...state,
            recetas: null,
   

        }
        default:
            return state
    }
}
