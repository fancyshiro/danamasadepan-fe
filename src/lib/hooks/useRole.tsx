import { useMutation, useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../utils/axios";
import { toast } from "sonner";
import { AxiosError } from "axios";

function useGetRole(){
  return useQuery({
    queryKey: ['role'],
    queryFn: async () => await axiosInstance.get('role').then(res => res.data)
  })
}

function useAddRole(){
  const { refetch } = useGetRole()

  return useMutation({
    mutationFn: async (name: string) => await axiosInstance.post('role/add', { name }, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then(res => res.data),
    onSuccess: (data) => {
      refetch()
      toast.success(data?.message)
    },
    onError: (error: AxiosError) => toast.error((error.response?.data as { message: string }).message)
  })
}

export {
  useGetRole,
  useAddRole
}