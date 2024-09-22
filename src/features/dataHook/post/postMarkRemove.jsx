import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postService } from "../../services/data.service";

function useMarkRemove() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ schoolboyId, columnId }) =>
      postService.removeAbsence(schoolboyId, columnId),
    onSuccess: () => queryClient.invalidateQueries(["attendance"]),
  });
}

export default useMarkRemove;
