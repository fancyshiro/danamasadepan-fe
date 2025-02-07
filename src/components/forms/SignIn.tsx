"use client";

import { useLogin } from "@/lib/hooks/useAuth";
import { Auth, AuthSchema } from "@/lib/schema/Auth";
import { Button, Input } from "@heroui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const SignIn = () => {
  const { formState, register, handleSubmit } = useForm<Auth>({
    mode: 'onSubmit',
    resolver: zodResolver(AuthSchema),
  });
  const { mutate, isPending } = useLogin();

  return (
    <div>

      <div>
        <h2>Sign In</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, perspiciatis.</p>
      </div>

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
