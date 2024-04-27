import axios from 'axios';

const baseUrl = 'https://dev-portfolio-g8sr.onrender.com/api/v1';

const api = axios.create({
    baseURL: baseUrl,
  });
  
  export default api;