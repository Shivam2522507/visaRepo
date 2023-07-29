import axios from "axios";
import {
    CONTACT_USER_REQUEST,
    CONTACT_USER_SUCCESS,
    CONTACT_USER_FAIL,
    ALL_CONTACT_REQUEST,
    ALL_CONTACT_SUCCESS,
    ALL_CONTACT_FAIL,
    CLEAR_ERRORS,
  } from "../constants/contactConstants";
  
//CONTACT
export const conatctAction = (contactData) => async (dispatch) => {
    try {
      dispatch({ type: CONTACT_USER_REQUEST });
      const config = { headers: { "Content-Type": "application/json" } };
      axios.defaults.withCredentials = true;
      const { data } = await axios.post(
        `http://localhost:8000/api/contact`,
        contactData,
        config
      );
      dispatch({ type: CONTACT_USER_SUCCESS, payload: data.conatct });
    } catch (error) {
      dispatch({
        type: CONTACT_USER_FAIL,
        payload: error.response.data.message,
      });
    }
  };


  export const getAllContact = () => async (dispatch) => {
    try {
      dispatch({ type: ALL_CONTACT_REQUEST });
  
      const {data} = await axios.get(
        "http://localhost:8000/api/getContact"
      );
      
      dispatch({
        type: ALL_CONTACT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ALL_CONTACT_FAIL,
        payload: error.response.data.message,
      });
    }
  };
  

  //clearing error
export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
  };
  