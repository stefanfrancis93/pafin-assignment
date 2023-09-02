import type { ParamsDictionary } from "express-serve-static-core";

// Request body when creating or updating a user
export interface UserRequestData {
  name: string;
  email: string;
  password: string;
}

// Request params with user ID
export interface UserIdParams extends ParamsDictionary {
  id: string;
}

// Response data when getting or creating a user
export interface UserResponseData {
  id: number;
  name: string;
  email: string;
}
