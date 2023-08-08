import Axios from "axios";

import {
  CONTACT_REQUEST,
  GET_CONTACT_SUCCESS,
  GET_CONTACT_FAIL,
} from "./types";

export const get_contact_form = (contact) => async (dispatch) => {
  dispatch({ type: CONTACT_REQUEST, payload: contact });

  const config = {
    headers: {
      "Content-type": " application/x-www-form-urlencoded", 
      }
  };
  try {
    const { data } = await Axios.post(
      `${process.env.REACT_APP_API_URL}/api/contact/`,contact,
      config
    );
    console.log(data.data);

    dispatch({
      type: GET_CONTACT_SUCCESS,
      payload: contact,
    });

    console.log(`${process.env.REACT_APP_API_URL}/api/contact/`);
  } catch (error) {
    dispatch({
      type: GET_CONTACT_FAIL,
      payload: error.message,
    });
  }
};
