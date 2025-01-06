import { randomUUID } from "crypto";
import { z } from "zod";

export const createUserValidate = z.object({
  name: z.string(),
  username: z.string(),
  email: z.string().email(),
  password: z.string().min(6),
  dateOfBirth: z.date(),
  gender: z.enum(['MALE', 'FEMALE', 'OTHER']),
  profilePictureURL: z.string().url(),
  referralCode: z.string().default(randomUUID())
});