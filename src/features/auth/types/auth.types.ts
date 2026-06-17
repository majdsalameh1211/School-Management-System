import { Language, Direction } from "@/types/global.types";

export type { Language, Direction };

export interface LoginPayload {
  schoolCode: string;
  email: string;
  password: string;
}

export interface LoginUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  permissions: string[];
}

export interface LoginSchool {
  id: string;
  code: string;
  name: string;
}

export interface LoginResponse {
  accessToken: string;
  refreshToken: string;
  user: LoginUser;
  school: LoginSchool;
  activeAcademicYear: string;
  language: Language;
  direction: Direction;
}