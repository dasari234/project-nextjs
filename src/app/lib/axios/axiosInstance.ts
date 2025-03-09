import axios, { AxiosInstance, AxiosError, AxiosResponse } from "axios";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || "https://api.example.com",
  timeout: 10000, // 10 seconds timeout
  headers: {
    "Content-Type": "application/json",
  },
});

// Request Interceptor: Attach token if available
axiosInstance.interceptors.request.use(
  (config) => {
    const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error: AxiosError) => Promise.reject(error)
);

// Response Interceptor: Handle errors globally
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    if (error.response) {
      const errorMessage = (error.response.data as { message: string }).message || "An error occurred";
      return Promise.reject(new Error(errorMessage));
    } else if (error.request) {
      return Promise.reject(new Error("No response from server"));
    } else {
      return Promise.reject(new Error("Request setup failed"));
    }
  }
);

export default axiosInstance;
