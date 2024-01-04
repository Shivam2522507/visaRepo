import {
  ROE_REQUEST,
  ROE_SUCCESS,
  ROE_FAIL,
  ROE_UPDATE_REQUEST,
  ROE_UPDATE_SUCCESS,
  ROE_UPDATE_RESET,
  ROE_UPDATE_FAIL,
  CLEAR_ERRORS,
} from "../constants/RoeConstants";

export const RoeReducer = (state = { roe: {} }, action) => {
  switch (action.type) {
    case ROE_REQUEST:
      return {
        loading: true,
        ...state,
      };
    case ROE_SUCCESS:
      return {
        loading: false,
        roe: action.payload,
      };
    case ROE_FAIL:
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

export const RoeUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case ROE_UPDATE_REQUEST:
      return {
        loading: true,
        ...state,
      };
    case ROE_UPDATE_SUCCESS:
      return {
        ...state,
        loading: false,
        isUpdated: action.payload,
      };
    case ROE_UPDATE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case ROE_UPDATE_RESET:
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
