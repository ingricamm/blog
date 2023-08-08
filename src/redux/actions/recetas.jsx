import axios from 'axios';
import {
    GET_RECETAS_LIST_SUCCESS,
    GET_RECETAS_LIST_FAIL,

} from "./types"

export const get_recetas_list = () => async dispatch => {

    const config = {
        headers: {
            'Accept': 'application/json'
        }
    };

    try{
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/recetas/`, config);

        if (res.status === 200) {
            dispatch({
                type: GET_RECETAS_LIST_SUCCESS,
                payload: res.data
            });
        } else {
            dispatch({
                type: GET_RECETAS_LIST_FAIL
            });
        }

    }catch {
        dispatch({
            type: GET_RECETAS_LIST_FAIL
        });
    }
}

export const get_recetas_list_page = () => async dispatch => {

    const config = {
        headers: {
            'Accept': 'application/json'
        }
    };

    try{
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/recetas/`, config);

        if (res.status === 200) {
            dispatch({
                type: GET_RECETAS_LIST_SUCCESS,
                payload: res.data
            });
        } else {
            dispatch({
                type: GET_RECETAS_LIST_FAIL
            });
        }

    }catch{
        dispatch({
            type: GET_RECETAS_LIST_FAIL
        });
    }
}




