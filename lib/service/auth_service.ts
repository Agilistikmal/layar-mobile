import { config } from "../config";
import { AuthResponse, LoginRequest, WebResponse } from "../model/auth_model";
import { APIError } from "../model/error";
import * as SecureStore from "expo-secure-store";

async function getLocalAuthToken(): Promise<AuthResponse> {
  const accessToken = await SecureStore.getItemAsync("accessToken");
  const accessTokenExpiredAt = await SecureStore.getItemAsync(
    "accessTokenExpiredAt"
  );
  const refreshToken = await SecureStore.getItemAsync("refreshToken");
  const refreshTokenExpiredAt = await SecureStore.getItemAsync(
    "refreshTokenExpiredAt"
  );

  if (
    !(
      accessToken &&
      accessTokenExpiredAt &&
      refreshToken &&
      refreshTokenExpiredAt
    )
  ) {
    throw new APIError("Token autentikasi tidak valid.");
  }

  const authToken: AuthResponse = {
    accessToken,
    accessTokenExpiredAt,
    refreshToken,
    refreshTokenExpiredAt,
  };

  return authToken;
}

async function setLocalAuthToken(authToken: AuthResponse) {
  await SecureStore.setItemAsync(
    "accessToken",
    JSON.stringify(authToken.accessToken)
  );
  await SecureStore.setItemAsync(
    "accessTokenExpiredAt",
    JSON.stringify(authToken.accessTokenExpiredAt)
  );
  await SecureStore.setItemAsync(
    "refreshToken",
    JSON.stringify(authToken.refreshToken)
  );
  await SecureStore.setItemAsync(
    "refreshTokenExpiredAt",
    JSON.stringify(authToken.refreshTokenExpiredAt)
  );
}

async function login(
  request: LoginRequest
): Promise<WebResponse<AuthResponse>> {
  const res: WebResponse<AuthResponse> = await fetch(
    config.apiBaseUrl + "/auth/authenticate",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(request),
    }
  ).then((r) => r.json());

  if (res.status == 200) {
    return res;
  } else {
    throw new APIError(res.message);
  }
}

export const authService = {
  login,
  getLocalAuthToken,
  setLocalAuthToken,
};
