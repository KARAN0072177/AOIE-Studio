import { z } from "zod";

const envSchema = z.object({
  NEXT_PUBLIC_APP_NAME: z.string().min(1),
  NEXT_PUBLIC_APP_URL: z.string().url(),

  MONGODB_URI: z.string().optional(),

  AUTH_SECRET: z.string().min(1),
  AUTH_TOKEN_EXPIRES_IN: z.string().default("7d"),

  RESEND_API_KEY: z.string().optional(),
  EMAIL_FROM: z.string().optional(),

  AWS_REGION: z.string().optional(),
  AWS_ACCESS_KEY_ID: z.string().optional(),
  AWS_SECRET_ACCESS_KEY: z.string().optional(),
  AWS_S3_BUCKET_NAME: z.string().optional(),

  OPENAI_API_KEY: z.string().optional(),
});

const parsedEnv = envSchema.safeParse({
  NEXT_PUBLIC_APP_NAME: process.env.NEXT_PUBLIC_APP_NAME,
  NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,

  MONGODB_URI: process.env.MONGODB_URI,

  AUTH_SECRET: process.env.AUTH_SECRET,
  AUTH_TOKEN_EXPIRES_IN: process.env.AUTH_TOKEN_EXPIRES_IN,

  RESEND_API_KEY: process.env.RESEND_API_KEY,
  EMAIL_FROM: process.env.EMAIL_FROM,

  AWS_REGION: process.env.AWS_REGION,
  AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID,
  AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY,
  AWS_S3_BUCKET_NAME: process.env.AWS_S3_BUCKET_NAME,

  OPENAI_API_KEY: process.env.OPENAI_API_KEY,
});

if (!parsedEnv.success) {
  console.error("❌ Invalid environment variables:", parsedEnv.error.flatten().fieldErrors);

  throw new Error("Invalid environment variables");
}

export const env = parsedEnv.data;