import { useMutation } from "@tanstack/react-query";
import { axiosInstance } from "../utils/axios";
import { ChangePassword, Login, Register } from "../schema/Auth";
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
    mutationFn: async (data: Login) =>
      axiosInstance.post("/auth/login", data).then((res) => res.data),
    onSuccess: (data) => {
      localStorage.setItem("token", data.result.token);
      localStorage.setItem("role", data.result.role);

      toast.success(data?.message);
      data.result.role === "admin"
        ? (window.location.href = "/dashboard")
        : (window.location.href = "/student/profile");
    },
    onError: (error: AxiosError) => {
      console.log(error);

      toast.error(
        (error.response?.data as { message: string }).message ??
          "Terjadi Kesalahan pada Server"
      );
    },
  });
}

/**
 * Function untuk melakukan register
 *
 * @returns
 */
function useRegister() {
  return useMutation({
    mutationFn: async (data: FormData) => axiosInstance.post("/auth/register", data, ),
    onSuccess: (data) => {
      toast.success(data.data?.message);
    },
    onError: (error: AxiosError) => {
      console.log(error);

      toast.error((error.response?.data as { message: string }).message);
    },
  });
}

/**
 * Function untuk melakukan logout
 *
 * @returns Mutation hook untuk melakukan logout
 */
function useLogout() {
  return useMutation({
    mutationFn: () => axiosInstance.post("auth/logout"),
    onSuccess: (data) => {
      localStorage.removeItem("token");
      localStorage.removeItem("role");
      window.location.href = "/";

      toast.success(data.data.message);
    },
  });
}

function useChangePassword() {
  return useMutation({
    mutationFn: async (data: ChangePassword) => axiosInstance.post("/auth/reset-password", data,),
    onSuccess: (data) => {
      toast.success(data?.data.message);
    },
    onError: (error: AxiosError) => {
      toast.error((error.response?.data as { message: string }).message);
    },
  });
}

export { useLogin, useLogout, useRegister, useChangePassword };
