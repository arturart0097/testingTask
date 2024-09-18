import { useQuery } from "@tanstack/react-query";
import { postService } from "../../services/data.service";

function useGetDataAttendance(schoolboyId) {
  const { data, isSuccess, isLoading, error, refetch } = useQuery({
    queryKey: ["attendance", schoolboyId],
    queryFn: () => postService.getAttendance(schoolboyId).then(res => res.data),
    enabled: !!schoolboyId,
  });

  return { attendance: data, isSuccess, isLoading, error, refetch };
}

export default useGetDataAttendance;
