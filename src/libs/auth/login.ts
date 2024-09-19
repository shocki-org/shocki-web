import { apiInstance } from "../api";

export interface Token {
  token: string;
}

export default async function login(phone: string, password: string) {
  const { data } = await apiInstance().post<Token>("/register/login", {
    phone,
    password,
  });

  localStorage.setItem("token", data.token);

  return data;
}
