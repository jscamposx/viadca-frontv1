import axios, { 
  type InternalAxiosRequestConfig, 
  type AxiosError, 
  type AxiosResponse 
} from "axios";
import { API_CONFIG } from "./config";
import { getToken, removeToken } from "./tokenManager"; 

const apiClient = axios.create({
  baseURL: API_CONFIG.BASE_URL,
  timeout: API_CONFIG.timeout,
  headers: API_CONFIG.headers,
  withCredentials: true,
});


const authRequestInterceptor = (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
  const token = getToken();
  
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
};


const errorResponseInterceptor = async (error: AxiosError): Promise<never> => {
 
  if (error.response?.status === 401) {
    removeToken();
 
  }

  return Promise.reject(error);
};

apiClient.interceptors.request.use(authRequestInterceptor, (error) => Promise.reject(error));
apiClient.interceptors.response.use(
  (response: AxiosResponse) => response, 
  errorResponseInterceptor
);

export default apiClient;