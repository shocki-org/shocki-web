import { authInstance } from "../api";

type Provider = "GOOGLE" | "KAKAO" | "PHONE" | "TEST";

interface UserAccount {
  id: string;
  walletAddress: string;
  credit: number;
}

export interface User {
  id: string;
  provider: Provider;
  providerId: string;
  userAccount: UserAccount;
  settlementAmount: number;
}

export default async function getUser() {
  const { data } = await authInstance().get<User>("/user");
  return data;
}
