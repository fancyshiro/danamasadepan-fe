import { useMutation } from "@tanstack/react-query";
import { axiosInstance } from "../utils/axios";
import { Login, Register } from "../schema/Auth";
import { toast } from "sonner";
import { AxiosError } from "axios";

/**
 * Function untuk melakukan login
 * 
 * @returns 
 * A mutation hook to login user. It will post the login data to `/auth/login` endpoint.
 * If the login is success, it will store the token and role to localstorage and redirect to `/dashboard` if the role is admin, otherwise it will redirect to `/profile`.
 * If the login is failed, it will show a toast error with the message from the server.
 */
function useLogin() {
  return useMutation({
    mutationFn: async (data: Login) => axiosInstance.post('/auth/login', data).then(res => res.data),
    onSuccess: (data) => {
      localStorage.setItem('token', data.result.token)
      localStorage.setItem('role', data.result.role)

      toast.success(data?.message)
      data.result.role === 'admin' ? window.location.href = '/dashboard' : window.location.href = '/profile'
    },
    onError: (error: AxiosError) => {
      console.log(error);

      toast.error((error.response?.data as { message: string }).message)
    }
  })
}

function useRegister() {
  return useMutation({
    mutationFn: async (data: FormData) => axiosInstance.post('/auth/register', data, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then(res => res.data),
    onSuccess: (data) => {
      toast.success(data?.message)
    },
    onError: (error: AxiosError) => {
      console.log(error);

      toast.error((error.response?.data as { message: string }).message)
    }
  })
}

export {
  useLogin,
  useRegister
}