import { useMutation, useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../utils/axios";
import { getToken } from "../utils/getToken";
import { toast } from "sonner";
import { AxiosError } from "axios";
import { useGetStudent } from "./useStudent";

/**
 * Function untuk mengambil data admin yang sedang login
 *
 * @returns data admin yang sedang login
 */
function useGetAdmin(type: 'all' | 'detail') {
  const url = type === 'all' ? 'admin' : 'admin/detail'
  
  return useQuery({
    queryKey: ["admin"],
    queryFn: () => axiosInstance.get(url, {
      headers: {
        Authorization: `Bearer ${getToken()}`
      }
    }).then(res => res.data),
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
    mutationFn: async (data: { id: number, allowed: boolean }) => axiosInstance.put('admin/update/status', data, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${getToken()}`
      }
    }).then(res => res.data),
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
  useChangeAllowed
}