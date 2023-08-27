import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAIL,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
  USER_UPDATE_REQUEST,
  USER_UPDATE_SUCCESS,
  USER_UPDATE_RESET,
  USER_UPDATE_FAIL,
  USER_PASSWORD_UPDATE_REQUEST,
  USER_PASSWORD_UPDATE_SUCCESS,
  USER_PASSWORD_UPDATE_RESET,
  USER_PASSWORD_UPDATE_FAIL,
  FORGET_PASSWORD_UPDATE_REQUEST,
  FORGET_PASSWORD_UPDATE_SUCCESS,
  FORGET_PASSWORD_UPDATE_FAIL,
  FORGET_PASSWORD_UPDATE_RESET,
  RESET_PASSWORD_UPDATE_REQUEST,
  RESET_PASSWORD_UPDATE_SUCCESS,
  RESET_PASSWORD_UPDATE_FAIL,
  RESET_PASSWORD_UPDATE_RESET,
  GOOGLE_LOGIN_REQUEST,
  GOOGLE_LOGIN_SUCCESS,
  GOOGLE_LOGIN_FAIL,
  CLEAR_ERRORS,
} from "../constants/userConstants";

export const userReducer = (
  state = { loading: false, isAuthenticated: false, user: {} },
  action
) => {
  switch (action.type) {
    case LOGIN_REQUEST:
    case REGISTER_USER_REQUEST:
    case LOAD_USER_REQUEST:
    case GOOGLE_LOGIN_REQUEST:
      return {
        loading: true,
        isAuthenticated: false,
      };
    case LOGIN_SUCCESS:
    case REGISTER_USER_SUCCESS:
    case LOAD_USER_SUCCESS:
    case GOOGLE_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        user: action.payload,
      };

    case LOGOUT_SUCCESS:
      return {
        loading: false,
        user: null,
        isAuthenticated: false,
      };
    case LOGIN_FAIL:
    case REGISTER_USER_FAIL:
    case GOOGLE_LOGIN_FAIL:
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        user: null,
        error: action.payload,
      };
    case LOAD_USER_FAIL:
      return {
        loading: false,
        isAuthenticated: false,
        user: null,
        error: action.payload,
      };
    case LOGOUT_FAIL:
      return {
        ...state,
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

export const updateUserReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_UPDATE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case USER_UPDATE_SUCCESS:
      return {
        ...state,
        loading: false,
        isUpdated: action.payload,
      };
    case USER_UPDATE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case USER_UPDATE_RESET:
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

export const updateUserPasswordReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_PASSWORD_UPDATE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case USER_PASSWORD_UPDATE_SUCCESS:
      return {
        ...state,
        loading: false,
        isUpdatePassword: action.payload,
      };
    case USER_PASSWORD_UPDATE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case USER_PASSWORD_UPDATE_RESET:
      return {
        ...state,
        isUpdatePassword: false,
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
export const forgetUserPasswordReducer = (state = {}, action) => {
  switch (action.type) {
    case FORGET_PASSWORD_UPDATE_REQUEST:
      return {
        ...state,
        forgetLoading: true,
      };
    case FORGET_PASSWORD_UPDATE_SUCCESS:
      return {
        ...state,
        forgetLoading: false,
        isMailSend: action.payload,
      };
    case FORGET_PASSWORD_UPDATE_FAIL:
      return {
        ...state,
        forgetLoading: false,
        error: action.payload,
      };
    case FORGET_PASSWORD_UPDATE_RESET:
      return {
        ...state,
        isMailSend: false,
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
export const resetUserPasswordReducer = (state = {}, action) => {
  switch (action.type) {
    case RESET_PASSWORD_UPDATE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case RESET_PASSWORD_UPDATE_SUCCESS:
      return {
        ...state,
        loading: false,
        isPasswordReset: action.payload,
      };
    case RESET_PASSWORD_UPDATE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case RESET_PASSWORD_UPDATE_RESET:
      return {
        ...state,
        isPasswordReset: false,
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
