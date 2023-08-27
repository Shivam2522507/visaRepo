import {
  CREATE_COUPON_REQUEST,
  CREATE_COUPON_SUCCESS,
  CREATE_COUPON_FAIL,
  CREATE_COUPON_RESET,
  ALL_COUPON_REQUEST,
  ALL_COUPON_SUCCESS,
  ALL_COUPON_FAIL,
  VALIDATE_COUPON_REQUEST,
  VALIDATE_COUPON_SUCCESS,
  VALIDATE_COUPON_FAIL,
  DELETE_COUPON_REQUEST,
  DELETE_COUPON_SUCCESS,
  DELETE_COUPON_FAIL,
  DELETE_COUPON_RESET,
  COUPON_UPDATE_REQUEST,
  COUPON_UPDATE_SUCCESS,
  COUPON_UPDATE_RESET,
  COUPON_UPDATE_FAIL,
  CLEAR_ERRORS,
} from "../constants/couponConstants";

//create coupon
export const createCouponReducer = (
  state = { loading: false, isCreated: false },
  action
) => {
  switch (action.type) {
    case CREATE_COUPON_REQUEST:
      return {
        loading: true,
        isCreated: false,
      };
    case CREATE_COUPON_SUCCESS:
      return {
        ...state,
        loading: false,
        isCreated: true,
      };

    case CREATE_COUPON_FAIL:
      return {
        ...state,
        loading: false,
        isCreated: false,
        error: action.payload,
      };
    case CREATE_COUPON_RESET:
      return {
        ...state,
        isCreated: false,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};

//get all coupon
export const allCouponReducer = (state = { Coupons: [] }, action) => {
  switch (action.type) {
    case ALL_COUPON_REQUEST:
      return {
        loading: true,
        Coupon: [],
      };
    case ALL_COUPON_SUCCESS:
      return {
        loading: false,
        Coupons: action.payload.coupons,
      };
    case ALL_COUPON_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};

//validate coupan
export const validateCouponReducer = (
  state = { loading: false, isValid: false, discount: {} },
  action
) => {
  switch (action.type) {
    case VALIDATE_COUPON_REQUEST:
      return {
        loading: true,
        isValid: false,
      };
    case VALIDATE_COUPON_SUCCESS:
      return {
        ...state,
        loading: false,
        isValid: true,
        discount: action.payload,
      };

    case VALIDATE_COUPON_FAIL:
      return {
        ...state,
        loading: false,
        isValid: false,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};

//delete coupan
export const deleteCouponReducer = (
  state = { loading: false, isDeleted: false },
  action
) => {
  switch (action.type) {
    case DELETE_COUPON_REQUEST:
      return {
        loading: true,
        isDeleted: false,
      };
    case DELETE_COUPON_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted: true,
      };

    case DELETE_COUPON_FAIL:
      return {
        ...state,
        loading: false,
        isDeleted: false,
        error: action.payload,
      };
    case DELETE_COUPON_RESET:
      return {
        ...state,
        isDeleted: false,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};

export const couponUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case COUPON_UPDATE_REQUEST:
      return {
        loading: true,
        ...state,
      };
    case COUPON_UPDATE_SUCCESS:
      return {
        ...state,
        loading: false,
        isUpdated: action.payload,
      };
    case COUPON_UPDATE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case COUPON_UPDATE_RESET:
      return {
        ...state,
        isUpdated: false,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};

