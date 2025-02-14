"use client";

import DataTable from "@/components/elements/TableData";
import { useAddRole, useGetRole } from "@/lib/hooks/useRole";
import { createRoleColumns } from "@/static/Columns";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@heroui/modal";
import { Button, Input } from "@heroui/react";
import { useForm } from "react-hook-form";

const TableRole = () => {
  const { isOpen, onOpenChange, onOpen } = useDisclosure();
  
  // Get data role
  const { data, isPending: pendRole } = useGetRole();
  const dataWithIndex = data?.result.map((item: any, index: number) => ({...item, index})) ?? [];

  // Function Add Role
  const { register, handleSubmit, reset } = useForm();
  const { mutate, isPending: isPendingHandle } = useAddRole();


  return (
    <>
      <DataTable
        title="Daftar Role"
        columns={createRoleColumns()}
        data={dataWithIndex}
        isLoading={pendRole}
        searchPlaceholder="Cari role..."
        modal={
          <Button
            type="button"
            color="primary"
            onPress={() => onOpen()}
          >
            Tambah Role
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
        onOpenChange={onOpenChange}
        backdrop="opaque"
        isDismissable={false}
        isKeyboardDismissDisabled={true}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Modal Title
              </ModalHeader>
              <ModalBody>
                <form
                  onSubmit={handleSubmit((data) => mutate(data.name, { onSuccess: () => { reset(), onClose() } }))}
                >
                  <div className="flex flex-col gap-4 mb-6">
                    <Input
                      label="Nama"
                      placeholder="Masukan Nama Role"
                      type="text"
                      labelPlacement="outside"
                      {...register("name")}
                    />
                  </div>
                  <Button
                    fullWidth
                    color="primary"
                    type="submit"
                    isDisabled={isPendingHandle}
                    isLoading={isPendingHandle}
                  >
                    Submit
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

export default TableRole;
