"use client";

import DataTable from "@/components/elements/TableData";
import { useChangeAllowed } from "@/lib/hooks/useAdmin";
import { useGetStudent } from "@/lib/hooks/useStudent";
import { createRegisterColumns, createStudentColumns } from "@/static/Columns";

const TableStudents = () => {
  const { data, isPending } = useGetStudent("all");
  const result = data?.result.filter((item: any) => item.allowed === true) || [];

  return (
    <DataTable
      title="Daftar Siswa Menabung"
      columns={createStudentColumns()}
      data={result}
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

export default TableStudents;
