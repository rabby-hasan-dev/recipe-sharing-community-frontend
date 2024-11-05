import { z } from "zod";

export const registerValidationSchema = z.object({
  username: z.string().min(1, "Please enter your username!"),
  email: z.string().email("Please enter a valid email address!"),
  password: z.string().min(6, "Must be at least 6 characters."),
});

export const registerValidationSchemaAdmin = z.object({
  username: z.string().min(1, "Please enter your username!"),
  email: z.string().email("Please enter a valid email address!"),
  password: z.string().min(6, "Must be at least 6 characters."),
  role: z.enum(["user", "admin"]),
});

export default registerValidationSchema;
