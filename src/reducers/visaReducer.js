import {
  ALL_VISA_REQUEST,
  ALL_VISA_SUCCESS,
  ALL_VISA_FAIL,
  VISA_DETAILS_REQUEST,
  VISA_DETAILS_SUCCESS,
  VISA_DETAILS_FAIL,
  CLEAR_ERRORS,
} from "../constants/visaConstants";

export const VisaCardReducer =
  (state = { visaCards: [] },
  action) => {
    switch (action.type) {
      case ALL_VISA_REQUEST:
        return {
          loading: true,
          visaCard: [],
        };
      case ALL_VISA_SUCCESS:
        return {
          loading: false,
          visaCards: action.payload.visaCards,
        };
      case ALL_VISA_FAIL:
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

export const VisaCardDetailsReducer =
  (state = { visaCard: {} },
  action) => {
    switch (action.type) {
      case VISA_DETAILS_REQUEST:
        return {
          loading: true,
          ...state,
        };
      case VISA_DETAILS_SUCCESS:
        return {
          loading: false,
          visaCard: action.payload,
        };
      case VISA_DETAILS_FAIL:
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


