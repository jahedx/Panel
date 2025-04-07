/* eslint-disable @typescript-eslint/no-explicit-any */
import { authAxios, userAxios, productAxios, orderAxios, paymentAxios } from '@/configs/axios/BaseAxios';

// Auth Service Examples
export const authService = {
    login: async (credentials: { email: string; password: string }) => {
        const response = await authAxios.post('/auth/login', credentials);
        return response.data;
    },

    register: async (userData: { email: string; password: string; name: string }) => {
        const response = await authAxios.post('/auth/register', userData);
        return response.data;
    },

    refreshToken: async (refreshToken: string) => {
        const response = await authAxios.post('/auth/refresh', { refreshToken });
        return response.data;
    }
};

// User Service Examples
export const userService = {
    getProfile: async (userId: string) => {
        const response = await userAxios.get(`/users/${userId}`);
        return response.data;
    },

    updateProfile: async (userId: string, profileData: any) => {
        const response = await userAxios.put(`/users/${userId}`, profileData);
        return response.data;
    },

    getPreferences: async (userId: string) => {
        const response = await userAxios.get(`/users/${userId}/preferences`);
        return response.data;
    }
};

// Product Service Examples
export const productService = {
    getProducts: async (params?: { category?: string; page?: number; limit?: number }) => {
        const response = await productAxios.get('/products', { params });
        return response.data;
    },

    getProductById: async (productId: string) => {
        const response = await productAxios.get(`/products/${productId}`);
        return response.data;
    },

    searchProducts: async (query: string) => {
        const response = await productAxios.get('/products/search', { params: { q: query } });
        return response.data;
    }
};

// Order Service Examples
export const orderService = {
    createOrder: async (orderData: any) => {
        const response = await orderAxios.post('/orders', orderData);
        return response.data;
    },

    getOrderById: async (orderId: string) => {
        const response = await orderAxios.get(`/orders/${orderId}`);
        return response.data;
    },

    getUserOrders: async (userId: string) => {
        const response = await orderAxios.get(`/orders/user/${userId}`);
        return response.data;
    }
};

// Payment Service Examples
export const paymentService = {
    processPayment: async (paymentData: any) => {
        const response = await paymentAxios.post('/payments/process', paymentData);
        return response.data;
    },

    getPaymentHistory: async (userId: string) => {
        const response = await paymentAxios.get(`/payments/history/${userId}`);
        return response.data;
    },

    getPaymentMethods: async (userId: string) => {
        const response = await paymentAxios.get(`/payments/methods/${userId}`);
        return response.data;
    }
};

// Example of using these services in a component
/*
import { authService, userService, productService } from '@/services/api-example';

// In a login component
const handleLogin = async (email: string, password: string) => {
  try {
    const result = await authService.login({ email, password });
    // Handle successful login
    localStorage.setItem('token', result.token);
    // Navigate to dashboard
  } catch (error) {
    // Handle error
    console.error('Login failed:', error);
  }
};

// In a product listing component
const fetchProducts = async () => {
  try {
    const products = await productService.getProducts({ category: 'electronics', page: 1, limit: 10 });
    // Update state with products
    setProducts(products);
  } catch (error) {
    // Handle error
    console.error('Failed to fetch products:', error);
  }
};
*/ 