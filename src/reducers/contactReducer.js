import {
    CONTACT_USER_REQUEST,
    CONTACT_USER_SUCCESS,
    CONTACT_USER_FAIL,
    ALL_CONTACT_REQUEST,
    ALL_CONTACT_SUCCESS,
    ALL_CONTACT_FAIL,
    CLEAR_ERRORS,
  } from "../constants/contactConstants";
  
  export const contactReducer = (state = {loading: false, contact: {} }, action) => {
    switch (action.type) {
      case CONTACT_USER_REQUEST:
        return {
          loading: true,
        };
      case CONTACT_USER_SUCCESS:
        return {
          ...state,
          loading: false,
          contact: action.payload,
        };
      case CONTACT_USER_FAIL:
        return {
          ...state,
          loading: false,
          contact: null,
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
  


  export const allContactReducer =
  (state = { Contacts: [] },
  action) => {
    switch (action.type) {
      case ALL_CONTACT_REQUEST:
        return {
          loading: true,
          Contact: [],
        };
      case ALL_CONTACT_SUCCESS:
        return {
          loading: false,
          Contacts: action.payload.data,
        };
      case ALL_CONTACT_FAIL:
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

  