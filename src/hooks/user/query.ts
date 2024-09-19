import { User } from "@/libs/user";
import getUser from "@/libs/user/get";
import { useSuspenseQuery } from "@tanstack/react-query";

export const USERINFO_QUERY_KEY = "userinfo";

export function useUserInfo() {
  return useSuspenseQuery<User>({
    queryKey: [USERINFO_QUERY_KEY],
    queryFn: getUser,
  });
}
