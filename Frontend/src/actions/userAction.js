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
  USER_UPDATE_FAIL,
  USER_PASSWORD_UPDATE_REQUEST,
  USER_PASSWORD_UPDATE_SUCCESS,
  USER_PASSWORD_UPDATE_FAIL,
  GOOGLE_LOGIN_REQUEST,
  GOOGLE_LOGIN_SUCCESS,
  GOOGLE_LOGIN_FAIL,
  FORGET_PASSWORD_UPDATE_REQUEST,
  FORGET_PASSWORD_UPDATE_SUCCESS,
  FORGET_PASSWORD_UPDATE_FAIL,
  RESET_PASSWORD_UPDATE_REQUEST,
  RESET_PASSWORD_UPDATE_SUCCESS,
  RESET_PASSWORD_UPDATE_FAIL,
  CLEAR_ERRORS,
  FACEBOOK_LOGIN_REQUEST,
  FACEBOOK_LOGIN_SUCCESS,
  FACEBOOK_LOGIN_FAIL,
} from "../constants/userConstants";
import axios from "axios";
// import {signInGoogle,signUpGoogle} from "../api/index"

//login
export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });
    const config = {
      headers: { "Content-Type": "application/json" }
    };
    axios.defaults.withCredentials = true;
    const { data } = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/api/login`,
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
      `${process.env.REACT_APP_BACKEND_URL}/api/signup`,
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
    const  response  = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/me`);
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
  await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/logout`);
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
      `${process.env.REACT_APP_BACKEND_URL}/api/me/update`,
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
//Update user
export const updateUserPassword = (userData) => async (dispatch) => {
  try {
    dispatch({ type: USER_PASSWORD_UPDATE_REQUEST });
    const config = { headers: { "Content-Type": "application/json" } };
    const { data } = await axios.put(
      `${process.env.REACT_APP_BACKEND_URL}/api/password/update`,
      userData,
      config
    );
    dispatch({ type: USER_PASSWORD_UPDATE_SUCCESS, payload: data.success });
  } catch (error) {
    dispatch({
      type: USER_PASSWORD_UPDATE_FAIL,
      payload: error.response.data.message,
    });
  }
};

//login with google
export const loginGoogle = (accessToken) => async (dispatch) =>{
 try {
  dispatch({type: GOOGLE_LOGIN_REQUEST});
  const config = {
    headers: { "Content-Type": "application/json" }
  };
  axios.defaults.withCredentials = true;
  const { data } = await axios.post(
    `${process.env.REACT_APP_BACKEND_URL}/api/google/login`,
    { accessToken },
    config
  );
  dispatch({type: GOOGLE_LOGIN_SUCCESS, payload: data.user})
} catch (error) {
   dispatch({type: GOOGLE_LOGIN_FAIL, payload: error.response.data.message})
  
 }
}
//login with google
export const loginFacebook = (name) => async (dispatch) =>{
 try {
  dispatch({type: FACEBOOK_LOGIN_REQUEST});
  const config = {
    headers: { "Content-Type": "application/json" }
  };
  axios.defaults.withCredentials = true;
  const { data } = await axios.post(
    `${process.env.REACT_APP_BACKEND_URL}/api/facebook/login`,
    { name },
    config
  );
  dispatch({type: FACEBOOK_LOGIN_SUCCESS, payload: data.user})
} catch (error) {
   dispatch({type: FACEBOOK_LOGIN_FAIL, payload: error.response.data.message})
  
 }
}

//Forget password
export const forgetUserPassword = (email) => async (dispatch) => {
  try {
    dispatch({ type: FORGET_PASSWORD_UPDATE_REQUEST });
    const config = { headers: { "Content-Type": "application/json" } };
    const { data } = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/api/password/forgot`,
      email,
      config
    );
    dispatch({ type: FORGET_PASSWORD_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: FORGET_PASSWORD_UPDATE_FAIL,
      payload: error.response.data.message,
    });
  }
};
//Reset password
export const resetUserPassword = (token,password,confirmPassword) => async (dispatch) => {
  try {
    dispatch({ type: RESET_PASSWORD_UPDATE_REQUEST });
    const config = { headers: { "Content-Type": "application/json" } };
    const { data } = await axios.put(
      `${process.env.REACT_APP_BACKEND_URL}/api/password/reset/${token}`,
      {password,confirmPassword},
      config
    );
    dispatch({ type: RESET_PASSWORD_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: RESET_PASSWORD_UPDATE_FAIL,
      payload: error.response.data.message,
    });
  }
};

//clearing error
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
