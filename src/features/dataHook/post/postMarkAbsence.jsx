import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postService } from "../../services/data.service";

function useMarkAbsence() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ schoolboyId, columnId }) =>
      postService.markAbsence(schoolboyId, columnId),
    onSuccess: () => {
      queryClient.invalidateQueries(["attendance"]);
    }
  });
}

export default useMarkAbsence;
