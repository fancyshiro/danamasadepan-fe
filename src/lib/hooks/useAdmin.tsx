import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { axiosInstance } from "../utils/axios";
import { getToken } from "../utils/getToken";
import { toast } from "sonner";
import axios, { AxiosError } from "axios";
import { useGetStudent } from "./useStudent";
import { AdminFormData } from "../schema/Admin";

/**
 * Function untuk mengambil data admin yang sedang login
 *
 * @returns data admin yang sedang login
 */
function useGetAdmin() {
  return useQuery({
    queryKey: ["admin"],
    queryFn: () => axiosInstance.get('admin').then(res => res.data),
  })
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
        formData.append('photo', data.photo[0]);
      }

      // Handle other form fields
      formData.append('name', data.name);
      formData.append('email', data.email);
      formData.append('password', data.password);
      formData.append('role_id', String(data.role_id));

      return axiosInstance.post('admin/add', formData, {
        headers: { 
          'Content-Type': 'multipart/form-data',
          'Accept': 'application/json'
        }
      });
      
    },
    onSuccess: (data) => {
      refetch();

      toast.success(data.data.message);
    },
    onError: (error: AxiosError<{ message: string }>) => {
      const errorMessage = error.response?.data?.message;
      toast.error(errorMessage || 'Terjadi kesalahan saat menambah admin');
    }
  });
}

// * ERORR
function useGetUser() {
  return useQuery({
    queryKey: ["admin"],
    queryFn: () => axiosInstance.get('admin/detail').then(res => res.data),
  })
}

function useLogout() {
  return useMutation({
    mutationFn: () => axiosInstance.post('auth/logout'),
    onSuccess: (data) => {
      localStorage.removeItem('token');
      localStorage.removeItem('role');
      window.location.href = '/'
      
      toast.success(data.data.message)
    }
  })
}

/**
 * Function untuk mengubah status siswa untuk menabung
 * 
 * @param {Object} data - object yang berisi id dan status allowed
 * @returns Mutation hook untuk mengubah status admin
 */
function useChangeAllowed(){
  const { refetch } = useGetStudent('all')

  return useMutation({
    mutationFn: async (data: { id: number, allowed: boolean }) => axiosInstance.put('admin/update/status', data).then(res => res.data),
    onSuccess: (data) => {
      refetch()
      toast.success(data?.message)
    },
    onError: (error: AxiosError) => {
      toast.error((error.response?.data as { message: string }).message)
    }
  })
} 

export {
  useGetAdmin,
  useAddAdmin,
  useGetUser,
  useLogout,
  useChangeAllowed
}