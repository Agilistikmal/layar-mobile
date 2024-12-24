export enum USER_ROLES {
  USER,
  ADMIN,
}

export type User = {
  id: string;
  username: string;
  fullName: string;
  roles: USER_ROLES;
  createdAt: number;
  updatedAt: number;
};
