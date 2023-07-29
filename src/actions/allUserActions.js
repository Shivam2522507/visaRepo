import axios from "axios";
import {
  ALL_USER_REQUEST,
  ALL_USER_SUCCESS,
  ALL_USER_FAIL,
  CLEAR_ERRORS,
} from "../constants/allUserConstants";

export const getAllUser = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_USER_REQUEST });

    const {data} = await axios.get(
      "http://localhost:8000/api/admin/allUsers"
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

//clearing error
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
