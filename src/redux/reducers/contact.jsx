import {
  CONTACT_REQUEST,
  GET_CONTACT_SUCCESS,
  GET_CONTACT_FAIL,
} from "../actions/types";

const initialState = {
  name: "",
  email_address: "",
  code_phone: "",
  phone: "",
  message: "",
  file: "",
};

export default function contact(state = initialState, action) {
  
  console.log(action);
  switch (action.type) {
    case CONTACT_REQUEST:
      return { loading: true, contact: [] };
      
    case GET_CONTACT_SUCCESS:
      return { loading: false, ...state, contact: action.payload};

    case GET_CONTACT_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
