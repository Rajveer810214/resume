import React, { Component } from 'react';
import Signup from './Components/Authentication/Signup'
import DashBoard from './Components/DashBoard'
import Login from './Components/Authentication/Login'
import Verify from './Components/Authentication/Verify'
import ForgotPassword from './Components/Authentication/Forgotpassword';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">

        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<DashBoard />} />
       <Route exact path="/forgotpassword" element={<ForgotPassword />} />
        
            {(!localStorage.getItem('authtoken')) ?
<>
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/verify" element={<Verify />} />
            </>
            : ''
            }


          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;


