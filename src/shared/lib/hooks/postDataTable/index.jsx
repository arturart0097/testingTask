import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { students_api } from "../../../api";

export const useMarkRate = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["markRate"],
    mutationFn: (data) => students_api.markRate(data),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["attendance"] });
    },
    onError: (error) => {
      console.log(error);
    },
  });
};

export const useUnMarkRate = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["unMarkRate"],
    mutationFn: (data) => students_api.unMarkRate(data),
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["attendance"] });
    },
    onError: (error) => {
      console.log(error);
    },
  });
};
