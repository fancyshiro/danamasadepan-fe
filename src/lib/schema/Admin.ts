// schemas/adminSchema.ts
import { z } from "zod";

const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/gif",
  "image/svg+xml",
];

const addAdminSchema = z.object({
  name: z.string().min(3, "Nama minimal 3 karakter"),
  email: z.string().email("Email tidak valid"),
  password: z.string().min(6, "Password minimal 6 karakter"),
  photo: z.custom<FileList>().refine(
      (files) => !files || ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
      "Hanya format .jpg, .jpeg, .png, .gif dan .svg yang didukung"
    ),
  role_id: z.string(),
});

type AdminFormData = z.infer<typeof addAdminSchema>;

export { addAdminSchema, type AdminFormData };
