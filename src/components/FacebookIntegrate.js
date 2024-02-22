import React from 'react';
import { useNavigate, Navigate } from 'react-router-dom';

const FacebookIntegrate = ({isLoggedIn}) => {
  const navigate = useNavigate();

  const handleConnectFacebook = () => {
    navigate('/facebook-connected', { replace: true });
  }

  return (
    isLoggedIn ? (
      <div className='container'>
      <h2>Facebook Page Integration</h2>
      <button className='button fb' onClick={handleConnectFacebook}>Connect Page</button>
    </div>
    ): (
      <Navigate to="/login"></Navigate>
    )
  );
};

export default FacebookIntegrate;