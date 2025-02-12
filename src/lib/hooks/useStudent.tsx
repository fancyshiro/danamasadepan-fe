import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../utils/axios";
import { getToken } from "../utils/getToken";

function useGetStudent(type: "all" | "detail") {
  const url = type === "all" ? "student" : "student/detail";

  return useQuery({
    queryKey: ["student"],
    queryFn: () => axiosInstance.get(url).then((res) => res.data),
  });
}

/**
 * Function untuk mengambil data detail student berdasarkan id
 *
 * @param {string} id id student yang akan diambil
 * @returns data detail student yang sesuai dengan id
 */
function useGetStudentDetail(id: string) {
  return useQuery({
    queryKey: ["student", id],
    queryFn: () => axiosInstance.get(`student/detail/${id}`).then((res) => res.data),
    enabled: !!id,
  });
}

export { useGetStudent, useGetStudentDetail };
