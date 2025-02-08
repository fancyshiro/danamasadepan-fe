"use client";

import DataTable from "@/components/elements/TableData";
import { useGetStudent } from "@/lib/hooks/useStudent";
import { Button, Chip } from "@heroui/react";
import dayjs from "dayjs";

const TableRegister = () => {
  const { data, isPending, isLoading } = useGetStudent("all");
  const result = data?.result || [];

  const columns = [
    { key: "id", label: "ID" },
    { key: "name", label: "Nama" },
    { key: "email", label: "Email" },
    { key: "gender", label: "Jenis Kelamin" },
    { key: "class", label: "Kelas" },
    { key: "major", label: "Jurusan" },
    {
      key: "balance",
      label: "Saldo",
      renderCell: (item: any) => (
        <Chip color="warning" size="sm" variant="flat">
          Rp {item.balance.toLocaleString()}
        </Chip>
      ),
    },
    {
      key: "created_at",
      label: "Tanggal Buat",
      renderCell: (item: any) => dayjs(item.created_at).format("DD-MM-YYYY"),
    },
    {
      key: "action",
      label: "Aksi",
      renderCell: (item: any) => (
        <>
          <Button color={!item.allowed ? "success" : "danger"} size="sm" variant="flat">
            {!item.allowed ? "Terima" : "Tolak"}
          </Button>
        </>
      ),
    }
  ];

  return (
    <DataTable
      title="Daftar Pendaftaran Siswa"
      columns={columns}
      data={result}
      isLoading={isLoading || isPending}
      rowsPerPage={10}
      searchPlaceholder="Cari siswa..."
      classNames={{
        wrapper: "bg-white p-4 rounded-lg shadow",
        title: "text-blue-600",
        search: "max-w-xs",
      }}
    />
  );
};

export default TableRegister;
