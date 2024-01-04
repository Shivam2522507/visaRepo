import {
  ADMIN_LOGIN_REQUEST,
  ADMIN_LOGIN_SUCCESS,
  ADMIN_LOGIN_FAIL,
  LOAD_ADMIN_REQUEST,
  LOAD_ADMIN_SUCCESS,
  LOAD_ADMIN_FAIL,
  LOGOUT_ADMIN_SUCCESS,
  LOGOUT_ADMIN_FAIL,
  ADMIN_UPDATE_REQUEST,
  ADMIN_UPDATE_SUCCESS,
  ADMIN_UPDATE_FAIL,
  CLEAR_ERRORS,
} from "../constants/adminConstants";
import axios from "axios";

//login
export const loginAdmin = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: ADMIN_LOGIN_REQUEST });
    const config = { headers: { "Content-Type": "application/json" } };
    axios.defaults.withCredentials = true;
    const { data } = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/api/adminLogin`,
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
    axios.defaults.withCredentials = true;
    dispatch({ type: LOAD_ADMIN_REQUEST });
    const { data } = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/admin`);
    dispatch({ type: LOAD_ADMIN_SUCCESS, payload: data.admin });
  } catch (error) {
    dispatch({ type: LOAD_ADMIN_FAIL, payload: error.response.data.message });
  }
};
//logout admin
export const logoutAdmin = () => async (dispatch) => {
  try {
    axios.defaults.withCredentials = true;
    await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/adminLogout`);
    dispatch({ type: LOGOUT_ADMIN_SUCCESS });
  } catch (error) {
    dispatch({ type: LOGOUT_ADMIN_FAIL, payload: error.response.data.message });
  }
};

//Update ADMIN
export const updateAdmin = (AdminData) => async (dispatch) => {
  try {
    dispatch({ type: ADMIN_UPDATE_REQUEST });
    const config = { headers: { "Content-Type": "application/json" } };
    const { data } = await axios.put(
      `${process.env.REACT_APP_BACKEND_URL}/api/admin/update`,
      AdminData,
      config
    );
    dispatch({ type: ADMIN_UPDATE_SUCCESS, payload: data.success });
  } catch (error) {
    dispatch({
      type: ADMIN_UPDATE_FAIL,
      payload: error.response.data.message,
    });
  }
};

//clearing error
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
