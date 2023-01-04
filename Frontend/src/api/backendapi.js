import Axios from 'axios';
import useAxiosPrivate from '../hooks/useAxiosPrivate';
import useAuth from '..useAuth/hooks/us';
const api = require('../config');
const axiosPrivate = useAxiosPrivate();
const setAuth = useAuth();

exports.getAllTask = async (idToken) => {
  try {
    console.log('Fetching all user task');
    const response = await axiosPrivate.get(`${api.taskEndPoint}`, {
      headers: {
        content: 'application/json',
        authorization: `Bearer ${idToken}`,
      },
    });
    console.log(response);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
exports.createWorkSpace = async () => {
  try {
    console.log('creating workSpace');
    const response = await axiosPrivate.post(`${api.userEndPoint}`);
    console.log(response);
    return response;
  } catch (err) {
    console.log(err);
  }
};
exports.createUser = async (userData) => {
  try {
    const response = await Axios.post(`${api.userEndPoint}`, {
      'Content-Type': 'application/json',
      userData,
    });
    console.log(response);
    const token = response?.data?.token;
    localStorage.setItem('token', token);
    setAuth(token);
  } catch (err) {
    console.error(err);
  }
};
