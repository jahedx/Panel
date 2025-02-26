import axios, { AxiosInstance } from 'axios';
import { BASE_URL } from '../ApiConfig';

const baseAxios: AxiosInstance = axios.create({
    baseURL: BASE_URL,
    // timeout: 10000, // Optional: Set request timeout
    headers: {
        'Content-Type': 'application/json',
    },
});

baseAxios.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    },
);

baseAxios.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        return Promise.reject(error);
    },
);

export default baseAxios;
