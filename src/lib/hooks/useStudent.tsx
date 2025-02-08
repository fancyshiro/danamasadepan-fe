import { useQuery } from "@tanstack/react-query"
import { axiosInstance } from "../utils/axios"
import { getToken } from "../utils/getToken"

function useGetStudent(type: 'all' | 'detail' ) {
  const url = type === 'all' ? 'student' : 'student/detail'

  return useQuery({
    queryKey: ["student"],
    queryFn: () => axiosInstance.get(url, {
      headers: {
        Authorization: `Bearer ${getToken()}`
      }
    }).then(res => res.data),
  })
}

export {
  useGetStudent
}