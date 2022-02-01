import React from 'react';
import {Route, Routes} from 'react-router-dom';
// import Navbar from "../Navbar/NavBar";
import Home from "../Home/Home";
import News from '../News/News';
import Login from '../Auth/Login';
import Register from '../Auth/Register';
import Developers from '../Developers/Developers';
import Profile from '../Profile/Profile';
http://geekydev-tfauves-dev.apps.sandbox.x8i5.p1.openshiftapps.com

const AppRouter = () => {

  return (
    <div style={{width: '100%'}}>
     http://geekydev-tfauves-dev.apps.sandbox.x8i5.p1.openshiftapps.com
      <div style={{ marginTop: "75px", width: "100%"}}>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/developers" element={<Developers />} />
          <Route path="/developers/:devId" element={<Profile />} />
        </Routes>
      </div>
    </div>
  )
}

export default AppRouter;