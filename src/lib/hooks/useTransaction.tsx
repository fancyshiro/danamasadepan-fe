import { useMutation, useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../utils/axios";
import { toast } from "sonner";
import { AxiosError } from "axios";

/**
 * Mengambil data transaksi.
 *
 * @returns data transaksi dalam bentuk array.
 */
function useGetTransaction() {
  return useQuery({
    queryKey: ["transaction"],
    queryFn: () => axiosInstance.get("transaction").then((res) => res.data),
  });
}


function useGetTransactionUser( id: number | string, role: 'student' | 'admin', type?: 'all' | 'debit' | 'kredit' ) {
  const url = type ? `transaction/user/${id}/${role}?type=${type}` : `transaction/user/${id}/${role}` 

  return useQuery({
    queryKey: ["transaction", id, type],
    queryFn: () => axiosInstance.get(url).then((res) => res.data),
    enabled: !!id
  });
}

/**
 * Function untuk menangani transaksi siswa, seperti debit atau kredit.
 *
 * @returns Mutation hook untuk menangani transaksi siswa.
 */
function useHandleTransaction() {
  const { refetch } = useGetTransaction();

  return useMutation({
    mutationFn: async (data: { student_id: number; type: "debit" | "kredit"; amount: number }) =>
      axiosInstance
        .post("/transaction/handle", data, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }).then((res) => res.data),
      onSuccess: (data) => {
        refetch()

        toast.success(data?.message)
      },
      onError: (error: AxiosError) => {
        toast.error((error.response?.data as { message: string }).message)
      }
  });
}

export { useGetTransaction, useGetTransactionUser, useHandleTransaction };
