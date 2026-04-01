import axios, {
  AxiosResponse,
  InternalAxiosRequestConfig,
  type AxiosInstance,
  type AxiosRequestConfig,
} from "axios";

import { env } from "@/utils/const";

const handleSuccess = (res: AxiosResponse) => {
  return res;
};

const handleError = async (error: any) => {
  const data = error?.response?.data as any;
  return Promise.reject(data?.meta || data || error);
};

const blogAxiosRequestConfig = {
  baseURL: env.BLOG_API_URL + env.BLOG_API_PREFIX,
  // responseType: "json",
};

export const blogRequest = axios.create(blogAxiosRequestConfig);

blogRequest.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    return config;
  },
  (error) => Promise.reject(error),
);
blogRequest.interceptors.response.use(handleSuccess, handleError);
