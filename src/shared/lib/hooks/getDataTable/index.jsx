import { useQuery } from "@tanstack/react-query";
import { postService } from "../../../api/data.service";

export function useGetDataAttendance(schoolboyId) {
  const { data, isSuccess, isLoading, refetch } = useQuery({
    queryKey: ["attendance"],
    queryFn: () =>
      postService.getAttendance(schoolboyId).then((res) => res.data),
    enabled: !!schoolboyId,
  });

  return { attendance: data, isSuccess, isLoading, refetch };
}

export function useGetDataColumn(service) {
  const { data, isSuccess, isLoading } = useQuery({
    queryKey: ["column"],
    queryFn: () => service,
    select: (data) => data.data.Items,
  });

  return { column: data, isSuccess, isLoading };
}

export function useGetDataUsers(service) {
  const { data, isSuccess, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: () => service,
    select: (data) => data.data,
  });

  return { user: data, isSuccess, isLoading };
}
