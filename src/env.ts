import Constants from "expo-constants";
import { z } from "zod";

const envSchema = z.object({
  SCHEME: z.string().default("staging"),
  SUPPORT_PHONE_NUMBER: z.string().default("0600000000"),
  API_ENDPOINT: z.string().default("https://mybackend.fr"),
  eas: z
    .object({
      projectId: z.string(),
    })
    .default({ projectId: "projectId" }),
});

export const env = envSchema.parse(Constants.expoConfig?.extra ?? {});
