import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postService } from "../../../api/data.service";
import { useState } from "react";

export function useMarkAbsence() {
  const queryClient = useQueryClient();
  const [error, setError] = useState(null);

  const mutation = useMutation({
    mutationFn: ({ schoolboyId, columnId }) =>
      postService.markAbsence(schoolboyId, columnId),
    onSuccess: () => {
      queryClient.invalidateQueries(["attendance"]);
      setError(null);
    },
    onError: (error) => {
      setError(error);
    },
  });

  return { mutation, error };
}

export function useMarkRemove() {
  const queryClient = useQueryClient();
  const [error, setError] = useState(null);

  const mutation = useMutation({
    mutationFn: ({ schoolboyId, columnId }) =>
      postService.removeAbsence(schoolboyId, columnId),
    onSuccess: () => {
      queryClient.invalidateQueries(["attendance"]);
      setError(null);
    },
    onError: (error) => {
      setError(error);
    },
  });

  return { mutation, error };
}
