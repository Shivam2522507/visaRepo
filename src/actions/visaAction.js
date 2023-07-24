import axios from "axios";
import {
    ALL_VISA_REQUEST,
    ALL_VISA_SUCCESS,
    ALL_VISA_FAIL,
    VISA_DETAILS_REQUEST,
    VISA_DETAILS_SUCCESS,
    VISA_DETAILS_FAIL,
    CLEAR_ERRORS,
  } from "../constants/visaConstants";

  export const getVisaCard = () => async (dispatch) =>{
    try {

        dispatch({ type : ALL_VISA_REQUEST});

        const {data} = await axios.get("http://localhost:8000/api/getAllVisaCard");

        dispatch({
            type: ALL_VISA_SUCCESS,
            payload: data,
        })
        
    } catch (error) {
        dispatch({
            type: ALL_VISA_FAIL,
            payload: error.response.data.message
        });
    }
  };

  export const getSingleVisaCard = () => async (dispatch) =>{
    try {

        dispatch({ type : ALL_VISA_REQUEST});

        const {data} = await axios.get("http://localhost:8000/api/getSigAllVisaCard");

        dispatch({
            type: ALL_VISA_SUCCESS,
            payload: data,
        })
        
    } catch (error) {
        dispatch({
            type: ALL_VISA_FAIL,
            payload: error.response.data.message
        });
    }
  };
  export const getMultipleVisaCard = () => async (dispatch) =>{
    try {

        dispatch({ type : ALL_VISA_REQUEST});

        const {data} = await axios.get("http://localhost:8000/api/getMultiAllVisaCard");

        dispatch({
            type: ALL_VISA_SUCCESS,
            payload: data,
        })
        
    } catch (error) {
        dispatch({
            type: ALL_VISA_FAIL,
            payload: error.response.data.message
        });
    }
  };

  export const getVisaCardDetails = (id) => async (dispatch) =>{
    try {

        dispatch({ type : VISA_DETAILS_REQUEST});

        const {data} = await axios.get(`http://localhost:8000/api/VisaCard/${id}`);

        dispatch({
            type: VISA_DETAILS_SUCCESS,
            payload: data.visaCard,
        })
        
    } catch (error) {
        dispatch({
            type: VISA_DETAILS_FAIL,
            payload: error.response.data.message
        });
    }
  };


  //clearing error
  export const clearErrors = () => async (dispatch) =>{
    dispatch({type: CLEAR_ERRORS});
  }