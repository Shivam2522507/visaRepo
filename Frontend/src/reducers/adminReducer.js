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
    ADMIN_UPDATE_RESET,
    ADMIN_UPDATE_FAIL,
    CLEAR_ERRORS,
  } from "../constants/adminConstants";
  
  export const adminReducer = (state = { admin: {} }, action) => {
    switch (action.type) {
      case ADMIN_LOGIN_REQUEST:
      case LOAD_ADMIN_REQUEST:
        return {
          loading: true,
          isAuthenticatedAdmin: false,
        };
      case ADMIN_LOGIN_SUCCESS:
      case LOAD_ADMIN_SUCCESS:
        return {
          ...state,
          loading: false,
          isAuthenticatedAdmin: true,
          admin: action.payload,
        };
      case LOGOUT_ADMIN_SUCCESS:
          return{
            loading: false,
            admin: null,
            isAuthenticatedAdmin: false,
          }
      case ADMIN_LOGIN_FAIL:
        return {
          ...state,
          loading: false,
          isAuthenticatedAdmin: false,
          admin: null,
          error: action.payload,
        };
      case LOAD_ADMIN_FAIL:
        return {
          loading: false,
          isAuthenticatedAdmin: false,
          admin: null,
          error: action.payload,
        };
        
        case LOGOUT_ADMIN_FAIL:
          return{
            ...state,
            loading: false,
            error: action.payload
          }
      case CLEAR_ERRORS:
        return {
          ...state,
          error: null,
        };
  
      default:
        return state;
    }
  };
  


  export const updateAdminReducer = (state = {}, action) => {
    switch (action.type) {
      case ADMIN_UPDATE_REQUEST:
        return {
          ...state,
          loading: true,
          
        };
      case ADMIN_UPDATE_SUCCESS:
        return {
          ...state,
          loading: false,
          isUpdated: action.payload,
        };
      case ADMIN_UPDATE_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case ADMIN_UPDATE_RESET:
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
  