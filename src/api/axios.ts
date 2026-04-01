import axios, { type AxiosInstance, type AxiosRequestConfig } from 'axios';

import { appConfig } from '@/config';
import { env } from '@/utils/const';
import { errorInterceptor, requestInterceptor, successInterceptor } from './interceptors';

const axiosRequestConfig: AxiosRequestConfig = {
  baseURL: appConfig.apiUrl + env.API_PREFIX,
  responseType: 'json',
};

export const request: AxiosInstance = axios.create(axiosRequestConfig);

request.interceptors.request.use(requestInterceptor);
request.interceptors.response.use(successInterceptor, errorInterceptor);
