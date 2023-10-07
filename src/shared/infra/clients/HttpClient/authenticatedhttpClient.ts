import { env } from '@src/env';
import { AuthenticationMiddleware } from '@src/modules/auth/shared/infra/middlewares/authentication.middleware';
import { RefreshTokenMiddleware } from '@src/modules/auth/shared/infra/middlewares/refreshToken.middleware';
import wretch from 'wretch';

export const authenticatedHttpClient = () => {
  return wretch(env.API_ENDPOINT).middlewares([
    RefreshTokenMiddleware,
    AuthenticationMiddleware,
  ]);
};
