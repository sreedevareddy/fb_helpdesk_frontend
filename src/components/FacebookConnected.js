import React from 'react';
import { useNavigate } from 'react-router-dom';

const FacebookConnected = () => {
  const navigate = useNavigate();

  const func1 = () => {
    navigate('/facebook-integrate', { replace: true });
  }
  const func2 = () => {
    navigate('/agent');
  }

  return (
    <div className='container'>
        <h2>Facebook Page Integration</h2>
        <h2>Integrated Page : <b>Amazon Business</b></h2>
        <button onClick={func1} className='button fb red'>Delete Integration</button>
        <button onClick={func2} className='button fb'>Reply to Messages</button>
    </div>
  )
}

export default FacebookConnected;