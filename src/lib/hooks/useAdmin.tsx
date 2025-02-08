import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../utils/axios";
import { getToken } from "../utils/getToken";

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

export {
  useGetAdmin
}