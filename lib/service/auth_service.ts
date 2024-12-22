import { config } from "../config";
import { AuthResponse, LoginRequest, WebResponse } from "../model/auth_model";
import { APIError } from "../model/error";

async function login(request: LoginRequest): Promise<AuthResponse> {
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
    return res.data;
  } else {
    throw new APIError("Failed to authenticate");
  }
}

export const authService = {
  login,
};
