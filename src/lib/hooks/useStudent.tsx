import { useMutation, useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../utils/axios";
import { getToken } from "../utils/getToken";
import { toast } from "sonner";
import { AxiosError } from "axios";

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

function useUpdateStudent(id: string) {
  const { refetch } = useGetStudentDetail(id);

  const { mutate, isPending, isError, isSuccess } = useMutation({
    mutationFn: async (data: FormData) =>
      axiosInstance.post(`admin/update/${id}`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }),
    onSuccess: (data) => {
      refetch();

      toast.success(data.data.message);
    },
    onError: (error: AxiosError) =>
      toast.error((error.response?.data as { message: string }).message),
  });

  return {
    handleUpdate: mutate,
    updateLoad: isPending,
    isSuccess,
    isError,
  };
}

export { useGetStudent, useUpdateStudent, useGetStudentDetail };
