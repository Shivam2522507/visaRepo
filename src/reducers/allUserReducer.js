import {
    ALL_USER_REQUEST,
    ALL_USER_SUCCESS,
    ALL_USER_FAIL,
    DELETE_USER_REQUEST,
    DELETE_USER_SUCCESS,
    DELETE_USER_FAIL,
    DELETE_USER_RESET,
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


    //delete user
export const deleteUserReducer = (
  state = { loading: false, isDeleted: false },
  action
) => {
  switch (action.type) {
    case DELETE_USER_REQUEST:
      return {
        loading: true,
        isDeleted: false,
      };
    case DELETE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted: true,
      };

    case DELETE_USER_FAIL:
      return {
        ...state,
        loading: false,
        isDeleted: false,
        error: action.payload,
      };
    case DELETE_USER_RESET:
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