import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../utils/axios";

/**
 * Mengambil data overview.
 *
 * @returns data overview dalam bentuk object.
 */
function useGetOverview() {
  return useQuery({
    queryKey: ["overview"],
    queryFn: () => axiosInstance.get("overview").then((res) => res.data),
  })
}

export {
  useGetOverview
}