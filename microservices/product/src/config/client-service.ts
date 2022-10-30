import axios from 'axios';

const url = 'http://localhost:3000/';

const client = axios.create({
  baseURL: url,
});

export default client;
