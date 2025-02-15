import { useMutation, useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../utils/axios";
import { getToken } from "../utils/getToken";
import { toast } from "sonner";
import { AxiosError } from "axios";
import { StudentUpdateFormData } from "../schema/Student";

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

//TODO - update student
function useUpdateStudent(id: string) {
  const { refetch } = useGetStudentDetail(id);

  const { mutate, isPending, isError, isSuccess } = useMutation({
    mutationFn: async (data: StudentUpdateFormData) => {
      const formData = new FormData();

      console.log(data);

      // Handle photo
      if (data.photo && data.photo[0]) {
        formData.append("photo", data.photo[0]);
      }

      // Handle other form fields
      formData.append("_method", "PUT");
      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("gender", data.gender);
      formData.append("major", data.major);
      formData.append("class", data.class);
      formData.append("phone", data.phone);
      formData.append("address", data.address);


      return axiosInstance.post(`student/update/${id}`, formData);
    },
    onSuccess: (data) => {
      refetch();

      toast.success(data.data.message);
    },
    onError: (error: AxiosError) =>
      toast.error((error.response?.data as { message: string }).message),
  });

  return {
    UpdateStudent: mutate,
    UpdateLoad: isPending,
    isSuccess,
    isError,
  };
}

export { useGetStudent, useUpdateStudent, useGetStudentDetail };
