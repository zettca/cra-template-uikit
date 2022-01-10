import axios from "axios";
import { getCookie } from "lib/utils/cookie";
import { AUTH_URL } from "lib/api/auth";

export const setupAxios = (logout: () => void) => {
  axios.interceptors.request.use(
    (config) => {
      if (config.url !== AUTH_URL) {
        const token = getCookie("token");
        const headers = { ...config.headers, Authorization: `Bearer ${token}` };
        return { ...config, headers };
      }
      return config;
    },
    (error) => Promise.reject(error)
  );

  axios.interceptors.response.use(
    (response) => response,
    (error) => {
      if (
        error.response.status === 401 ||
        error.response.status === 403 ||
        error.response.data.message === "401 Unauthorized"
      ) {
        // Clear existing token and logout
        logout();
      }
      return Promise.reject(error);
    }
  );
};
