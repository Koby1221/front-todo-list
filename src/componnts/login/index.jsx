import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import apiRequest from '../../function/index';

const UserAuthentication = () => {
  // State variables
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);
  const navigate = useNavigate();

  // Function to handle user registration
  const handleRegister = async () => {
    // Make API request to register user
    apiRequest('/user', 'POST', { username, password })
      .then((data) => {
        console.log(data);
        alert('User has successfully registered');
        navigate('/list'); // Navigate to the list page
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Function to handle user login
  const handleLogin = async () => {
    // Make API request to check user credentials
    apiRequest('/user/c', 'POST', { username, password })
      .then((data) => {
        if (data) {
          navigate('/list'); // Navigate to the list page
        } else {
          alert('Incorrect username or password');
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      {/* Button to switch between registration and login */}
      <button
        onClick={() => {
          setIsRegistered(true);
          setUsername('');
          setPassword('');
        }}
      >
        Sign In
      </button>
      <h2>User Authentication</h2>
      {isRegistered ? (
        <div>
          <h3>Login</h3>
          <input
            style={{ margin: '10px' }}
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin} style={{ margin: '10px' }}>
            Login
          </button>
        </div>
      ) : (
        <div>
          <h3>Register</h3>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ margin: '10px' }}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleRegister} style={{ margin: '10px' }}>
            Register
          </button>
        </div>
      )}
    </div>
  );
};

export default UserAuthentication;
