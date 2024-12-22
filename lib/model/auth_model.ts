export type LoginRequest = {
  username: string;
  password: string;
};

export type WebResponse<T> = {
  status: number;
  message: string;
  data: T;
};

export type AuthResponse = {
  accessToken: string;
  refreshToken: string;
  accessTokenExpiredAt: string;
  refreshTokenExpiredAt: string;
};
