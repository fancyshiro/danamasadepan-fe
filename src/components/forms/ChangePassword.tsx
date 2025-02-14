"use client";

import { useChangePassword } from "@/lib/hooks/useAuth";
import { type ChangePassword, ChangePasswordSchema } from "@/lib/schema/Auth";
import { Button, Input } from "@heroui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const ChangePassword = ({ className }: { className?: string }) => {
  const { mutate, isPending } = useChangePassword();
  const { formState: { errors }, handleSubmit, register ,reset } = useForm<ChangePassword>({
    mode: "onSubmit",
    resolver: zodResolver(ChangePasswordSchema),
  })
  
  const onSubmit = (data: ChangePassword) => mutate(data, {
    onSuccess: () => reset()
  });

  return (
    <main className={`${className} mt-4`}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-4 mb-6">
          <Input
            label="Password Lama"
            placeholder="Masukan Password Lama"
            type="password"
            labelPlacement="outside"
            isInvalid={!!errors.old_password}
            errorMessage={errors.old_password?.message}
            {...register("old_password")}
          />
          <Input
            label="Password Baru"
            placeholder="Masukan Password Baru"
            type="password"
            labelPlacement="outside"
            isInvalid={!!errors.new_password}
            errorMessage={errors.new_password?.message}
            {...register("new_password")}
          />
          <Input
            label="Konfirmasi Password"
            placeholder="Masukan Konfirmasi Password"
            type="password"
            labelPlacement="outside"
            isInvalid={!!errors.new_password_confirmation}
            errorMessage={errors.new_password_confirmation?.message}
            {...register("new_password_confirmation")}
          />
        </div>
        <Button color="primary" type="submit" fullWidth isDisabled={isPending} isLoading={isPending}>
          {isPending ? "Loading..." : "Simpan"}
        </Button>
      </form>
    </main>
  );
};

export default ChangePassword;
