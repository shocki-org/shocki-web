import { USERINFO_QUERY_KEY } from "@/hooks/user";
import getUser from "@/libs/user/get";
import { QueryClient } from "@tanstack/react-query";
import { Navigate, useLocation } from "react-router-dom";

const loader = (queryClient: QueryClient) => async () => {
  queryClient.invalidateQueries({
    predicate: (query) => query.queryKey[0] === USERINFO_QUERY_KEY,
  });

  return (
    (await queryClient.fetchQuery({
      queryKey: [USERINFO_QUERY_KEY],
      queryFn: getUser,
    })) ?? ""
  );
};

const PrivateRouter = () => {
  const location = useLocation();

  return (
    <Navigate
      to={{
        pathname: "/login",
        search: `?from=${location.pathname + location.search}`,
      }}
      replace
    />
  );
};

PrivateRouter.loader = loader;

export default PrivateRouter;
