import { authenticatedHttpClient } from '@src/shared/infra/clients/HttpClient/authenticatedhttpClient';

import {
  AccessTokenSingleton,
  getAccessToken,
} from '@src/modules/auth/shared/infra/AccessTokenSingleton/AccessTokenSingleton';
import { AuthTokenService } from '@src/modules/auth/shared/infra/services/AuthToken.service';
import { nockWithEndpoint } from '@src/shared/helpers/jest/nock';

const authenticatedUrl = '/connectedHomePage';
const validToken = 'accessToken';
const newValidToken = 'newAccessToken';
const refreshToken = 'refreshToken';

const mockAuthorized = (token: string, delay = 0) => {
  nockWithEndpoint()
    .get(authenticatedUrl)
    .matchHeader('Authorization', `Bearer ${token}`)
    .delay(delay)
    .reply(200);
};

const mockUnauthorized = (token: string, delay = 0) => {
  nockWithEndpoint()
    .get(authenticatedUrl)
    .matchHeader('Authorization', `Bearer ${token}`)
    .delay(delay)
    .reply(401);
};

const mockRefresh = (newToken: string, delay = 0) => {
  nockWithEndpoint()
    .post('/auth/jwt/refresh')
    .matchHeader('Authorization', `Bearer ${refreshToken}`)
    .delay(delay)
    .reply(200, {
      accessToken: newToken,
      refreshToken: refreshToken,
    });
};

const mockFailedRefresh = (delay = 0) => {
  nockWithEndpoint()
    .post('/auth/jwt/refresh')
    .matchHeader('Authorization', `Bearer ${refreshToken}`)
    .delay(delay)
    .reply(500, 'Internal server error');
};

describe('authenticatedHttpClient', () => {
  it('should return 200 if the token in storage is valid', async () => {
    await AccessTokenSingleton.getInstance().setAccessToken(validToken);
    mockAuthorized(validToken);

    const res = await authenticatedHttpClient().get(authenticatedUrl).res();

    expect(res.status).toBe(200);
  });

  it('should return 200 if the token in storage is expired but can be refreshed', async () => {
    await AccessTokenSingleton.getInstance().setAccessToken('expiredToken');
    await AuthTokenService.setRefreshToken(refreshToken);

    mockUnauthorized('expiredToken');
    mockRefresh(newValidToken);
    mockAuthorized(newValidToken);

    const res = await authenticatedHttpClient().get(authenticatedUrl).res();

    expect(res.status).toBe(200);
  });

  it('should save the access token in local storage after refreshing', async () => {
    await AccessTokenSingleton.getInstance().setAccessToken('expiredToken');
    await AuthTokenService.setRefreshToken(refreshToken);

    mockUnauthorized('expiredToken');
    mockRefresh(newValidToken);
    mockAuthorized(newValidToken);

    await authenticatedHttpClient().get(authenticatedUrl).res();

    expect(await getAccessToken()).toBe(newValidToken);
  });

  it('should refresh only once for 2 simultaneous requests with expired token, if the second request responds during refreshing', async () => {
    await AccessTokenSingleton.getInstance().setAccessToken('expiredToken');
    await AuthTokenService.setRefreshToken(refreshToken);

    const firstRequestDuration = 100;
    const refreshRequestDuration = 100;
    const secondRequestDuration =
      firstRequestDuration + refreshRequestDuration - 10;
    mockUnauthorized('expiredToken', firstRequestDuration);
    mockUnauthorized('expiredToken', secondRequestDuration);
    // Called once only!
    mockRefresh(newValidToken, refreshRequestDuration);
    mockAuthorized(newValidToken, 0);
    mockAuthorized(newValidToken, 0);

    const firstRequestPromise = authenticatedHttpClient()
      .get(authenticatedUrl)
      .res();

    const secondRequestPromise = authenticatedHttpClient()
      .get(authenticatedUrl)
      .res();

    const [firstRequest, secondRequest] = await Promise.all([
      firstRequestPromise,
      secondRequestPromise,
    ]);

    expect(firstRequest.status).toBe(200);
    expect(secondRequest.status).toBe(200);
    expect(await getAccessToken()).toBe(newValidToken);
  });

  it('does not need to refresh again if the previously refreshed token is still valid', async () => {
    await AccessTokenSingleton.getInstance().setAccessToken('expiredToken');
    await AuthTokenService.setRefreshToken(refreshToken);

    // First call - expired token

    mockUnauthorized('expiredToken');
    mockRefresh(newValidToken);
    mockAuthorized(newValidToken);

    const firstRequest = await authenticatedHttpClient()
      .get(authenticatedUrl)
      .res();

    expect(firstRequest.status).toBe(200);
    expect(await getAccessToken()).toBe(newValidToken);

    // Second call - valid token

    mockAuthorized(newValidToken);

    const secondRequest = await authenticatedHttpClient()
      .get(authenticatedUrl)
      .res();

    expect(secondRequest.status).toBe(200);
    expect(await getAccessToken()).toBe(newValidToken);
  });

  it('tries refreshing again in the next request if refreshing fails', async () => {
    await AccessTokenSingleton.getInstance().setAccessToken('expiredToken');
    await AuthTokenService.setRefreshToken(refreshToken);

    // First call - failed refresh

    mockUnauthorized('expiredToken');
    mockFailedRefresh();

    await expect(
      authenticatedHttpClient().get(authenticatedUrl).res(),
    ).rejects.toEqual(new Error('Internal server error'));
    expect(await getAccessToken()).toBe('expiredToken');

    // Second call - successful refresh

    mockUnauthorized('expiredToken');
    mockRefresh(newValidToken);
    mockAuthorized(newValidToken);

    const secondRequest = await authenticatedHttpClient()
      .get(authenticatedUrl)
      .res();

    expect(secondRequest.status).toBe(200);
    expect(await getAccessToken()).toBe(newValidToken);
  });

  it('should return 200 if token has expired, has been refreshed and has expired again', async () => {
    await AccessTokenSingleton.getInstance().setAccessToken('expiredToken');
    await AuthTokenService.setRefreshToken(refreshToken);

    // First call - expired token

    mockUnauthorized('expiredToken');
    mockRefresh(newValidToken);
    mockAuthorized(newValidToken);

    const firstRequest = await authenticatedHttpClient()
      .get(authenticatedUrl)
      .res();

    expect(firstRequest.status).toBe(200);
    expect(await getAccessToken()).toBe(newValidToken);

    // Second call - expired token

    mockUnauthorized(newValidToken);
    mockRefresh('evenNewerAccessToken');
    mockAuthorized('evenNewerAccessToken');

    const secondRequest = await authenticatedHttpClient()
      .get(authenticatedUrl)
      .res();

    expect(secondRequest.status).toBe(200);
    expect(await getAccessToken()).toBe('evenNewerAccessToken');
  });
});
