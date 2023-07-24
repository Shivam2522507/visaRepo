import {
    ADMIN_LOGIN_REQUEST,
    ADMIN_LOGIN_SUCCESS,
    ADMIN_LOGIN_FAIL,
    LOAD_ADMIN_REQUEST,
    LOAD_ADMIN_SUCCESS,
    LOAD_ADMIN_FAIL,
    CLEAR_ERRORS,
  } from "../constants/adminConstants";
  import axios from "axios";
  
  //login
  export const loginAdmin = (email, password) => async (dispatch) => {
    try {
      dispatch({ type: ADMIN_LOGIN_REQUEST });
      const config = { headers: { "Content-Type": "application/json" } };
      const { data } = await axios.post(
        `http://localhost:8000/api/adminLogin`,
        { email, password },
        config
      );
      dispatch({ type: ADMIN_LOGIN_SUCCESS, payload: data.admin });
    } catch (error) {
      dispatch({ type: ADMIN_LOGIN_FAIL, payload: error.response.data.message });
    }
  };

  //load admin
  export const loadAdmin = () => async (dispatch) => {
    try {
      dispatch({ type: LOAD_ADMIN_REQUEST });
      const { data } = await axios.get(`http://localhost:8000/api/admin`);
      dispatch({ type: LOAD_ADMIN_SUCCESS, payload: data.admin });
    } catch (error) {
      dispatch({ type: LOAD_ADMIN_FAIL, payload: error.response.data.message });
    }
  };
  
  //clearing error
  export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
  };
  