"use client";

import { useUpdateAdmin } from "@/lib/hooks/useAdmin";
import { useGetStudentDetail } from "@/lib/hooks/useStudent";
import { AdminUpdateFormData, updateAdminSchema } from "@/lib/schema/Admin";
import { Options } from "@/static/Resource";
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

const Student = ({ id }: { id: string }) => {
  const { data: student, isPending } = useGetStudentDetail(id);
  const result = student?.result || {};

  return <pre>{JSON.stringify(student, null, 2)}</pre>

  // // Function Update Admin
  // const { handleUpdate, updateLoad } = useUpdateAdmin(id);
  // const { handleSubmit, register, setValue, formState: { errors } } = useForm({
  //   mode: "all",
  //   resolver: zodResolver(updateAdminSchema),
  // });

  // // Handle Submit
  // const onSubmit = (data) => {
  //   const formData = new FormData();

  //   // Handle photo
  //   if (data.photo && data.photo[0] instanceof File) {
  //     formData.append("photo", data.photo[0]);
  //   }

  //   // Handle other form fields
  //   formData.append("_method", "PUT");
  //   formData.append("name", data.name);
  //   formData.append("email", data.email);
  //   if (data.role_id !== result?.role_id) {
  //     formData.append("role_id", String(data.role_id));
  //   }

  //   handleUpdate(formData);
  // };

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
          {result.photo && (
            <Avatar
              src={`http://localhost:8000/storage/${result?.photo}`}
              className="w-24 h-24"
              isBordered
            />
          )}
        </div>
      </div>

      {!isPending && (
        <form  className="p-6 rounded-b-xl">
          <div className="pb-6 flex flex-col gap-4">
            <Input
              label="Nama"
              defaultValue={result?.name || "Terjadi Kesalahan"}
              placeholder=""
              labelPlacement="outside"
            />
            <Input
              label="Email"
              defaultValue={result?.email || "Terjadi Kesalahan"}
              placeholder=""
              labelPlacement="outside"
            />
            <Select
              label="Kelas"
              placeholder="Pilih Kelas"
              labelPlacement="outside"
              defaultSelectedKeys={[result?.role_id]}
            >
              {Options.class?.map((item: any) => (
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
          >
            asf
          </Button>
        </form>
      )}
    </div>
  )
}

export default Student