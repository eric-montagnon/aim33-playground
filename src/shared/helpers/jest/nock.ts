import { env } from "@src/env";
import nock from "nock";

export const nockWithEndpoint = (options?: nock.Options) =>
  nock(env.API_ENDPOINT, options);
