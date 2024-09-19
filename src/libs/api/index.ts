import axios, { AxiosError } from "axios";

export const apiInstance = (withCredentials?: boolean) => {
  const instance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: withCredentials ?? true,
    headers: {
      "Content-Type": "application/json",
    },
  });

  instance.interceptors.response.use(
    (config) => config,
    async (error: AxiosError) => error
  );

  return instance;
};

const redirect = () => {
  window.location.href = "/login";
};

export const authInstance = () => {
  const instance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
    },
  });
  instance.interceptors.request.use(async (config) => {
    if (localStorage.getItem("accessToken") === "") redirect();

    config.headers["Authorization"] = `Bearer ${localStorage.getItem(
      "accessToken"
    )}`;

    return config;
  });

  instance.interceptors.response.use(
    (config) => config,
    async (error: AxiosError) => {
      if (error.response?.status === 401) redirect();
      return error;
    }
  );

  return instance;
};
