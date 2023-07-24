import React from "react";
import Navbar from "./components/inc/Navbar";
import Footer from "./components/inc/Footer";
import Home from './components/pages/Home';
import ApplyVisa from './components/pages/ApplyVisa';
import ApplyVisaCard from "./components/pages/ApplyVisaCard";
import TrackApllication from './components/pages/TrackApllication';
import Contact from './components/pages/Contact';
import Login from './components/pages/login';
import Signup from './components/pages/Signup';
import {BrowserRouter as Router, Routes ,Route} from 'react-router-dom';
import AdminLogin from "./components/admin/admin";
import Dashboard from "./components/admin/dashboard";
// import history from "./history";

function App() {
  return (
    <Router>
      <div>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/ApplyVisa' element={<ApplyVisa/>} />
          <Route path='/ApplyVisa/:id' element={<ApplyVisaCard/>} />
          <Route path='/TrackApllication' element={<TrackApllication/>} />
          <Route path='/Contact' element={<Contact/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/Signup' element={<Signup/>} />
          {/* <Route path='/login/Admin' element={<AdminLogin/>} />
          <Route path='/Admin/Dashboard' element={<Dashboard/>} /> */}
        </Routes>
        <Footer/>
      </div>
   </Router>
  );
}

export default App;
