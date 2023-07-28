import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAIL,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
  USER_UPDATE_REQUEST,
  USER_UPDATE_SUCCESS,
  // USER_UPDATE_RESET,
  USER_UPDATE_FAIL,
  CLEAR_ERRORS,
} from "../constants/userConstants";
import axios from "axios";

//login
export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });
    const config = {
      headers: { "Content-Type": "application/json" }
    };
    axios.defaults.withCredentials = true;
    const { data } = await axios.post(
      `http://localhost:8000/api/login`,
      { email, password },
      config
    );
    dispatch({ type: LOGIN_SUCCESS, payload: data.user });
  } catch (error) {
    dispatch({ type: LOGIN_FAIL, payload: error.response.data.message });
  }
};

//register
export const register = (userData) => async (dispatch) => {
  try {
    dispatch({ type: REGISTER_USER_REQUEST });
    const config = { headers: { "Content-Type": "application/json" } };
    const { data } = await axios.post(
      `http://localhost:8000/api/signup`,
      userData,
      config
    );
    dispatch({ type: REGISTER_USER_SUCCESS, payload: data.user });
  } catch (error) {
    dispatch({
      type: REGISTER_USER_FAIL,
      payload: error.response.data.message,
    });
  }
};
//load user
export const loadUser = () => async (dispatch) => {
  try {
    axios.defaults.withCredentials = true;
    dispatch({ type: LOAD_USER_REQUEST });
    const  response  = await axios.get(`http://localhost:8000/api/me`);
    const userData = response.data.user;
    dispatch({ type: LOAD_USER_SUCCESS, payload: userData });
  } catch (error) {
    dispatch({ type: LOAD_USER_FAIL, payload: error.response.data.message });
  }
};
//logout user
export const logoutUser = () => async (dispatch) => {
  try {
  axios.defaults.withCredentials = true;
  await axios.get(`http://localhost:8000/api/logout`);
    dispatch({ type: LOGOUT_SUCCESS });
  } catch (error) {
    dispatch({ type: LOGOUT_FAIL, payload: error.response.data.message });
  }
};


//Update user
export const updateUser = (userData) => async (dispatch) => {
  try {
    dispatch({ type: USER_UPDATE_REQUEST });
    const config = { headers: { "Content-Type": "application/json" } };
    const { data } = await axios.put(
      `http://localhost:8000/api/me/update`,
      userData,
      config
    );
    dispatch({ type: USER_UPDATE_SUCCESS, payload: data.success });
  } catch (error) {
    dispatch({
      type: USER_UPDATE_FAIL,
      payload: error.response.data.message,
    });
  }
};

//clearing error
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
