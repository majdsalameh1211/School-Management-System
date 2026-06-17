import { LoginPayload, LoginResponse } from "../types/auth.types";

export async function loginApi(payload: LoginPayload): Promise<LoginResponse> {
  // TODO: replace with real API call when backend is ready
  const response = await fetch("/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Login failed");
  }

  return response.json();
}