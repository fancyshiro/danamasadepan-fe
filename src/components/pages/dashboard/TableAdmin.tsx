"use client";

import DataTable from "@/components/elements/TableData";
import { useAddAdmin, useGetAdmin } from "@/lib/hooks/useAdmin";
import { useGetRole } from "@/lib/hooks/useRole";
import { addAdminSchema, AdminFormData } from "@/lib/schema/Admin";
import { createAdminColumns } from "@/static/Columns";
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  Select,
  SelectItem,
  useDisclosure,
} from "@heroui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const TableAdmin = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { data: admin, isLoading: loadAdmin } = useGetAdmin();
  const { data: role } = useGetRole();

  // Function Add Admin
  const { mutate, isPending } = useAddAdmin();
  const { register, handleSubmit, reset, formState: { errors }} = useForm<AdminFormData>({
    resolver: zodResolver(addAdminSchema),
    mode: "onSubmit",
  });

  return (
    <>
      <DataTable
        title="Daftar Admin"
        columns={createAdminColumns()}
        data={admin?.result}
        isLoading={loadAdmin}
        searchPlaceholder="Cari admin..."
        modal={
          <Button onPress={onOpen} variant="flat" color="primary">
            Tambah Admin
          </Button>
        }
        classNames={{
          wrapper: "bg-white p-4 rounded-lg shadow",
          title: "text-blue-600",
          search: "max-w-xs",
        }}
      />

      <Modal
        isOpen={isOpen}
        backdrop="opaque"
        isDismissable={false}
        classNames={{
          backdrop:
            "bg-gradient-to-t from-neutral-800 to-neutral-900/10 backdrop-opacity-20",
        }}
      >
        <ModalContent>
          {() => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Tambah Admin Baru
              </ModalHeader>
              <ModalBody>
                <form onSubmit={handleSubmit((data: AdminFormData) => { mutate(data, { onSuccess: () => { onClose(), reset() }})})}>
                  <div className="flex flex-col gap-4 mb-6">
                    <Input
                      label="Nama"
                      placeholder="Masukan Nama Admin"
                      labelPlacement="outside"
                      errorMessage={errors.name?.message}
                      isInvalid={!!errors.name}
                      {...register("name")}
                    />

                    <Input
                      label="Email"
                      placeholder="Masukan Email Admin"
                      labelPlacement="outside"
                      errorMessage={errors.email?.message}
                      isInvalid={!!errors.email}
                      {...register("email")}
                    />

                    <Input
                      label="Password"
                      placeholder="Masukan Password"
                      type="password"
                      labelPlacement="outside"
                      errorMessage={errors.password?.message}
                      isInvalid={!!errors.password}
                      {...register("password")}
                    />

                    <Input
                      label="Photo"
                      type="file"
                      labelPlacement="outside"
                      accept="image/jpeg,image/png"
                      errorMessage={errors.photo?.message}
                      isInvalid={!!errors.photo}
                      {...register("photo")}
                    />

                    <Select
                      label="Role"
                      placeholder="Pilih Role"
                      labelPlacement="outside"
                      errorMessage={errors.role_id?.message}
                      isInvalid={!!errors.role_id}
                      {...register("role_id", { valueAsNumber: true })}
                    >
                      {role?.result.map((item: any) => (
                        <SelectItem key={item.id} value={item.id}>
                          {item.name}
                        </SelectItem>
                      ))}
                    </Select>
                  </div>

                  <Button
                    fullWidth
                    color="primary"
                    type="submit"
                    isDisabled={isPending}
                    isLoading={isPending}
                  >
                    Tambah Admin
                  </Button>
                </form>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default TableAdmin;
