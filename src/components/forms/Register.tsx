"use client";

import { useRegister } from "@/lib/hooks/useAuth";
import { type Register, RegisterSchema } from "@/lib/schema/Auth";
import { Options } from "@/static/Resource";
import { Button, Divider, Input, Select, SelectItem, Textarea } from "@heroui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const Register = () => {
  const { mutate, isPending } = useRegister();
  const { formState, register, handleSubmit, reset } = useForm<Register>({
    mode: "onSubmit",
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      name: "John Doe",
      class: "X",
      phone: "08123456789",
      email: "jhondoe@gmail.com",
      password: "password",
      address: "lorem ipsum dolor",
    },
  });

  // Handle Submit
  const submit = (data: Register) => {
    const formData = new FormData();

    formData.append("name", data.name);
    formData.append("class", data.class);
    formData.append("major", data.major);
    formData.append("gender", data.gender);
    formData.append("phone", data.phone);
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("address", data.address);
    if (data.photo && data.photo.length > 0) {
      formData.append("photo", data.photo[0]); 
    }

    mutate(formData, { onSuccess: () => reset() });
  };

  return (
    <div className="lg:col-span-2 lg:border lg:rounded-2xl sm:p-6 lg:bg-white lg:shadow-lg">
      <div>
        <h2>Daftar Lalu Menabung</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
          perspiciatis.
        </p>
      </div>

      <Divider className="my-6" />

      <form onSubmit={handleSubmit(submit)}>
        <div className="flex flex-col gap-4 my-6">
          <Input
            label="Nama"
            placeholder="Masukan Nama Anda"
            type="text"
            labelPlacement="outside"
            isInvalid={Boolean(formState.errors.name)}
            errorMessage={formState.errors.name?.message?.toString()}
            {...register("name")}
          />
          <Select
            label="Jenis Kelamin"
            placeholder="Pilih Jenis Kelamin"
            labelPlacement="outside"
            isInvalid={Boolean(formState.errors.gender)}
            errorMessage={formState.errors.gender?.message?.toString()}
            {...register("gender")}
          >
            {Options.gender.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.name}
              </SelectItem>
            ))}
          </Select>
          <Select
            label="Jurusan"
            placeholder="Pilih Jurusan Anda"
            labelPlacement="outside"
            isInvalid={Boolean(formState.errors.major)}
            errorMessage={formState.errors.major?.message?.toString()}
            {...register("major")}
          >
            {Options.major.map((item) => (
              <SelectItem value={item.value} key={item.value}>
                {item.name}
              </SelectItem>
            ))}
          </Select>
          <Select
            label="Kelas"
            placeholder="Pilih Kelas Anda"
            labelPlacement="outside"
            isInvalid={Boolean(formState.errors.class)}
            errorMessage={formState.errors.class?.message?.toString()}
            {...register("class")}
          >
            {Options.class.map((item) => (
              <SelectItem value={item.value} key={item.value}>
                {item.name}
              </SelectItem>
            ))}
          </Select>
          <Input
            label="No Telepon"
            placeholder="Masukan No Telepon Anda"
            type="number"
            labelPlacement="outside"
            isInvalid={Boolean(formState.errors.phone)}
            errorMessage={formState.errors.phone?.message?.toString()}
            {...register("phone")}
          />
          <Input
            label="Photo"
            type="file"
            accept="image/*"
            labelPlacement="outside"
            isInvalid={Boolean(formState.errors.photo)}
            errorMessage={formState.errors.photo?.message?.toString()}
            {...register("photo", {
              onChange: (e) => {
                return e.target.files;
              },
            })}
          />

          <Input
            label="Email"
            placeholder="Masukan Email Anda"
            type="email"
            labelPlacement="outside"
            isInvalid={Boolean(formState.errors.email)}
            errorMessage={formState.errors.email?.message?.toString()}
            {...register("email")}
          />
          <Input
            label="Password"
            placeholder="Masukan Password Anda"
            type="password"
            labelPlacement="outside"
            isInvalid={Boolean(formState.errors.password)}
            errorMessage={formState.errors.password?.message?.toString()}
            {...register("password")}
          />
          <Textarea
            label="Alamat"
            placeholder="Masukan Alamat Anda"
            labelPlacement="outside"
            isInvalid={Boolean(formState.errors.address)}
            errorMessage={formState.errors.address?.message?.toString()}
            {...register("address")}
          />
        </div>
        <Button
          fullWidth
          color="primary"
          type="submit"
          isDisabled={isPending}
          isLoading={isPending}
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default Register;
