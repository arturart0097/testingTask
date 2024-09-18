import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

function useGetDataColumn(service) {
  const { data, isSuccess, isLoading } = useQuery({
    queryKey: ["column"],
    queryFn: () => service,
    select: (data) => data.data,
  });

  return { column: data, isSuccess, isLoading };
}

export default useGetDataColumn;
