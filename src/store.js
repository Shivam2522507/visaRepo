import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { VisaCardReducer,VisaCardDetailsReducer,VisaUpdateReducer } from "./reducers/visaReducer";
import {userReducer,updateUserReducer } from "./reducers/userReducer"
import {adminReducer, updateAdminReducer } from "./reducers/adminReducer"
import {RoeReducer,RoeUpdateReducer} from "./reducers/roeReducers";
import {allUserReducer} from "./reducers/allUserReducer";
import {allContactReducer, contactReducer} from "./reducers/contactReducer";

const reducer = combineReducers({
  visaCards:VisaCardReducer,
  VisaCardDetails:VisaCardDetailsReducer,
  user:userReducer,
  admin:adminReducer,
  roe:RoeReducer,
  updateUser:updateUserReducer,
  updateRoe:RoeUpdateReducer,
  updateAdmin:updateAdminReducer,
  allUser:allUserReducer,
  updateVisa:VisaUpdateReducer,
  contact:contactReducer,
  allContact:allContactReducer,
  
});

let initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
