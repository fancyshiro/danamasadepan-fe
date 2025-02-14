"use client";

import DataTable from "@/components/elements/TableData";
import { useGetTransaction, useHandleTransaction } from "@/lib/hooks/useTransaction";
import { createTransactionColumns } from "@/static/Columns";
import { Button, Input, Select, SelectItem } from "@heroui/react";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
} from "@heroui/modal";
import { useGetStudent } from "@/lib/hooks/useStudent";
import { useForm } from "react-hook-form";

const TableTransaction = () => {
  const { data: dTransaction, isPending: isPendingTransaction } = useGetTransaction();
  const { data: dStudent } = useGetStudent("all");

  const student = dStudent?.result.filter((item: any) => item?.allowed === true) || [];
  const transactionWithIndex = dTransaction?.result.map((item: any, index: number) => ({...item, index})) ?? [];

  // Modal
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  // Function Transaksi
  const { register, handleSubmit, reset } = useForm();
  const { mutate, isPending: isPendingHandle } = useHandleTransaction();

  return (
    <>
      <DataTable
        title="Daftar Semua Transaksi"
        columns={createTransactionColumns()}
        data={transactionWithIndex}
        isLoading={isPendingTransaction}
        searchPlaceholder="Cari transaksi..."
        modal={
          <Button color="primary" radius="full" size="sm" onPress={onOpen}>
            Tambah Transaksi
          </Button>
        }
        classNames={{
          wrapper: "bg-white p-4 rounded-lg shadow",
          title: "text-blue-600",
          search: "max-w-xs",
        }}
      />

      <Modal isOpen={isOpen} onOpenChange={onOpenChange} backdrop="opaque" isDismissable={false} isKeyboardDismissDisabled={true}
        classNames={{
          backdrop: "bg-gradient-to-t from-neutral-800 to-neutral-900/10 backdrop-opacity-20",
        }}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Modal Title
              </ModalHeader>
              <ModalBody>
                <form onSubmit={handleSubmit((data) => mutate({ student_id: data.student_id, type: data.type, amount: data.amount }, { onSuccess: () => reset() }))}>
                  <div className="flex flex-col gap-4 mb-6">
                    <Select
                      label="Type Transaksi"
                      placeholder="Pilih Type Transaksi"
                      labelPlacement="outside"
                      {...register("type")}
                    >
                      {[{ value: "debit", name: "Debit"}, { value: "kredit", name: "Kredit"}].map((item) => (
                        <SelectItem value={item.value} key={item.value}>
                          {item.name}
                        </SelectItem>
                      ))}
                    </Select>
                    <Select
                      label="Siswa"
                      placeholder="Pilih Siswa"
                      labelPlacement="outside"
                      {...register("student_id")}
                    >
                      {student.map((item: any) => (
                        <SelectItem value={item.id} key={item.id}>
                          {item.name + " - " + item.class + ' ' + item.major}
                        </SelectItem>
                      ))}
                    </Select>
                    <Input
                      label="Jumlah"
                      placeholder="Masukan Jumlah"
                      type="number"
                      labelPlacement="outside"
                      {...register("amount")}
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

export default TableTransaction;
