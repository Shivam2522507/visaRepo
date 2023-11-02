import React from "react";
import AdminNav from "./components/Admin/AdminNavbar";
import Navbar from "./components/inc/Navbar";
import Footer from "./components/inc/Footer";
import Home from "./components/pages/Home";
import ApplyVisa from "./components/pages/ApplyVisa";
import TrackApllication from "./components/pages/TrackApllication";
// import Contact from "./components/pages/Contact";
import Login from "./components/pages/login";
import Signup from "./components/pages/Signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import store from "./store";
import { loadUser } from "./actions/userAction";
import AdminLogin from "./components/Admin/AdminLogin";
import AdminDashbord from "./components/Admin/AdminDashbord";
import { useSelector } from "react-redux";
import { loadAdmin } from "./actions/adminAction";
import AllUser from "./components/Admin/AllUser/AllUser";
import Profile from "./components/pages/UserProfile/Profile";
import AdminProfile from "./components/Admin/AdminProfile";
import AdminRoe from "./components/Admin/AdminRoe";
import AllVisaCards from "./components/Admin/AllVisaCard/allVisaCards";
import AllContacts from "./components/Admin/AllContacts/AllContacts";
import AllCoupons from "./components/Admin/AllCoupon/AllCoupons";
import PrivacyPolicy from "./components/pages/termsAndConditions/privacyPolicy";
import TermsAndConditions from "./components/pages/termsAndConditions/termsAndConditions";
import RefundPolicy from "./components/pages/termsAndConditions/refundPolicy";
import AllOrders from "./components/Admin/AllOrders/AllOrders";
import OrderDetails from "./components/Admin/AllOrders/OrderDetails";
import CheckOut from "./components/pages/CheckOut/CheckOut";
import ResetPassword from "./components/pages/ForgetPassword/ResetPassword";
import AboutUs from "./components/pages/AboutUs";
import ContactUs from "./components/pages/Contact";


function App() {
  const { isAuthenticatedAdmin } = useSelector((state) => state.admin);
  React.useEffect(() => {
    store.dispatch(loadUser());
    store.dispatch(loadAdmin());
  }, []);
  return (
    <Router>
      <div>
        {isAuthenticatedAdmin ? (
          <>
            <AdminNav />
            <Routes>
              <Route path="/AdminDashbord" element={<AdminDashbord />} />
              <Route path="/AllUser" element={<AllUser />} />
              <Route path="/AdminProfile" element={<AdminProfile />} />
              <Route path="/AdminRoe" element={<AdminRoe />} />
              <Route path="/AdminVisaCard" element={<AllVisaCards />} />
              <Route path="/AllContacts" element={<AllContacts />} />
              <Route path="/AllCoupons" element={<AllCoupons />} />
              <Route path="/AllOrder" element={<AllOrders />} />
              <Route path="/OrderDetails/:id" element={<OrderDetails />} />

            </Routes>
          </>
        ) : (
          <>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/ApplyVisa/:id" element={<ApplyVisa />} />
              <Route path="/TrackApllication" element={<TrackApllication />} />
              <Route path="/Contact" element={<ContactUs />} />
              <Route path="/login" element={<Login />} />
              <Route path="/Signup" element={<Signup />} />
              <Route path="/AdminLogin" element={<AdminLogin />} />
              <Route path="/Profile" element={<Profile />} />
              <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
              <Route path="/TermsAndConditions" element={<TermsAndConditions />} />
              <Route path="/RefundPolicy" element={<RefundPolicy />} />
              <Route path="/AboutUs" element={<AboutUs />} />
              <Route path="/checkOut/:id" element={<CheckOut />} />
              <Route path="/api/password/reset/:token" element={<ResetPassword />} />
            </Routes>
            <Footer />
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
