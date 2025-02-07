import { z } from "zod";

const AuthSchema = z.object({
  email: z.string().email('Email Tidak Valid').min(1, "Email Tidak Boleh Kosong").max(50, "Email Maksimal 50 Karakter"),
  password: z.string().min(8, "Password Maksimal 8 Karakter"),
});

type Auth = z.infer<typeof AuthSchema>;
export { AuthSchema, type Auth };