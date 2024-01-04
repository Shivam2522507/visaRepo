import {
  CREATE_COUPON_REQUEST,
  CREATE_COUPON_SUCCESS,
  CREATE_COUPON_FAIL,
  ALL_COUPON_REQUEST,
  ALL_COUPON_SUCCESS,
  ALL_COUPON_FAIL,
  VALIDATE_COUPON_REQUEST,
  VALIDATE_COUPON_SUCCESS,
  VALIDATE_COUPON_FAIL,
  DELETE_COUPON_REQUEST,
  DELETE_COUPON_SUCCESS,
  DELETE_COUPON_FAIL,
  COUPON_UPDATE_REQUEST,
  COUPON_UPDATE_SUCCESS,
  COUPON_UPDATE_FAIL,
  CLEAR_ERRORS,
} from "../constants/couponConstants";
import axios from "axios";


export const createCouponAction = (CouponData) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_COUPON_REQUEST });
    const config = { headers: { "Content-Type": "application/json" } };
    axios.defaults.withCredentials = true;
    const { data } = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/api/admin/createCoupon`,
      CouponData,
      config
    );
    dispatch({ type: CREATE_COUPON_SUCCESS, payload: data.coupon });
  } catch (error) {
    dispatch({
      type: CREATE_COUPON_FAIL,
      payload: error.response.data.message,
    });
  }
};


export const getAllCouponAction = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_COUPON_REQUEST });
    const { data } = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/api/admin/getAllCoupon`
    );
    dispatch({ type: ALL_COUPON_SUCCESS, payload: data});
  } catch (error) {
    dispatch({
      type: ALL_COUPON_FAIL,
      payload: error.response.data.message,
    });
  }
};


export const validateCouponAction = (Code) => async (dispatch) => {
  try {
    dispatch({ type: VALIDATE_COUPON_REQUEST });
    const config = { headers: { "Content-Type": "application/json" } };
    axios.defaults.withCredentials = true;
    const { data } = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/api/validateCoupon`,
      Code,
      config
    );
    dispatch({ type: VALIDATE_COUPON_SUCCESS, payload: data.discount});
  } catch (error) {
    dispatch({
      type: VALIDATE_COUPON_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const deleteCouponAction = (code) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_COUPON_REQUEST });
    const config = { headers: { "Content-Type": "application/json" } };
    axios.defaults.withCredentials = true;
    const { data } = await axios.delete(
      `${process.env.REACT_APP_BACKEND_URL}/api/admin/deleteCoupon`,
      {data: {code}},
      config
    );
    dispatch({ type: DELETE_COUPON_SUCCESS, payload: data});
  } catch (error) {
    dispatch({
      type: DELETE_COUPON_FAIL,
      payload: error.response.data.message,
    });
  }
};


export const updateCoupon = (id,couponData) => async (dispatch) => {
  try {
    dispatch({ type: COUPON_UPDATE_REQUEST });
    const config = { headers: { "Content-Type": "application/json" } };
    axios.defaults.withCredentials = true;
    const { data } = await axios.put(
      `${process.env.REACT_APP_BACKEND_URL}/api/admin/updateCoupon/${id}`,
      couponData,
      config
    );
    dispatch({ type: COUPON_UPDATE_SUCCESS, payload: data.success });
  } catch (error) {
    dispatch({
      type: COUPON_UPDATE_FAIL,
      payload: error.response.data.message,
    });
  }
};

  //clearing error
  export const clearErrors = () => async (dispatch) =>{
    dispatch({type: CLEAR_ERRORS});
  }
