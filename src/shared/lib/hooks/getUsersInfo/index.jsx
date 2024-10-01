import { useQuery } from "@tanstack/react-query";
import { students_api } from "../../../api";

export const useGetUserInfo = (id) => {
  return useQuery({
    queryKey: ["infoUser", id],
    queryFn: () => students_api.getAllStudents(),
    select: (data) => data.find((student) => student.Id === Number(id)),
  });
};
