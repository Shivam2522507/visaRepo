import {
  ADD_MAINTRAVELER_REQUEST,
  ADD_MAINTRAVELER_SUCCESS,
  ADD_MAINTRAVELER_FAIL,
  ADD_COTRAVELER_REQUEST,
  ADD_COTRAVELER_SUCCESS,
  ADD_COTRAVELER_FAIL,
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
  DELETE_TRAVELER_REQUEST,
  DELETE_TRAVELER_SUCCESS,
  DELETE_TRAVELER_FAIL,
  CHANGE_COTRAVELERS_STATUS_REQUEST,
  CHANGE_COTRAVELERS_STATUS_SUCCESS,
  CHANGE_COTRAVELERS_STATUS_FAIL,
  CLEAR_ERRORS,
} from "../constants/applyVisaConstants";
import axios from "axios";


export const addMainTravelerData = (mainTravelerData) => async (dispatch) => {
  try {
    dispatch({ type: ADD_MAINTRAVELER_REQUEST });
    const config = { headers: { "Content-Type": "multipart/form-data" } };
    axios.defaults.withCredentials = true;
    const { data } = await axios.post(
      `http://localhost:8000/api/addMainTraveler`,
      mainTravelerData,
      config
    );
    dispatch({ type: ADD_MAINTRAVELER_SUCCESS, payload: data.mainTravelerId });
  } catch (error) {
    dispatch({
      type: ADD_MAINTRAVELER_FAIL,
      payload: error.response.data.message,
    });
  }
};
export const addCoTravelerData = (coTravelerData) => async (dispatch) => {
  try {
    dispatch({ type: ADD_COTRAVELER_REQUEST });
    const config = { headers: { "Content-Type": "multipart/form-data" } };
    axios.defaults.withCredentials = true;
    const { data } = await axios.post(
      `http://localhost:8000/api/addCoTraveler`,
      coTravelerData,
      config
    );
    dispatch({ type: ADD_COTRAVELER_SUCCESS, payload: data});
  } catch (error) {
    dispatch({
      type: ADD_COTRAVELER_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const getTravelers = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_TRAVELERS_REQUEST });

    const { data } = await axios.get(
      "http://localhost:8000/api/getAllTraveler"
    );

    dispatch({
      type: ALL_TRAVELERS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ALL_TRAVELERS_FAIL,
      payload: error.response.data.message,
    });
  }
};
export const searchTravelers = (key) => async (dispatch) => {
  try {
    dispatch({ type: SEARCH_TRAVELERS_REQUEST });

    const { data } = await axios.get(
      `http://localhost:8000/api/search/${key}`
    );

    dispatch({
      type: SEARCH_TRAVELERS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: SEARCH_TRAVELERS_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const filterByVisaType = (key) => async (dispatch) => {
  try {
    dispatch({ type: FILTERBYVISATYPE_TRAVELERS_REQUEST });

    const { data } = await axios.get(
      `http://localhost:8000/api/filter/${key}`
    );

    dispatch({
      type: FILTERBYVISATYPE_TRAVELERS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: FILTERBYVISATYPE_TRAVELERS_FAIL,
      payload: error.response.data.message,
    });
  }
};
export const filterByDate = (startDate,endDate) => async (dispatch) => {
  try {
    dispatch({ type: FILTERBYDATE_TRAVELERS_REQUEST });
    const config = {
      headers: { "Content-Type": "application/json" }
    };
    axios.defaults.withCredentials = true;
    const { data } = await axios.post(
      `http://localhost:8000/api/filter/date`,
      {startDate,endDate},
      config
    );

    dispatch({
      type: FILTERBYDATE_TRAVELERS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: FILTERBYDATE_TRAVELERS_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const getTravelerDetails = (mainTravelerId) => async (dispatch) => {
  try {
    dispatch({ type: TRAVELER_DETAILS_REQUEST });
    const config = { headers: { "Content-Type": "application/json" } };
    axios.defaults.withCredentials = true;
    const { data } = await axios.post(
      `http://localhost:8000/api/getTravelerById`,
      mainTravelerId,
      config
    );

    dispatch({
      type: TRAVELER_DETAILS_SUCCESS,
      payload: data.mainTraveler,
    });
  } catch (error) {
    dispatch({
      type: TRAVELER_DETAILS_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const addOtherFields = (id,OtherFields) => async (dispatch) => {
  try {
    dispatch({ type: ADD_OTHER_FIELDS_REQUEST });
    const config = { headers: { "Content-Type": "application/json" } };
    axios.defaults.withCredentials = true;
    const { data } = await axios.put(
      `http://localhost:8000/api/addOtherTravelerFields/${id}`,
      OtherFields,
      config
    );
    dispatch({ type: ADD_OTHER_FIELDS_SUCCESS, payload: data.mainTravelerId  });
  } catch (error) {
    dispatch({
      type: ADD_OTHER_FIELDS_FAIL,
      payload: error.response.data.message,
    });
  }
};
export const changeCoTravelerStatus = (OtherFields) => async (dispatch) => {
  try {
    dispatch({ type: CHANGE_COTRAVELERS_STATUS_REQUEST });
    const config = { headers: { "Content-Type": "application/json" } };
    axios.defaults.withCredentials = true;
    const { data } = await axios.put(
      `http://localhost:8000/api/updateCoTravelerStatus`,
      OtherFields,
      config
    );
    dispatch({ type: CHANGE_COTRAVELERS_STATUS_SUCCESS, payload: data  });
  } catch (error) {
    dispatch({
      type: CHANGE_COTRAVELERS_STATUS_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const deleteTravelerAction = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_TRAVELER_REQUEST });
    const config = { headers: { "Content-Type": "application/json" } };
    axios.defaults.withCredentials = true;
    const { data } = await axios.delete(
      `http://localhost:8000/api/deleteTraveler`,
      {data: {id}},
      config
    );
    dispatch({ type: DELETE_TRAVELER_SUCCESS, payload: data});
  } catch (error) {
    dispatch({
      type: DELETE_TRAVELER_FAIL,
      payload: error.response.data.message,
    });
  }
};


  //clearing error
  export const clearErrors = () => async (dispatch) =>{
    dispatch({type: CLEAR_ERRORS});
  }
