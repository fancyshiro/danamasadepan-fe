// schemas/adminSchema.ts
import { z } from "zod";

const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/gif",
  "image/svg+xml",
];

const updateStudentSchema = z.object({
  name: z.string().min(3, "Nama minimal 3 karakter"),
  email: z.string().email("Email tidak valid"),
  gender: z.enum(["Laki-laki", "Perempuan"], { required_error: "Jenis kelamin harus dipilih" }),
  class: z.enum(["X", "XI", "XII"], { required_error: "Kelas harus dipilih" }),
  major: z.enum(["RPL", "TKJ", "AKL"], { required_error: "Jurusan harus dipilih" }),
  phone: z.string().regex(/^\d{10,15}$/, "No Telp harus berisi 10-15 digit angka"),
  address: z.string().min(5, "Alamat minimal 5 karakter"),
  photo: z.custom<FileList>().optional(),
});

type StudentUpdateFormData = z.infer<typeof updateStudentSchema>;


export { updateStudentSchema, type StudentUpdateFormData };