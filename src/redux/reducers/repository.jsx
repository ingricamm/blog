import {  
    GET_REPOSITORY_LIST_SUCCESS,
    GET_REPOSITORY_LIST_FAIL,
} from "../actions/types";

const initialState = {
  repository_list: null,
  count: null,
  next: null,
  previous: null,
};

export default function repository(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case GET_REPOSITORY_LIST_SUCCESS:
        return {
            ...state,
            repository_list: payload.results.repositorys,
            count: payload.count,
            next: payload.next,
            previous: payload.previous,

        }
        case GET_REPOSITORY_LIST_FAIL:
        return {
            ...state,
            repository_list: null,
            count: null,
            next: null,
            previous: null,
   

        }
        default:
            return state
    }
}
