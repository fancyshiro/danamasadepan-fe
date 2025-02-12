"use client";

import { useLogin } from "@/lib/hooks/useAuth";
import { Login, LoginSchema } from "@/lib/schema/Auth";
import { Button, Divider, Input } from "@heroui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const SignIn = () => {
  const { formState, register, handleSubmit } = useForm<Login>({
    mode: 'onSubmit',
    resolver: zodResolver(LoginSchema),
  });
  const { mutate, isPending } = useLogin();

  return (
    <div className="lg:border dark:border-zinc-800/70 lg:rounded-2xl sm:p-6 lg:shadow-lg dark:bg-zinc-900/70">

      <div>
        <h2>Sign In</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, perspiciatis.</p>
      </div>

      <Divider className="my-6" />

      <form
        onSubmit={handleSubmit((data) =>
          mutate({ email: data.email, password: data.password })
        )}
      >
        <div className="flex flex-col gap-4 my-6">
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

export default SignIn;
