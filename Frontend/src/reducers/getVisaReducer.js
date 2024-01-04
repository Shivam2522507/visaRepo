import {
    ADD_VISA_REQUEST,
    ADD_VISA_SUCCESS,
    ADD_VISA_FAIL,
    ADD_VISA_RESET,
    ADD_CO_VISA_REQUEST,
    ADD_CO_VISA_SUCCESS,
    ADD_CO_VISA_FAIL,
    ADD_CO_VISA_RESET,
    CLEAR_ERRORS,
  } from "../constants/getVisaConstant";
  
  export const addVisaReducer = (
    state = { loading: false, isVisaAdded: false },
    action
  ) => {
    switch (action.type) {
      case ADD_VISA_REQUEST:
        return {
          loading: true,
          isVisaAdded: false,
        };
      case ADD_VISA_SUCCESS:
        return {
          ...state,
          loading: false,
          isVisaAdded: true,
        };
  
      case ADD_VISA_FAIL:
        return {
          ...state,
          loading: false,
          isVisaAdded: false,
          error: action.payload,
        };
      case ADD_VISA_RESET:
        return {
          ...state,
          isVisaAdded: false,
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
  export const addCoVisaReducer = (
    state = { loading: false, isCoVisaAdded: false },
    action
  ) => {
    switch (action.type) {
      case ADD_CO_VISA_REQUEST:
        return {
          loading: true,
          isCoVisaAdded: false,
        };
      case ADD_CO_VISA_SUCCESS:
        return {
          ...state,
          loading: false,
          isCoVisaAdded: true,
        };
  
      case ADD_CO_VISA_FAIL:
        return {
          ...state,
          loading: false,
          isCoVisaAdded: false,
          error: action.payload,
        };
      case ADD_CO_VISA_RESET:
        return {
          ...state,
          isCoVisaAdded: false,
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

  