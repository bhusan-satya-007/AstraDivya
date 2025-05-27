import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

// API configuration
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api';

// Create axios instance with default config
const apiClient: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000, // 10 seconds timeout
});

// Request interceptor
apiClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // Get token from localStorage
    const token = localStorage.getItem('auth_token');
    
    // If token exists, add it to headers
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

// Response interceptor
apiClient.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  async (error: AxiosError) => {
    const originalRequest = error.config;
    
    // Handle 401 Unauthorized errors
    if (error.response?.status === 401 && originalRequest) {
      // Clear auth data
      localStorage.removeItem('auth_token');
      
      // Redirect to login page if not already there
      if (!window.location.pathname.includes('/login')) {
        window.location.href = '/login';
      }
    }
    
    // Handle other errors
    const errorMessage = (error.response?.data as { message?: string })?.message || 'An error occurred';
    console.error('API Error:', errorMessage);
    
    return Promise.reject({
      message: errorMessage,
      status: error.response?.status,
      data: error.response?.data
    });
  }
);

// API endpoints
export const api = {
  // Auth endpoints
  auth: {
    login: async (credentials: { email: string; password: string }) => {
      const response = await apiClient.post('/auth/login', credentials);
      if (response.data.token) {
        localStorage.setItem('auth_token', response.data.token);
      }
      return response.data;
    },
    
    register: async (userData: { email: string; password: string; name: string }) => {
      const response = await apiClient.post('/auth/register', userData);
      return response.data;
    },
    
    logout: () => {
      localStorage.removeItem('auth_token');
    },
    
    getCurrentUser: async () => {
      const response = await apiClient.get('/auth/me');
      return response.data;
    }
  },
  
  // Horoscope endpoints
  horoscope: {
    getDailyHoroscope: async (sign: string) => {
      const response = await apiClient.get(`/horoscope/daily/${sign}`);
      return response.data;
    },
    
    getBirthChart: async (birthData: {
      date: string;
      time: string;
      latitude: number;
      longitude: number;
    }) => {
      const response = await apiClient.post('/horoscope/birth-chart', birthData);
      return response.data;
    }
  },
  
  // Madhav AI endpoints
  madhav: {
    sendMessage: async (message: string) => {
      const response = await apiClient.post('/madhav/chat', { message });
      return response.data;
    },
    
    getChatHistory: async () => {
      const response = await apiClient.get('/madhav/chat/history');
      return response.data;
    }
  },
  
  // Readings endpoints
  readings: {
    getFeaturedReadings: async () => {
      const response = await apiClient.get('/readings/featured');
      return response.data;
    },
    
    purchaseReading: async (readingId: string) => {
      const response = await apiClient.post(`/readings/${readingId}/purchase`);
      return response.data;
    },
    
    getReadingDetails: async (readingId: string) => {
      const response = await apiClient.get(`/readings/${readingId}`);
      return response.data;
    }
  }
};

// Export types
export interface ApiError {
  message: string;
  status?: number;
  data?: any;
}

export interface AuthResponse {
  token: string;
  user: {
    id: string;
    email: string;
    name: string;
  };
}

export interface HoroscopeResponse {
  sign: string;
  date: string;
  prediction: string;
  categories: {
    love: string;
    career: string;
    health: string;
  };
}

export interface BirthChartResponse {
  planets: Array<{
    name: string;
    sign: string;
    house: number;
    aspects: Array<{
      planet: string;
      type: string;
      orb: number;
    }>;
  }>;
  houses: Array<{
    number: number;
    sign: string;
    planets: string[];
  }>;
  aspects: Array<{
    planet1: string;
    planet2: string;
    type: string;
    orb: number;
  }>;
}

export interface MadhavResponse {
  message: string;
  timestamp: string;
  type: 'text' | 'voice';
}

export interface ReadingResponse {
  id: string;
  title: string;
  description: string;
  price: number;
  duration: string;
  features: string[];
  imageUrl: string;
}

export default api; 