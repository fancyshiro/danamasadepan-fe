"use client";

import { Button, Chip, Switch } from "@heroui/react";
import { formattedDate } from "@/lib/utils/FormatedDate";
import { Icons } from "./Icons";

type Columns = {
  key: string;
  label: string;
  renderCell?: (item: any) => React.ReactNode;
};

const createTransactionColumns = () => {
  return [
    { key: "id", label: "ID" },
    {
      key: "admin",
      label: "Nama Admin",
      renderCell: (item) => item.admin?.name || "-",
    },
    {
      key: "student",
      label: "Nama Siswa",
      renderCell: (item) => item.student?.name || "-",
    },
    {
      key: "type",
      label: "Tipe Transaksi",
      renderCell: (item) => (
        <Chip
          classNames={{ base: "px-2.5" }}
          variant="flat"
          color={item.type === "debit" ? "success" : "danger"}
          startContent={item.type === "debit" ? Icons.TrendUp : Icons.TrendDown}
        >
          {item.type === "debit" ? "Debit" : "Kredit"}
        </Chip>
      ),
    },
    {
      key: "amount",
      label: "Jumlah",
      renderCell: (item) => `Rp ${item.amount}`,
    },
    {
      key: "created_at",
      label: "Waktu",
      renderCell: (item) => formattedDate(item.created_at),
    },
  ] as Columns[];
};

const createRegisterColumns = (
  onChangeAllowed: (id: number, allowed: boolean) => void
) => {
  return [
    {
      key: "id",
      label: "ID",
    },
    {
      key: "name",
      label: "Nama",
    },
    {
      key: "email",
      label: "Email",
    },
    {
      key: "gender",
      label: "Jenis Kelamin",
    },
    {
      key: "class",
      label: "Kelas",
    },
    {
      key: "major",
      label: "Jurusan",
    },
    {
      key: "balance",
      label: "Saldo",
      renderCell: (item) => (
        <Chip color="warning" size="sm" variant="flat">
          Rp {item.balance.toLocaleString()}
        </Chip>
      ),
    },
    {
      key: "created_at",
      label: "Tanggal Buat",
      renderCell: (item) => formattedDate(item.created_at),
    },
    {
      key: "action",
      label: "Disetujui",
      renderCell: (item) => (
        <Switch
          color={item.allowed ? "success" : "danger"}
          size="sm"
          defaultSelected={item.allowed}
          onChange={() => onChangeAllowed(item.id, !item.allowed)}
        />
      ),
    },
  ] as Columns[];
};

const createStudentColumns = () => {
  return [
    {
      key: "id",
      label: "ID",
    },
    {
      key: "name",
      label: "Nama",
    },
    {
      key: "email",
      label: "Email",
    },
    {
      key: "gender",
      label: "Jenis Kelamin",
    },
    {
      key: "class",
      label: "Kelas",
    },
    {
      key: "major",
      label: "Jurusan",
    },
    {
      key: "created_at",
      label: "Tanggal Disetujui",
      renderCell: (item) => formattedDate(item.created_at),
    },
    {
      key: "action",
      label: "Aksi",
      renderCell: (item) => (
        <div className="flex gap-2">
         <Button isIconOnly startContent={Icons.EditEye} color="primary" variant="flat" as="a" href={`/dashboard/student/detail/${item.id}`} />
          <Button
            isIconOnly
            startContent={Icons.Delete}
            color="danger"
            variant="flat"
          />
        </div>
      ),
    },
  ] as Columns[];
};

const createRoleColumns = () => {
  return [
    {
      key: "id",
      label: "ID",
    },
    {
      key: "name",
      label: "Nama",
    },
    {
      key: "description",
      label: "Deskripsi",
      renderCell: (item) => "-",
    },
    {
      key: "created_at",
      label: "Tanggal Buat",
      renderCell: (item) => formattedDate(item.created_at),
    },
  ] as Columns[];
};

const createAdminColumns = (setSelectedId: (id: string) => void, openDelete: () => void) => {
  return [
    { key: "id", label: "ID" },
    { key: "name", label: "Nama" },
    {
      key: "role",
      label: "Role",
      renderCell: (item) => (
        <Chip color={item.role.name === "Super Admin" ? "danger" : "warning"} variant="flat">
          {item.role.name}
        </Chip>
      ),
    },
    { key: "email", label: "Email" },
    {
      key: "created_at",
      label: "Tanggal Buat",
      renderCell: (item) => formattedDate(item.created_at),
    },
    {
      key: "action",
      label: "Aksi",
      renderCell: (item) => (
        <div className="flex gap-2">
          <Button isIconOnly startContent={Icons.EditEye} color="primary" variant="flat" as="a"
            href={`/dashboard/admin/detail/${item.id}`} />
          <Button isIconOnly startContent={Icons.Delete} color="danger" variant="flat"
            onPress={() => {
              setSelectedId(item.id);
              openDelete();
            }} />
        </div>
      ),
    },
  ] as Columns[];
};


export {
  createAdminColumns,
  createTransactionColumns,
  createRoleColumns,
  createRegisterColumns,
  createStudentColumns,
};
