import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://your-api-url.com/api', // Replace with your API base URL
  timeout: 10000, // 10 seconds timeout
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
