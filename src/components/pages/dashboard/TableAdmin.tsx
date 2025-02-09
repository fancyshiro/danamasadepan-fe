'use client';

import DataTable from "@/components/elements/TableData";
import { useGetAdmin } from "@/lib/hooks/useAdmin";
import { createAdminColumns } from "@/static/Columns";

const TableAdmin = () => {
  const { data: admin, isLoading: loadAdmin, isPending: penAdmin } = useGetAdmin('all');

  return (
    <>
      <DataTable
        title="Daftar Admin"
        columns={createAdminColumns()}
        data={admin?.result}
        isLoading={loadAdmin || penAdmin}
        searchPlaceholder="Cari admin..."
        classNames={{
          wrapper: "bg-white p-4 rounded-lg shadow",
          title: "text-blue-600",
          search: "max-w-xs",
        }}
      />
    </>
  );
};

export default TableAdmin;
