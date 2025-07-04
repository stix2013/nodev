import axios, { AxiosError, AxiosResponse } from 'axios';
import { userSchema } from './schemas';
import { EXPIRED_SESSION_ROUTE, LOGIN_ROUTE } from './constants';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'https://api.nodev.ddev.site',
  withCredentials: true,
  withXSRFToken: true,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Cache-Control": "no-cache",
  }
});

export const axiosInstance = api.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {

    if (error.response?.status === 401) {
      if (typeof window !== "undefined" && window.location.pathname !== LOGIN_ROUTE) {
        // We're on the client side
        // It's important to check that we're not on the login page, otherwise we'll end up in an infinite loop
        // The server side redirects are handled by the ServerSideRequestsManager class
        window.location.href = EXPIRED_SESSION_ROUTE;
      }
    }
    return Promise.reject(error);
  }
);

export const getUser = async (id: number) => {
  const response = await api.get(`api/user/${id}`);
  return userSchema.parse(response.data.data);
};

export const getUsers = async () => {
  const response = await api.get(`api/users`);
  return userSchema.array().parse(response.data.data);
};