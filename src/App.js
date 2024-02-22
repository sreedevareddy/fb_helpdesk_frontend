import React,{useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import FacebookConnected from './components/FacebookConnected';
import FacebookIntegrate from './components/FacebookIntegrate';

import './App.css';
import Agent from './components/Agent';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  // Callback function to update isLoggedIn state
  const handleLogin = () => {
    setIsLoggedIn(true);
    console.log(isLoggedIn);
  };
  
  return (
    <div className='app'>
      <Router>
        <Routes>
          <Route path="/" element={<Register />}></Route>

          <Route exact path="/login" element={<Login isLoggedIn={isLoggedIn} handleLogin={handleLogin} />} />

          <Route path="/facebook-integrate" element={<FacebookIntegrate isLoggedIn={isLoggedIn} />} />

          <Route path="/facebook-connected" element={<FacebookConnected />} />
          
          <Route path="/agent" element={<Agent />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;