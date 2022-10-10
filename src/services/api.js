import axios from 'axios';

export const token = localStorage.getItem('@kenzieHub:token') || '';
export const api = axios.create({
  baseURL: 'https://kenziehub.herokuapp.com',
  timeout: 5000,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
