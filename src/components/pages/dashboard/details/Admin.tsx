"use client";

import { useGetAdminDetail, useUpdateAdmin } from "@/lib/hooks/useAdmin";
import { useGetRole } from "@/lib/hooks/useRole";
import { AdminUpdateFormData, updateAdminSchema } from "@/lib/schema/Admin";
import {
  Avatar,
  Button,
  Image,
  Input,
  Select,
  SelectItem,
  Spinner,
} from "@heroui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const Admin = ({ id, className }: { id: string; className?: string }) => {
  const { result, loadingAdminDetail } = useGetAdminDetail(id);
  const { data: roles } = useGetRole();

  // Function Update Admin
  const { UpdateAdmin, UpdateLoad } = useUpdateAdmin(id);
  const { handleSubmit, register, formState: { errors }} = useForm<AdminUpdateFormData>({
    mode: "all",
    resolver: zodResolver(updateAdminSchema),
    defaultValues: {
      role_id: result?.role_id,
    }
  });

  return (
    <div className={`relative z-30 bg-white dark:bg-neutral-900/70 shadow-md rounded-b-xl ${className}`}>
      <div>
        <Image
          src="/cover/bg15.png"
          alt="image"
          width={1000}
          radius="none"
          className="h-48 min-w-full rounded-t-xl object-cover object-center"
          style={{ width: "auto" }}
        />

        <div className="relative z-30 mx-auto -mt-12 flex h-24 items-center justify-center">
          {result.photo ? (
            <Avatar
              src={`http://localhost:8000/storage/${result?.photo}`}
              className="w-24 h-24"
              isBordered
            />
          ): <Avatar className="w-24 h-24" isBordered />}
        </div>
      </div>

      {loadingAdminDetail && (
        <div className="flex justify-center items-center h-40">
          <Spinner />
        </div>
      )}

      {!loadingAdminDetail && (
      <form onSubmit={handleSubmit((data) => UpdateAdmin(data))} className="p-6 rounded-b-xl">
          <div className="pb-6 flex flex-col gap-4">
            <Input
              label="Nama"
              defaultValue={result?.name}
              placeholder=""
              labelPlacement="outside"
              isInvalid={Boolean(errors.name)}
              errorMessage={errors.name?.message}
              {...register("name")}
            />
            <Input
              label="Email"
              defaultValue={result?.email}
              placeholder=""
              labelPlacement="outside"
              isInvalid={Boolean(errors.email)}
              errorMessage={errors.email?.message}
              {...register("email")}
            />
            <Input
              label="Photo"
              placeholder="Masukan Photo Anda"
              type="file"
              labelPlacement="outside"
              isInvalid={Boolean(errors.photo)}
              errorMessage={errors.photo?.message}
              {...register("photo")}
            />
            <Select
              label="Role"
              placeholder="Pilih Role"
              labelPlacement="outside"
              defaultSelectedKeys={[result?.role_id.toString()]}
              isInvalid={Boolean(errors.role_id)}
              errorMessage={errors.role_id?.message}
              {...register("role_id")}
            >
              {roles?.result?.map((item: any) => (
                <SelectItem key={item.id} value={item.id}>
                  {item.name}
                </SelectItem>
              ))}
            </Select>
          </div>

          <Button
            color="primary"
            type="submit"
            fullWidth
            isDisabled={UpdateLoad}
            isLoading={UpdateLoad}
          >
            {UpdateLoad ? "Loading..." : "Simpan Perubahan"}
          </Button>
        </form>
      )}
    </div>
  );
};

export default Admin;
