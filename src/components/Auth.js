import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const Auth = ({ authType }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(`/api/auth/${authType}`, { username, email, password });
      dispatch({ type: 'LOGIN', payload: data });
      history.push('/dashboard');
    } catch (error) {
      console.error(`${authType} error`, error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {authType === 'register' && (
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      )}
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">{authType === 'register' ? 'Register' : 'Login'}</button>
    </form>
  );
};

export default Auth;
