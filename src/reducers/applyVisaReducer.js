import {
  ADD_MAINTRAVELER_REQUEST,
  ADD_MAINTRAVELER_SUCCESS,
  ADD_MAINTRAVELER_FAIL,
  ADD_MAINTRAVELER_RESET,
  ADD_COTRAVELER_REQUEST,
  ADD_COTRAVELER_SUCCESS,
  ADD_COTRAVELER_FAIL,
  ADD_COTRAVELER_RESET,
  TRAVELER_DETAILS_REQUEST,
  TRAVELER_DETAILS_SUCCESS,
  TRAVELER_DETAILS_FAIL,
  ALL_TRAVELERS_REQUEST,
  ALL_TRAVELERS_SUCCESS,
  ALL_TRAVELERS_FAIL,
  SEARCH_TRAVELERS_REQUEST,
  SEARCH_TRAVELERS_SUCCESS,
  SEARCH_TRAVELERS_FAIL,
  FILTERBYVISATYPE_TRAVELERS_REQUEST,
  FILTERBYVISATYPE_TRAVELERS_SUCCESS,
  FILTERBYVISATYPE_TRAVELERS_FAIL,

  FILTERBYDATE_TRAVELERS_REQUEST,
  FILTERBYDATE_TRAVELERS_SUCCESS,
  FILTERBYDATE_TRAVELERS_FAIL,
  ADD_OTHER_FIELDS_REQUEST,
  ADD_OTHER_FIELDS_SUCCESS,
  ADD_OTHER_FIELDS_FAIL,
  ADD_OTHER_FIELDS_RESET,
  CHANGE_COTRAVELERS_STATUS_REQUEST,
  CHANGE_COTRAVELERS_STATUS_SUCCESS,
  CHANGE_COTRAVELERS_STATUS_FAIL,
  CHANGE_COTRAVELERS_STATUS_RESET,
  DELETE_TRAVELER_REQUEST,
  DELETE_TRAVELER_SUCCESS,
  DELETE_TRAVELER_FAIL,
  DELETE_TRAVELER_RESET,
  CLEAR_ERRORS,
} from "../constants/applyVisaConstants";

export const addMainTravelerReducer = (
  state = { loading: false, isMainTravelerAdded: false },
  action
) => {
  switch (action.type) {
    case ADD_MAINTRAVELER_REQUEST:
      return {
        loading: true,
        isMainTravelerAdded: false,
      };
    case ADD_MAINTRAVELER_SUCCESS:
      return {
        ...state,
        loading: false,
        isMainTravelerAdded: true,
        mainTravelerId: action.payload,
      };

    case ADD_MAINTRAVELER_FAIL:
      return {
        ...state,
        loading: false,
        isMainTravelerAdded: false,
        error: action.payload,
      };
    case ADD_MAINTRAVELER_RESET:
      return {
        ...state,
        isMainTravelerAdded: false,
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
export const addCoTravelerReducer = (
  state = { loading: false, isCoTravelerAdded: false },
  action
) => {
  switch (action.type) {
    case ADD_COTRAVELER_REQUEST:
      return {
        loading: true,
        isCoTravelerAdded: false,
      };
    case ADD_COTRAVELER_SUCCESS:
      return {
        ...state,
        loading: false,
        isCoTravelerAdded: true,
      };

    case ADD_COTRAVELER_FAIL:
      return {
        ...state,
        loading: false,
        isCoTravelerAdded: false,
        error: action.payload,
      };
    case ADD_COTRAVELER_RESET:
      return {
        ...state,
        isCoTravelerAdded: false,
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

export const travelerDetailsReducer = (state = { traveler: {} }, action) => {
  switch (action.type) {
    case TRAVELER_DETAILS_REQUEST:
      return {
        loading: true,
        ...state,
      };
    case TRAVELER_DETAILS_SUCCESS:
      return {
        loading: false,
        traveler: action.payload,
        isTraveler: true
      };
    case TRAVELER_DETAILS_FAIL:
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

export const allTravelerReducer = (state = { travelers: [] }, action) => {
  switch (action.type) {
    case ALL_TRAVELERS_REQUEST:
    case SEARCH_TRAVELERS_REQUEST:
    case FILTERBYVISATYPE_TRAVELERS_REQUEST:
    case FILTERBYDATE_TRAVELERS_REQUEST:
      return {
        loading: true,
        traveler: [],
      };
    case ALL_TRAVELERS_SUCCESS:
    case SEARCH_TRAVELERS_SUCCESS:
    case FILTERBYVISATYPE_TRAVELERS_SUCCESS:
    case FILTERBYDATE_TRAVELERS_SUCCESS:
      return {
        loading: false,
        travelers: action.payload.travelers,
      };
    case ALL_TRAVELERS_FAIL:
    case SEARCH_TRAVELERS_FAIL:
    case FILTERBYVISATYPE_TRAVELERS_FAIL:
    case FILTERBYDATE_TRAVELERS_FAIL:
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


export const addOtherFieldReducer = (state = {loading: false, isOtherFieldsAdded: false}, action) => {
  switch (action.type) {
    case ADD_OTHER_FIELDS_REQUEST:
      return {
        loading: true,
        ...state,
      };
    case ADD_OTHER_FIELDS_SUCCESS:
      return {
        ...state,
        loading: false,
        isOtherFieldsAdded: true,
        mainTravelerId: action.payload,
      };
    case ADD_OTHER_FIELDS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
        isOtherFieldsAdded: false,
      };
    case ADD_OTHER_FIELDS_RESET:
      return {
        ...state,
        isOtherFieldsAdded: false,
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
export const changeCoTravelerStatusReducer = (state = {loading: false, isCoTravelerStatusChanged: false}, action) => {
  switch (action.type) {
    case CHANGE_COTRAVELERS_STATUS_REQUEST:
      return {
        loading: true,
        ...state,
      };
    case CHANGE_COTRAVELERS_STATUS_SUCCESS:
      return {
        ...state,
        loading: false,
        isCoTravelerStatusChanged: true,
      };
    case CHANGE_COTRAVELERS_STATUS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
        isCoTravelerStatusChanged: false,
      };
    case CHANGE_COTRAVELERS_STATUS_RESET:
      return {
        ...state,
        isCoTravelerStatusChanged: false,
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
export const deleteTravelerReducer = (
  state = { loading: false, isDeleted: false },
  action
) => {
  switch (action.type) {
    case DELETE_TRAVELER_REQUEST:
      return {
        loading: true,
        isDeleted: false,
      };
    case DELETE_TRAVELER_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted: true,
      };

    case DELETE_TRAVELER_FAIL:
      return {
        ...state,
        loading: false,
        isDeleted: false,
        error: action.payload,
      };
    case DELETE_TRAVELER_RESET:
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

