import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, LoginFormValues } from "../validation/loginSchema";

export function useLogin() {
  const [isLoading, setIsLoading] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      schoolCode: process.env.NEXT_PUBLIC_DEMO_SCHOOL_CODE ?? "",
      email: process.env.NEXT_PUBLIC_DEMO_EMAIL ?? "",
      password: process.env.NEXT_PUBLIC_DEMO_PASSWORD ?? "",
    },
  });

  async function onSubmit(values: LoginFormValues) {
    try {
      setIsLoading(true);
      setServerError(null);

      // Simulate network delay
      await new Promise((r) => setTimeout(r, 1000));

      // Demo check — replace with real API call later
      const validSchoolCode = process.env.NEXT_PUBLIC_DEMO_SCHOOL_CODE;
      const validEmail = process.env.NEXT_PUBLIC_DEMO_EMAIL;
      const validPassword = process.env.NEXT_PUBLIC_DEMO_PASSWORD;

      if (
        values.schoolCode === validSchoolCode &&
        values.email === validEmail &&
        values.password === validPassword
      ) {
        window.location.href = "/dashboard";
        // TODO: save tokens and redirect to dashboard
      } else {
        setServerError("Invalid school code, email, or password.");
      }
    } catch {
      setServerError("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }

  return {
    form,
    isLoading,
    serverError,
    onSubmit: form.handleSubmit(onSubmit),
  };
}