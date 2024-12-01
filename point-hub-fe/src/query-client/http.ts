'use client';
import { BASE_API_URL } from '@/config';
import axios from 'axios';
import { getCookie } from 'cookies-next';
import { PREFERED_LANG_COOKIE_NAME } from '../lib/constants';

export const axiosInstance = axios.create({
  headers: {},
  baseURL: BASE_API_URL,
});

axiosInstance.defaults.withCredentials = true;

export const http = {
  get: function get<Response = unknown>(url: string) {
    const locale = getCookie(PREFERED_LANG_COOKIE_NAME);
    return axiosInstance
      .get<Response>(
        url,
        locale
          ? {
              params: {
                locale,
              },
            }
          : {}
      )
      .then((res) => res?.data);
  },
  post: function post<Request = unknown, Response = unknown>(url: string, data?: Request) {
    return axiosInstance.post<Response>(url, data).then((res) => res?.data);
  },
  del: function del<Response = unknown>(url: string) {
    return axiosInstance.delete<Response>(url).then((res) => res?.data);
  },
  put: function put<Request = unknown, Response = unknown>(url: string, data?: Request) {
    return axiosInstance.put<Response>(url, data).then((res) => res?.data);
  },
  patch: function patch<Request = unknown, Response = unknown>(url: string, data?: Request) {
    return axiosInstance.patch<Response>(url, data).then((res) => res?.data);
  },
};
