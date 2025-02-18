import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { axiosInstance } from "../utils/axios";
import { getToken } from "../utils/getToken";
import { toast } from "sonner";
import axios, { AxiosError } from "axios";
import { useGetStudent } from "./useStudent";
import { AdminFormData, AdminUpdateFormData } from "../schema/Admin";

/**
 * Function untuk mengambil data admin yang sedang login
 *
 * @returns data admin yang sedang login
 */
function useGetAdmin() {
  return useQuery({
    queryKey: ["admin"],
    queryFn: () => axiosInstance.get("admin").then((res) => res.data),
  });
}

/**
 * Function untuk mengambil data detail admin berdasarkan id
 *
 * @param {string} id id admin yang akan diambil
 * @returns data detail admin yang sesuai dengan id
 */
function useGetAdminDetail(id: string) {
  const { data, refetch, isPending } =  useQuery({
    queryKey: ["admin", id],
    queryFn: () => axiosInstance.get(`admin/detail/${id}`).then((res) => res.data),
    enabled: !!id,
  });

  return {
    result: data?.result || {},
    refetchAdminDetail: refetch,
    loadingAdminDetail: isPending,
  }
}

/**
 * Function untuk menambah Admin Baru
 *
 * @returns Mutation hook for adding a new admin.
 */

function useAddAdmin() {
  const { refetch } = useGetAdmin();

  return useMutation({
    mutationFn: async (data: AdminFormData) => {
      const formData = new FormData();

      if (data.photo && data.photo[0] instanceof File) {
        formData.append("photo", data.photo[0]);
      }

      // Handle other form fields
      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("password", data.password);
      formData.append("role_id", String(data.role_id));

      return axiosInstance.post("admin/add", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Accept: "application/json",
        },
      });
    },
    onSuccess: (data) => {
      refetch();

      toast.success(data.data.message);
    },
    onError: (error: AxiosError<{ message: string }>) => {
      const errorMessage = error.response?.data?.message;
      toast.error(errorMessage || "Terjadi kesalahan saat menambah admin");
    },
  });
}

/**
 * Function untuk mengupdate data admin
 *
 * @returns Mutation hook untuk mengupdate data admin
 */
function useUpdateAdmin(id: string) {
  const { refetchAdminDetail } = useGetAdminDetail(id);
  const { refetch: refetchUser } = useGetUser();

  const { mutate, isPending, isError, isSuccess } = useMutation({
    mutationFn: async (data: AdminUpdateFormData) => {
      const formData = new FormData();

      // Handle photo
      if (data.photo && data.photo[0]) {
        formData.append("photo", data.photo[0]);
      }

      // Handle other form fields
      formData.append("_method", "PUT");
      formData.append("name", data.name);
      formData.append("email", data.email);
      if (data.role_id) {
        formData.append("role_id", String(data.role_id));
      }

      return axiosInstance.post(`admin/update/${id}`, formData);
    },
    onSuccess: (data) => {
      refetchAdminDetail();
      refetchUser();
      toast.success(data.data.message);
    },
    onError: (error: AxiosError) =>
      toast.error((error.response?.data as { message: string }).message),
  });

  return {
    UpdateAdmin: mutate,
    UpdateLoad: isPending,
    isSuccess,
    isError,
  };
}

/**
 * Function untuk menghapus data admin
 *
 * @param {string} id ID admin yang ingin dihapus
 */
function useDeleteAdmin() {
  const { refetch } = useGetAdmin();

  const { mutate, isPending } = useMutation({
    mutationFn: (id: string) => axiosInstance.delete(`admin/delete/${id}`),
    onSuccess: (data) => {
      refetch();

      toast.success(data.data.message);
    },
    onError: (error: AxiosError) =>
      toast.error((error.response?.data as { message: string }).message),
  });

  return {
    DeleteAdmin: mutate,
    loadingDelete: isPending,
  };
}

/**
 * Function untuk mengambil data admin yang sedang login
 *
 * @returns data admin yang sedang login
 */
function useGetUser() {
  return useQuery({
    queryKey: ["user"],
    queryFn: () => axiosInstance.get("admin/profile").then((res) => res.data),
  });
}

/**
 * Function untuk mengubah status siswa untuk menabung
 */
function useChangeAllowed() {
  const { refetch } = useGetStudent("all");

  const { mutate } = useMutation({
    mutationFn: async (id: string | number) =>
      axiosInstance.put(`admin/update/${id}/status`).then((res) => res.data),
    onSuccess: (data) => {
      refetch();
      toast.success(data?.message);
    },
    onError: (error: AxiosError) => {
      toast.error((error.response?.data as { message: string }).message);
    },
  });

  return {
    handleUpdate: mutate,
  };
}

export {
  useGetAdmin,
  useGetAdminDetail,
  useAddAdmin,
  useDeleteAdmin,
  useGetUser,
  useChangeAllowed,
  useUpdateAdmin,
};
