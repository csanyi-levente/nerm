import axios from 'axios';
import { FETCH_USER } from './types';

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current-user');
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const handleToken = (token) => async dispatch => {
  console.log("hey");
  
  const res =  await axios.post('/api/stripe', token);
  dispatch({ type: FETCH_USER, payload: res.data });
};