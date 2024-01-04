import axios from "axios";
import {
  ALL_USER_REQUEST,
  ALL_USER_SUCCESS,
  ALL_USER_FAIL,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAIL,
  CLEAR_ERRORS,
} from "../constants/allUserConstants";

export const getAllUser = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_USER_REQUEST });

    const {data} = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/api/admin/allUsers`
    );
    
    dispatch({
      type: ALL_USER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ALL_USER_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const deleteUserAction = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_USER_REQUEST });
    axios.defaults.withCredentials = true;
    const { data } = await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/api/admin/user/${id}`);
    dispatch({ type: DELETE_USER_SUCCESS, payload: data});
  } catch (error) {
    dispatch({
      type: DELETE_USER_FAIL,
      payload: error.response.data.message,
    });
  }
};

//clearing error
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
