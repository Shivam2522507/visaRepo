import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  VisaCardReducer,
  VisaCardDetailsReducer,
  VisaUpdateReducer,
} from "./reducers/visaReducer";
import {
  userReducer,
  updateUserReducer,
  updateUserPasswordReducer,
  forgetUserPasswordReducer,
  resetUserPasswordReducer,
} from "./reducers/userReducer";
import { adminReducer, updateAdminReducer } from "./reducers/adminReducer";
import { RoeReducer, RoeUpdateReducer } from "./reducers/roeReducers";
import { allUserReducer, deleteUserReducer } from "./reducers/allUserReducer";
import {
  allContactReducer,
  contactReducer,
  deleteContactReducer,
} from "./reducers/contactReducer";
import {
  createCouponReducer,
  allCouponReducer,
  deleteCouponReducer,
  couponUpdateReducer,
  validateCouponReducer,
} from "./reducers/couponReducer";
import {
  addMainTravelerReducer,
  addCoTravelerReducer,
  allTravelerReducer,
  travelerDetailsReducer,
  addOtherFieldReducer,
  changeCoTravelerStatusReducer,
  deleteTravelerReducer,
  getTravelerByUserId,
  trackTravelerReducer,
} from "./reducers/applyVisaReducer";
import { addVisaReducer,addCoVisaReducer } from "./reducers/getVisaReducer";

const reducer = combineReducers({
  visaCards: VisaCardReducer,
  VisaCardDetails: VisaCardDetailsReducer,
  user: userReducer,
  admin: adminReducer,
  roe: RoeReducer,
  updateUser: updateUserReducer,
  updateRoe: RoeUpdateReducer,
  updateAdmin: updateAdminReducer,
  allUser: allUserReducer,
  updateVisa: VisaUpdateReducer,
  contact: contactReducer,
  allContact: allContactReducer,
  createCoupon: createCouponReducer,
  allCoupon: allCouponReducer,
  deleteCoupon: deleteCouponReducer,
  deleteContact: deleteContactReducer,
  deleteUser: deleteUserReducer,
  updateCoupon: couponUpdateReducer,
  mainTraveler: addMainTravelerReducer,
  coTraveler: addCoTravelerReducer,
  updateUserPassword: updateUserPasswordReducer,
  travelerDetails: travelerDetailsReducer,
  allTraveler: allTravelerReducer,
  addOtherField: addOtherFieldReducer,
  validateCoupon: validateCouponReducer,
  forgetUserPassword: forgetUserPasswordReducer,
  resetUserPassword: resetUserPasswordReducer,
  changeCoTravelerStatus: changeCoTravelerStatusReducer,
  deleteTraveler: deleteTravelerReducer,
  getTravelerByUser: getTravelerByUserId,
  trackTraveler: trackTravelerReducer,
  Visa: addVisaReducer,
  CoVisa: addCoVisaReducer
});

let initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
