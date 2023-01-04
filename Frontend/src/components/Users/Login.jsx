import Logo from '../Home/header/Logo';
import { useEffect } from 'react';
import { useState, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './login.css';
import useAuth from '../../hooks/useAuth';
import axios from '../../api/axios';
const LOGIN_URL = '/api/v0/user/login';

function Login() {
  const { setAuth } = useAuth();
  const errRef = useRef();

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || 'dashboard';

  const storedJwt = localStorage.getItem('token');
  const [users, setUsers] = useState('');
  const [password, setPassword] = useState('');
  const [errmsg, setErrmsg] = useState('');
  const [jwt, setJwt] = useState(storedJwt || null);

  useEffect(() => {
    setErrmsg('');
  }, [users, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log(users, password);
      const response = await axios.post(
        LOGIN_URL,
        { email: users, password },
        {
          headers: { 'content-type': 'application/json' },
        }
      );
      const responseData = response.data;
      console.log('this is responseData', responseData);
      const token = responseData.data.token;
      console.log('this is the response token', token);
      localStorage.setItem('token', token);
      setAuth({ users, password, token });
      setPassword('');
      setUsers('');
      navigate(from, { replace: true });
    } catch (err) {
      console.log(err);
      if (!err.response) {
        setErrmsg('No server response');
      } else if (err.response === 400) {
        setErrmsg('Email or password missing');
      } else if (err.response === 401) {
        setErrmsg('Unauthorized');
      } else {
        setErrmsg('Login Failed');
      }
      errRef.current.focus();
    }
  };
  return (
    <div>
      <div className='navbar'>
        <Logo />
      </div>
      <div className='formLogin'>
        <p aria-live='assertive' className={errmsg ? 'errmsg' : 'offscreen'}>
          {errmsg}
        </p>
        <h1 className='loginHeader'>Log In</h1>
        <form onSubmit={handleSubmit} className='loginForm'>
          <label htmlFor='username'>Email address:</label>
          <input
            id='username'
            value={users}
            autoComplete='off'
            type='email'
            required
            onChange={(e) => {
              setUsers(e.target.value);
            }}
          />
          <label htmlFor='password'>Password:</label>
          <input
            id='password'
            value={password}
            type='password'
            required
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button type='submit'>
            Log In <span>&rarr;</span>
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;

/* 
 <>
      {success ? (
        <section className='loginSec'>
          <h1>You are logged In</h1>
          <br />
          <p>Go home</p>
        </section>
      ) : (
        <section className='loginSec'>
          <p aria-live='assertive' className={errmsg ? 'errmsg' : 'offscreen'}>
            {errmsg}
          </p>
          <h1>Sign in</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor='username'>Email address:</label>
            <input
              id='username'
              value={users}
              autoComplete='off'
              type='email'
              required
              onChange={(e) => {
                setUsers(e.target.value);
              }}
            />
            <label htmlFor='password'>Password:</label>
            <input
              id='password'
              value={password}
              type='password'
              required
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <button type='submit'>Sign In</button>
          </form>
        </section>
      )}
    </>
*/
