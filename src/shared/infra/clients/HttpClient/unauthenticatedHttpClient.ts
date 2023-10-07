import { env } from '@src/env';
import wretch from 'wretch';

export const unauthenticatedHttpClient = () => {
  return wretch(env.API_ENDPOINT);
};
