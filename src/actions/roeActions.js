import axios from "axios";
import {
    ROE_REQUEST,
    ROE_SUCCESS,
    ROE_FAIL,
    ROE_UPDATE_REQUEST,
    ROE_UPDATE_SUCCESS,
    ROE_UPDATE_FAIL,
    CLEAR_ERRORS,
  } from "../constants/RoeConstants";

  export const getRoe = () => async (dispatch) =>{
    try {

        dispatch({ type : ROE_REQUEST});

        const response = await axios.get("http://localhost:8000/api/getRoe");
        const roeData = response.data.roes
        dispatch({
            type: ROE_SUCCESS,
            payload: roeData,
        })
        
    } catch (error) {
        dispatch({
            type: ROE_FAIL,
            payload: error.response.data.message
        });
    }
  };

  //Update roe
export const updateRoe = (roeData) => async (dispatch) => {
  try {
    dispatch({ type: ROE_UPDATE_REQUEST });
    const config = { headers: { "Content-Type": "application/json" } };
    const { data } = await axios.put(
      `http://localhost:8000/api/Roe/64a092e555b1a45034a3592e`,
      roeData,
      config
    );
    dispatch({ type: ROE_UPDATE_SUCCESS, payload: data.success });
  } catch (error) {
    dispatch({
      type: ROE_UPDATE_FAIL,
      payload: error.response.data.message,
    });
  }
};



  //clearing error
  export const clearErrors = () => async (dispatch) =>{
    dispatch({type: CLEAR_ERRORS});
  }