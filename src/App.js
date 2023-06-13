import React from "react";
import Navbar from "./components/inc/Navbar";
import Home from './components/pages/Home';
import ApplyVisa from './components/pages/ApplyVisa';
import TrackApllication from './components/pages/TrackApllication';
import Contact from './components/pages/Contact';
import {BrowserRouter as Router, Routes ,Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/ApplyVisa' element={<ApplyVisa/>} />
          <Route path='/TrackApllication' element={<TrackApllication/>} />
          <Route path='/Contact' element={<Contact/>} />
        </Routes>
      </div>
   </Router>
  );
}

export default App;
