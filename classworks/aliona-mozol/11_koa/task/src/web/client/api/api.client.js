import axios from 'axios';

export const postRequest = (url, data) => axios.post(url, data);
