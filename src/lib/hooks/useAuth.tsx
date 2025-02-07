import { useMutation } from "@tanstack/react-query";
import { axiosInstance } from "../utils/axios";
import { Auth } from "../schema/Auth";
import { toast } from "sonner";
import { AxiosError } from "axios";

function useLogin() {
  return useMutation({
    mutationFn: async (data: Auth) => axiosInstance.post('/auth/login', data).then(res => res.data),
    onSuccess: (data) => {
      localStorage.setItem('token', data.result.token)
      toast.success('Login Berhasil, Mohon Tunggu...')
      window.location.href = '/dashboard'
    },
    onError: (error: AxiosError) => {
      console.log(error);

      toast.error((error.response?.data as { message: string }).message)
    }
  })
}

export {
  useLogin
}