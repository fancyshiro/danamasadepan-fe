"use client";

import ListTransaksi from "@/components/elements/ListTransaksi";
import ChangePassword from "@/components/forms/ChangePassword";
import { useGetUser } from "@/lib/hooks/useAdmin";
import { useUpdateStudent } from "@/lib/hooks/useStudent";
import { StudentUpdateFormData } from "@/lib/schema/Student";
import { Options } from "@/static/Resource";
import {
  Avatar,
  Button,
  Image,
  Input,
  Select,
  SelectItem,
  Spinner,
  Tab,
  Tabs,
  Textarea,
} from "@heroui/react";
import { useForm } from "react-hook-form";

const Profile = ({ className }: { className?: string }) => {
  const { data, isPending } = useGetUser();
  const result = data?.result || {};

  const { UpdateStudent, UpdateLoad } = useUpdateStudent(result.id);
  const { formState: { errors }, handleSubmit, register } = useForm<StudentUpdateFormData>();

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
          <form className="p-6 rounded-b-xl" onSubmit={handleSubmit((data) => UpdateStudent(data))}>
            <div className="pb-6 flex flex-col gap-4">
              <Input
                label="Nama"
                defaultValue={result?.name}
                placeholder=""
                labelPlacement="outside"
                isInvalid={!!errors.name}
                errorMessage={errors.name?.message}
                {...register("name")}
              />
              <Input
                label="Saldo"
                defaultValue={result.balance}
                placeholder=""
                labelPlacement="outside"
                isDisabled
              />
              <Input
                label="Email"
                defaultValue={result?.email}
                placeholder=""
                labelPlacement="outside"
                isInvalid={!!errors.email}
                errorMessage={errors.email?.message}
                {...register("email")}
              />
              <Select
                label="Jenis Kelamin"
                placeholder="Masukan Jenis Kelamin Anda"
                labelPlacement="outside"
                defaultSelectedKeys={[result.gender.toString()]}
                isInvalid={!!errors.gender}
                errorMessage={errors.gender?.message}
                {...register("gender")}
              >
                {Options.gender.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.name}
                  </SelectItem>
                ))}
              </Select>
              <Select
                label="Kelas"
                placeholder="Masukan Kelas Anda"
                labelPlacement="outside"
                defaultSelectedKeys={[result.class]}
                isInvalid={!!errors.class}
                errorMessage={errors.class?.message}
                {...register("class")}
              >
                {Options.class.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.name}
                  </SelectItem>
                ))}
              </Select>
              <Select
                label="Jurusan"
                placeholder="Masukan Jurusan Anda"
                labelPlacement="outside"
                defaultSelectedKeys={[result.major]}
                isInvalid={!!errors.major}
                errorMessage={errors.major?.message}
                {...register("major")}
              >
                {Options.major.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    {item.name}
                  </SelectItem>
                ))}
              </Select>
              <Input
                label="No Telp"
                defaultValue={result?.phone}
                placeholder="Masukan No Telp Anda"
                labelPlacement="outside"
                isInvalid={!!errors.phone}
                errorMessage={errors.phone?.message}
                {...register("phone")}
              />
              <Textarea
                label="Alamat"
                placeholder="Masukan Alamat Anda"
                labelPlacement="outside"
                defaultValue={result.address}
                isInvalid={!!errors.address}
                errorMessage={errors.address?.message}
                {...register("address")}
              />
              <Input
                label="Photo"
                placeholder="Masukan Photo Anda"
                type="file"
                labelPlacement="outside"
                {...register("photo")}
              />
            </div>

            <Button color="primary" type="submit" fullWidth isDisabled={UpdateLoad} isLoading={UpdateLoad}>
              {UpdateLoad ? "Loading..." : "Simpan Perubahan"}
            </Button>
          </form>
        )}
      </div>

      <div className="flex w-full flex-col xl:col-span-2 bg-white dark:bg-zinc-900/70 shadow-md rounded-xl py-4 px-6 xl:px-2 h-max">
        <Tabs>
          <Tab key="transaksi" title="Transaksi">
            <ListTransaksi id={result.id} role="student" />
          </Tab>
          <Tab key="change" title="Ubah Password">
            <ChangePassword />
          </Tab>
        </Tabs>
      </div>
    </main>
  );
};

export default Profile;
