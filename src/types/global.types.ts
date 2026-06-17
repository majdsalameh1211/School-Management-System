export type Language = "en" | "he" | "ar";
export type Direction = "ltr" | "rtl";

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
}

export interface ApiError {
  message: string;
  code?: string;
}