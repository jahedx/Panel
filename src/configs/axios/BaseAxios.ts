import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { BASE_URL } from '../ApiConfig';
import { ApiError, IotCloudPortalApiResponse } from '@/services/IotCloudPortal';

// Define microservice endpoints
export const MICROSERVICES = {
    AUTH: `${BASE_URL}:3001`,
    USER: `${BASE_URL}:3002`,
    PRODUCT: `${BASE_URL}:3003`,
    ORDER: `${BASE_URL}:3002`,
    PAYMENT: `${BASE_URL}:3003`,
};

// Create axios instances for each microservice
export const authAxios: AxiosInstance = createAxiosInstance(MICROSERVICES.AUTH);
export const userAxios: AxiosInstance = createAxiosInstance(MICROSERVICES.USER);
export const productAxios: AxiosInstance = createAxiosInstance(MICROSERVICES.PRODUCT);
export const orderAxios: AxiosInstance = createAxiosInstance(MICROSERVICES.ORDER);
export const paymentAxios: AxiosInstance = createAxiosInstance(MICROSERVICES.PAYMENT);

// Default axios instance (can be used for services without a specific instance)
const baseAxios: AxiosInstance = createAxiosInstance(BASE_URL);

// Helper function to create axios instances with common configuration
function createAxiosInstance(baseURL: string): AxiosInstance {
    const instance = axios.create({
        baseURL,
        // timeout: 10000, // Optional: Set request timeout
        headers: {
            'Content-Type': 'application/json',
        },
    });

    // Request interceptor
    instance.interceptors.request.use(
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

    // Response interceptor
    instance.interceptors.response.use(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (response: AxiosResponse<IotCloudPortalApiResponse<any>>) => {
            // Check if the response indicates a failure
            if (response.data.status === 'failure') {
                throw new ApiError(
                    'failure',
                    response.data.message || 'An error occurred',
                    response.data.key,
                    response.data.status_code
                );
            }
            return response;
        },
        (error) => {
            return Promise.reject(error);
        },
    );

    return instance;
}

export default baseAxios;
