import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import './Register.css';

export default function Register() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();

    // Simulate a successful registration
    if (username && password) {
      const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];
      const isUserRegistered = registeredUsers.find((user) => user.username === username);

      if (isUserRegistered) {
        setError('Username already exists');
      } else {
        registeredUsers.push({ username, password });
        localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));
        navigate('/login');
      }
    } else {
      setError('Please provide a username and password');
    }
  };

  return (
    <div className="register-container">
      <h1>Register</h1>
      <form onSubmit={handleRegister}>
        <input
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
        {error && <p className="error-message">{error}</p>}
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
