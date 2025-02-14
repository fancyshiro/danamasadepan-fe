"use client";

import DataTable from "@/components/elements/TableData";
import { useChangeAllowed } from "@/lib/hooks/useAdmin";
import { useGetStudent } from "@/lib/hooks/useStudent";
import { createRegisterColumns } from "@/static/Columns";

const TableRegister = () => {
  const { data, isPending } = useGetStudent("all");
  const { handleUpdate } = useChangeAllowed();

  const dataWithIndex = data?.result.map((item: any, index: number) => ({...item, index})) ?? [];
  const columns = createRegisterColumns((id: string | number) => handleUpdate(id));

  return (
    <DataTable
      title="Daftar Siswa Persetujuan"
      columns={columns}
      data={dataWithIndex}
      isLoading={isPending}
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
