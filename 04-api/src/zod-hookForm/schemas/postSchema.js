import { z } from "zod";

export const postSchema = z.object({
  title: z.string().min(3, "Başlık en az 3 karakter olmalı").max(100, "En fazla 100 karakter"),
  body: z.string().min(10, "İçerik en az 10 karakter olmalı"),
  userId: z.coerce.number().int().positive(), // string "1" -> number 1
});
