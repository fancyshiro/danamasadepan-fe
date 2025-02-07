import { z } from "zod";


const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/gif",
  "image/svg+xml",
];

const LoginSchema = z.object({
  email: z.string().email('Email Tidak Valid').min(1, "Email Tidak Boleh Kosong").max(50, "Email Maksimal 50 Karakter"),
  password: z.string().min(8, "Password Maksimal 8 Karakter"),
});

type Login = z.infer<typeof LoginSchema>;
export { LoginSchema, type Login };


const RegisterSchema = z.object({
  name: z.string().min(1, "Name Tidak Boleh Kosong"),
  email: z.string().email("Email Tidak Valid").min(1, "Email Tidak Boleh Kosong").max(50, "Email Maksimal 50 Karakter"),
  password: z.string().min(8, "Password Minimal 8 Karakter").max(20, "Password Maksimal 20 Karakter"),
  class: z.string().min(1, "Class Tidak Boleh Kosong"),
  major: z.string().min(1, "Major Tidak Boleh Kosong"),
  gender: z.string().min(1, "Gender Tidak Boleh Kosong"),
  phone: z.string().min(1, "Phone Tidak Boleh Kosong").max(20, "Phone Maksimal 20 Karakter"),
  address: z.string().min(1, "Address Tidak Boleh Kosong").max(100, "Address Maksimal 100 Karakter"),
  photo: z.custom<FileList>().refine(
    (files) => !files || ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
    "Hanya format .jpg, .jpeg, .png, .gif dan .svg yang didukung",
  )
});


type Register = z.infer<typeof RegisterSchema>;
export { RegisterSchema, type Register };