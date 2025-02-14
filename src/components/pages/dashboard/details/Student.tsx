"use client";

import { useGetStudentDetail, useUpdateStudent } from "@/lib/hooks/useStudent";
import { Options } from "@/static/Resource";
import {
  Avatar,
  Button,
  Image,
  Input,
  Select,
  SelectItem,
  Spinner,
} from "@heroui/react";
import { useForm } from "react-hook-form";

const Student = ({ id, className }: { id: string; className?: string }) => {
  const { data: student, isPending } = useGetStudentDetail(id);
  const result = student?.result || {};

  return (
    <div className={`relative z-30 bg-white dark:bg-neutral-900/70 h-max shadow-md rounded-xl p-6 ${className}`}>
      <div>
        <Image
          src="/cover/bg15.png"
          alt="Cover Image"
          width={1000}
          radius="none"
          className="h-48 w-full rounded-t-xl object-cover object-center"
        />

        <div className="relative z-30 mx-auto -mt-12 flex h-24 items-center justify-center">
          {result.photo && (
            <Avatar
              src={`http://localhost:8000/storage/${result.photo}`}
              className="w-20 h-20"
              isBordered
            />
          )}
        </div>
      </div>

      {isPending && (
        <div className="flex justify-center items-center h-40">
          <Spinner />
        </div>
      )}

      {!isPending && (
        <form>
          <div className="flex flex-col gap-4 mb-6">
            <Input
              label="Nama"
              defaultValue={result.name}
              labelPlacement="outside"
              isDisabled
            />
            <Input
              label="Email"
              defaultValue={result.email}
              labelPlacement="outside"
              isDisabled
            />
            <Input
              label="Nomor Telepon"
              defaultValue={result.phone}
              labelPlacement="outside"
              isDisabled
            />
            <Input
              label="Alamat"
              defaultValue={result.address}
              labelPlacement="outside"
              isDisabled
            />
            <Select
              label="Jenis Kelamin"
              labelPlacement="outside"
              placeholder="Pilih Jenis Kelamin"
              defaultSelectedKeys={result.gender ? [result.gender] : []}
              isDisabled
            >
              {Options.gender?.map((item: any) => (
                <SelectItem key={item.value} value={item.value}>
                  {item.name}
                </SelectItem>
              ))}
            </Select>
            <Select
              label="Jurusan"
              labelPlacement="outside"
              placeholder="Pilih Jurusan"
              defaultSelectedKeys={result.major ? [result.major] : []}
              isDisabled
            >
              {Options.major?.map((item: any) => (
                <SelectItem key={item.value} value={item.value}>
                  {item.name}
                </SelectItem>
              ))}
            </Select>
            <Input
              label="Saldo"
              defaultValue={`Rp ${result.balance || 0}`}
              labelPlacement="outside"
              isDisabled
            />
            <Select
              label="Kelas"
              labelPlacement="outside"
              placeholder="Pilih Kelas"
              defaultSelectedKeys={result.class ? [result.class] : []}
              isDisabled
            >
              {Options.class?.map((item: any) => (
                <SelectItem key={item.value} value={item.value}>
                  {item.name}
                </SelectItem>
              ))}
            </Select>
            <Input
              label="Photo"
              placeholder="Unggah Foto Anda"
              type="file"
              labelPlacement="outside"
              isDisabled
            />
          </div>
          <Button color="primary" type="submit" fullWidth>
            {/* {updateLoad ? "Loading..." : "Simpan Perubahan"} */}
            Simpan Perubahan
          </Button>
        </form>
      )}
    </div>
  );
};

export default Student;
