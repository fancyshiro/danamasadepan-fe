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
} from "@heroui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const Admin = ({ id }: { id: any }) => {
  const { data: admin, isLoading, isPending } = useGetAdminDetail(id);
  const { data: roles } = useGetRole();

  // Function Update Admin
  const { handleUpdate, updateLoad } = useUpdateAdmin(id);
  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm<AdminUpdateFormData>({
    mode: "all",
    resolver: zodResolver(updateAdminSchema),
  });

  if (isLoading || isPending) return null;

  const result = admin?.result || {};

  const onSubmit = (data: AdminUpdateFormData) => {
    const formData = new FormData();

    // Handle photo
    if (data.photo && data.photo[0] instanceof File) {
      formData.append("photo", data.photo[0]);
    }

    // Handle other form fields
    formData.append("_method", "PUT");
    formData.append("name", data.name);
    formData.append("email", data.email);
    if (data.role_id !== result?.role_id) {
      formData.append("role_id", String(data.role_id));
    }

    handleUpdate(formData);
  };

  return (
    <div className="relative z-30 bg-white shadow-lg rounded-b-xl">
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
          <Avatar
            src={`http://localhost:8000/storage/${result?.photo}`}
            className="w-24 h-24"
            isBordered
          />
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="px-4 py-6 rounded-b-xl">
        <div className="py-4 flex flex-col gap-4">
          <Input
            label="Nama"
            defaultValue={result?.name || ""}
            placeholder=""
            labelPlacement="outside"
            isInvalid={Boolean(errors.name)}
            errorMessage={errors.name?.message}
            {...register("name")}
          />
          <Input
            label="Email"
            defaultValue={result?.email || ""}
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
            onChange={(e: any) => setValue("role_id", e.target.value)}
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
          isDisabled={updateLoad}
          isLoading={updateLoad}
        >
          {updateLoad ? "Loading..." : "Simpan Perubahan"}
        </Button>
      </form>
    </div>
  );
};

export default Admin;
