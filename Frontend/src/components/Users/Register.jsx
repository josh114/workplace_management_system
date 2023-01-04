import useAuth from '../../hooks/useAuth';
import axios from '../../api/axios';
import SideBar from './SideBar';
import { Button } from '@mui/material';
import { useState, useEffect, useRef } from 'react';
const LOGIN_URL = '/api/v0/user/';
const Register = () => {
  const setAuth = useAuth();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [role, setRole] = useState('');
  const [phone, setPhone] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const [address, setAddress] = useState('');
  const [errmsg, setErrmsg] = useState('');
  useEffect(() => {
    setErrmsg('');
  }, [name, password]);
  const errRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setRole('admin');
      const response = await axios.post(
        LOGIN_URL,
        {
          name,
          password,
          passwordConfirm,
          address,
          state,
          country,
          email,
          phone,
          role,
        },
        {
          'Content-Type': 'application/json',
        }
      );

      const token = response?.data?.token;
      localStorage.setItem('token', token);
      setAuth(token);
      setName('');
      setEmail('');
      setAddress('');
      setState('');
      setCountry('');
      setPhone('');
      setPassword('');
      setPasswordConfirm('');
    } catch (err) {
      if (!err?.response) {
        setErrmsg('No server response');
      } else if (err?.response === 400) {
        setErrmsg('Missing details');
      } else if (err?.response === 401) {
        setErrmsg('Unauthorized');
      } else {
        setErrmsg('Registration fail');
      }
    }
  };
  return (
    <div className='reg'>
      <SideBar />
      <form onSubmit={handleSubmit}>
        <div className='regformtext'>
          <h1>Sign up as an Organization</h1>
        </div>
        <div className='regformgroup'>
          <label htmlFor='name'>Full Name:</label>
          <input
            id='name'
            type='text'
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          ></input>
        </div>
        <div className='regformgroup'>
          <label htmlFor='email'>Email Address:</label>
          <input
            id='email'
            type='email'
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></input>
        </div>
        <div className='regformgroup'>
          <label htmlFor='address'>Address:</label>
          <input
            id='address'
            type='text'
            value={address}
            onChange={(e) => {
              setAddress(e.target.value);
            }}
          />
        </div>
        <div className='regformgroup'>
          <label htmlFor='state'>Province/State:</label>
          <input
            id='state'
            type='text'
            value={state}
            onChange={(e) => {
              setState(e.target.value);
            }}
          />
        </div>
        <div className='regformgroup'>
          <label htmlFor='country'>Country:</label>
          <input
            id='country'
            type='text'
            value={country}
            onChange={(e) => {
              setCountry(e.target.value);
            }}
          />
        </div>
        <div className='regformgroup'>
          <label htmlFor='phone'>Phone Number:</label>
          <input
            id='phone'
            type='text'
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          ></input>
        </div>
        <div className='regformgroup'>
          <label htmlFor='password'>Password:</label>
          <input
            id='password'
            type='text'
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          ></input>
        </div>
        <div className='regformgroup'>
          <label htmlFor='passwordConfirm'>Confirm Password:</label>
          <input
            id='passwordConfirm'
            type='text'
            value={passwordConfirm}
            onChange={(e) => {
              setPasswordConfirm(e.target.value);
            }}
          ></input>
        </div>
        <Button variant='contained' type='submit' className='regbut'>
          Register
        </Button>
      </form>
      <div className='reglog'>
        <p>already have an account?</p>
        <Button variant='contained' size='medium' className='regbut'>
          Login
        </Button>
      </div>
    </div>
  );
};

export default Register;
