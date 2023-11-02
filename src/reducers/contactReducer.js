import {
    CONTACT_USER_REQUEST,
    CONTACT_USER_SUCCESS,
    CONTACT_USER_FAIL,
    CONTACT_USER_RESET,
    ALL_CONTACT_REQUEST,
    ALL_CONTACT_SUCCESS,
    ALL_CONTACT_FAIL,
    DELETE_CONTACT_REQUEST,
    DELETE_CONTACT_SUCCESS,
    DELETE_CONTACT_RESET,
    DELETE_CONTACT_FAIL,
    CLEAR_ERRORS,
  } from "../constants/contactConstants";
  
  export const contactReducer = (state = {loading: false,contactSend: false, contact: {} }, action) => {
    switch (action.type) {
      case CONTACT_USER_REQUEST:
        return {
          loading: true,
          contactSend: false,
        };
      case CONTACT_USER_SUCCESS:
        return {
          ...state,
          loading: false,
          contactSend:true,
          contact: action.payload,
        };
      case CONTACT_USER_FAIL:
        return {
          ...state,
          loading: false,
          contact: null,
          contactSend: false,
          error: action.payload,
        };
      case CONTACT_USER_RESET:
        return {
          ...state,
          contactSend: false,
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


  export const deleteContactReducer = (
    state = { loading: false, isDeleted: false },
    action
  ) => {
    switch (action.type) {
      case DELETE_CONTACT_REQUEST:
        return {
          loading: true,
          isDeleted: false,
        };
      case DELETE_CONTACT_SUCCESS:
        return {
          ...state,
          loading: false,
          isDeleted: true,
        };
  
      case DELETE_CONTACT_FAIL:
        return {
          ...state,
          loading: false,
          isDeleted: false,
          error: action.payload,
        };
      case DELETE_CONTACT_RESET:
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
  
  
  