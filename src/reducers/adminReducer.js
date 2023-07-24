import {
    ADMIN_LOGIN_REQUEST,
    ADMIN_LOGIN_SUCCESS,
    ADMIN_LOGIN_FAIL,
    LOAD_ADMIN_REQUEST,
    LOAD_ADMIN_SUCCESS,
    LOAD_ADMIN_FAIL,
    CLEAR_ERRORS,
  } from "../constants/adminConstants";
  
  export const adminReducer = (state = { admin: {} }, action) => {
    switch (action.type) {
      case ADMIN_LOGIN_REQUEST:
      case LOAD_ADMIN_REQUEST:
        return {
          loading: true,
          isAuthenticated: false,
        };
      case ADMIN_LOGIN_SUCCESS:
      case LOAD_ADMIN_SUCCESS:
        return {
          ...state,
          loading: false,
          isAuthenticated: true,
          admin: action.payload,
        };
      case ADMIN_LOGIN_FAIL:
        return {
          ...state,
          loading: false,
          isAuthenticated: false,
          admin: null,
          error: action.payload,
        };
      case LOAD_ADMIN_FAIL:
        return {
          loading: false,
          isAuthenticated: false,
          admin: null,
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
  