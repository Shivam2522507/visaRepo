import React from "react";
import AdminNav from "./components/Admin/AdminNavbar";
import Navbar from "./components/inc/Navbar";
import Footer from "./components/inc/Footer";
import Home from "./components/pages/Home";
import ApplyVisa from "./components/pages/ApplyVisa";
import ApplyVisaCard from "./components/pages/ApplyVisaCard";
import TrackApllication from "./components/pages/TrackApllication";
import Contact from "./components/pages/Contact";
import Login from "./components/pages/login";
import Signup from "./components/pages/Signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import store from "./store";
import { loadUser } from "./actions/userAction";
import AdminLogin from "./components/Admin/AdminLogin";
import AdminDashbord from "./components/Admin/AdminDashbord";
import { useSelector } from "react-redux";
import { loadAdmin } from "./actions/adminAction";
// import { getAllUser } from "./actions/allUserActions";
import AllUser from "./components/Admin/AllUser/AllUser";
import Profile from "./components/pages/Profile";
import AdminProfile from "./components/Admin/AdminProfile";
import AdminRoe from "./components/Admin/AdminRoe";

function App() {
  const { isAuthenticatedAdmin } = useSelector((state) => state.admin);
  React.useEffect(() => {
    store.dispatch(loadUser());
    store.dispatch(loadAdmin());
    // store.dispatch(getAllUser())
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
            </Routes>
          </>
        ) : (
          <>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/ApplyVisa" element={<ApplyVisa />} />
              <Route path="/ApplyVisa/:id" element={<ApplyVisaCard />} />
              <Route path="/TrackApllication" element={<TrackApllication />} />
              <Route path="/Contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/Signup" element={<Signup />} />
              <Route path="/AdminLogin" element={<AdminLogin />} />
              <Route path="/Profile" element={<Profile />} />
            </Routes>
            <Footer />
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
