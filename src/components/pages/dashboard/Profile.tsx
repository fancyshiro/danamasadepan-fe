"use client";

import ListTransaksi from "@/components/elements/ListTransaksi";
import ChangePassword from "@/components/forms/ChangePassword";
import { useGetUser, useUpdateAdmin } from "@/lib/hooks/useAdmin";
import { AdminUpdateFormData, updateAdminSchema } from "@/lib/schema/Admin";
import {
  Avatar,
  Button,
  Image,
  Input,
  Spinner,
  Tab,
  Tabs,
} from "@heroui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const Profile = ({ className }: { className?: string }) => {
  const { data, isPending } = useGetUser();
  const result = data?.result || {};

  const { UpdateAdmin, UpdateLoad } = useUpdateAdmin(result.id);
  const { register, handleSubmit, formState: { errors }} = useForm<AdminUpdateFormData>({
    mode: "all",
    resolver: zodResolver(updateAdminSchema),
  });

  const onSubmit = (data: AdminUpdateFormData) => UpdateAdmin(data);


  return (
    <main className="grid grid-cols-1 xl:grid-cols-6 gap-6">
      <div className={`relative z-30 bg-white dark:bg-neutral-900/70 shadow-md rounded-b-xl h-max ${className} xl:col-span-4`}>
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

        {isPending && (
          <div className="flex justify-center items-center h-40">
            <Spinner />
          </div>
        )}

        {!isPending && (
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

      <div className="flex w-full flex-col xl:col-span-2 bg-white dark:bg-zinc-900/70 shadow-md rounded-xl py-4 px-6 xl:px-2 h-max">
        <Tabs>
          <Tab key="transaksi" title="Transaksi">
            <ListTransaksi id={result.id} role="admin" />
          </Tab>
          <Tab key="change" title="Ubah Password">
            <ChangePassword/>
          </Tab>
        </Tabs>
      </div>
    </main>
  );
};

export default Profile;
