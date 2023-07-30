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
  CLEAR_ERRORS,
} from "../constants/couponConstants";
import axios from "axios";


export const createCouponAction = (CouponData) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_COUPON_REQUEST });
    const config = { headers: { "Content-Type": "application/json" } };
    axios.defaults.withCredentials = true;
    const { data } = await axios.post(
      `http://localhost:8000/api/admin/createCoupon`,
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
      `http://localhost:8000/api/admin/getAllCoupon`
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
      `http://localhost:8000/api/validateCoupon`,
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
      `http://localhost:8000/api/admin/deleteCoupon`,
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


  //clearing error
  export const clearErrors = () => async (dispatch) =>{
    dispatch({type: CLEAR_ERRORS});
  }
