import axios from 'axios';

const baseUrl = 'http://localhost:3010/api/v1';

const api = axios.create({
    baseURL: baseUrl,
  });
  
  export default api;