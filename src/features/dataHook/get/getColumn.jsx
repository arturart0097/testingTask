import { useQuery } from "@tanstack/react-query";

function useGetDataColumn(service) {
  const { data, isSuccess, isLoading } = useQuery({
    queryKey: ["column"],
    queryFn: () => service,
    select: (data) => data.data.Items,
  });

  return { column: data, isSuccess, isLoading };
}

export default useGetDataColumn;
