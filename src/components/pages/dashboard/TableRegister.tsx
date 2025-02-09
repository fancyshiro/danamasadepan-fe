"use client";

import DataTable from "@/components/elements/TableData";
import { useChangeAllowed } from "@/lib/hooks/useAdmin";
import { useGetStudent } from "@/lib/hooks/useStudent";
import { createRegisterColumns } from "@/static/Columns";

const TableRegister = () => {
  const { data, isPending, isLoading } = useGetStudent("all");
  const { mutate: changeAllowed } = useChangeAllowed();
  const result = data?.result || [];

  const columns = createRegisterColumns((id: number, allowed: boolean) =>
    changeAllowed({ id, allowed })
  );

  return (
    <DataTable
      title="Daftar Pendaftaran Siswa"
      columns={columns}
      data={result}
      isLoading={isLoading || isPending}
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
