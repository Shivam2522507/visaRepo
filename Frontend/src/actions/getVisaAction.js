import {
    ADD_VISA_REQUEST,
    ADD_VISA_SUCCESS,
    ADD_VISA_FAIL,
    ADD_CO_VISA_REQUEST,
    ADD_CO_VISA_SUCCESS,
    ADD_CO_VISA_FAIL,
    CLEAR_ERRORS,
  } from "../constants/getVisaConstant";
  import axios from "axios";
  
  export const addVisaData = (visaData) => async (dispatch) => {
    try {
      dispatch({ type: ADD_VISA_REQUEST });
      const config = { headers: { "Content-Type": "multipart/form-data" } };
      axios.defaults.withCredentials = true;
      const { data } = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/uploadVisa`,
        visaData,
        config
      );
      dispatch({ type: ADD_VISA_SUCCESS,payload: data });
    } catch (error) {
      dispatch({
        type: ADD_VISA_FAIL,
        payload: error.response.data.message,
      });
    }
  };
  export const addCoVisaData = (visaData) => async (dispatch) => {
    try {
      dispatch({ type: ADD_CO_VISA_REQUEST });
      const config = { headers: { "Content-Type": "multipart/form-data" } };
      axios.defaults.withCredentials = true;
      const { data } = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/uploadCoVisa`,
        visaData,
        config
      );
      dispatch({ type: ADD_CO_VISA_SUCCESS,payload: data });
    } catch (error) {
      dispatch({
        type: ADD_CO_VISA_FAIL,
        payload: error.response.data.message,
      });
    }
  };
  

    //clearing error
    export const clearErrors = () => async (dispatch) =>{
        dispatch({type: CLEAR_ERRORS});
      }