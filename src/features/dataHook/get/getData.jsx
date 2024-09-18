import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

function useGetDataUsers(service) {
  const { data, isSuccess, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: () => service,
    select: (data) => data.data,
  });

  return { user: data, isSuccess, isLoading };
}

export default useGetDataUsers;
