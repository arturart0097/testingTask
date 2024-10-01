import { useQuery } from "@tanstack/react-query";
import { students_api } from "../../../api";

export const useGetColumns = () => {
  return useQuery({
    queryKey: ["columns"],
    queryFn: () => students_api.getColumns(),
  });
};

export const useGetAttendance = () => {
  return useQuery({
    queryKey: ["attendance"],
    queryFn: () => students_api.getRates(),
  });
};
export const useGetStudents = () => {
  return useQuery({
    queryKey: ["students"],
    queryFn: () => students_api.getAllStudents(),
  });
};
