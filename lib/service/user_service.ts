import { config } from "../config";
import { WebResponse } from "../model/auth_model";
import { APIError } from "../model/error";
import { User } from "../model/user_model";
import { authService } from "./auth_service";

async function getCurrentUser(): Promise<User> {
  const authToken = await authService.getLocalAuthToken();

  const res: WebResponse<User> = await fetch(
    config.apiBaseUrl + "/user/current",
    {
      method: "GET",
      headers: {
        Authorization: "Bearer " + authToken.accessToken,
      },
    }
  ).then((r) => r.json());

  if (res.status == 200) {
    return res.data;
  } else {
    throw new APIError(res.message);
  }
}

export const userService = {
  getCurrentUser,
};
