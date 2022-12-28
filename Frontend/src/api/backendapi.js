import Axios from 'axios';
const api = require('../config');
exports.getAllTask = async (idToken) => {
  try {
    console.log('Fetching all user task');
    const response = await Axios.get(`${api.taskEndPoint}`, {
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
exports.createWorkSpace = async (idToken) => {
  try {
    console.log('creating workSpace');
    const response = await Axios.post(`${api.userEndPoint}`, {
      content: 'application/json',
      authorization: `Bearer ${idToken}`,
    });
    console.log(response);
    return response;
  } catch (err) {
    console.log(err);
  }
};
