import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { VisaCardReducer,VisaCardDetailsReducer } from "./reducers/visaReducer";
import {userReducer } from "./reducers/userReducer"
import {adminReducer } from "./reducers/adminReducer"

const reducer = combineReducers({
  visaCards:VisaCardReducer,
  VisaCardDetails:VisaCardDetailsReducer,
  user:userReducer,
  admin:adminReducer,
});

let initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
