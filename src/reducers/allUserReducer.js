import {
    ALL_USER_REQUEST,
    ALL_USER_SUCCESS,
    ALL_USER_FAIL,
    CLEAR_ERRORS,
  } from "../constants/allUserConstants";
  
  export const allUserReducer =
    (state = { Users: [] },
    action) => {
      switch (action.type) {
        case ALL_USER_REQUEST:
          return {
            loading: true,
            User: [],
          };
        case ALL_USER_SUCCESS:
          return {
            loading: false,
            Users: action.payload.users,
          };
        case ALL_USER_FAIL:
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