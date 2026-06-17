"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { PasswordInput } from "./PasswordInput";
import { FormMessage } from "./FormMessage";
import { useLogin } from "../hooks/useLogin";
import { useTranslation } from "../hooks/useTranslation";
import { Language } from "../types/auth.types";

interface LoginFormProps {
  language: Language;
  onForgotPassword: () => void;
}

export function LoginForm({ language, onForgotPassword }: LoginFormProps) {
  const { form, isLoading, serverError, onSubmit } = useLogin();
  const { t, direction } = useTranslation(language);
  const {
    register,
    formState: { errors },
  } = form;

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4" dir={direction}>
      <div className="flex flex-col gap-1 text-center">
        <h2 className="text-lg font-semibold text-gray-900">{t.signIn}</h2>
        <p className="text-sm text-gray-500">{t.enterDetails}</p>
      </div>

      {/* School Code */}
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="schoolCode" className="text-sm font-medium text-gray-700">
          {t.schoolCode}
        </Label>
        <Input
          id="schoolCode"
          type="text"
          placeholder={t.schoolCodePlaceholder}
          disabled={isLoading}
          className={errors.schoolCode ? "border-red-400 focus-visible:ring-red-400" : ""}
          {...register("schoolCode")}
        />
        {errors.schoolCode && (
          <p className="text-xs text-red-500">{errors.schoolCode.message}</p>
        )}
      </div>

      {/* Email */}
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="email" className="text-sm font-medium text-gray-700">
          {t.email}
        </Label>
        <Input
          id="email"
          type="email"
          placeholder={t.emailPlaceholder}
          disabled={isLoading}
          className={errors.email ? "border-red-400 focus-visible:ring-red-400" : ""}
          {...register("email")}
        />
        {errors.email && (
          <p className="text-xs text-red-500">{errors.email.message}</p>
        )}
      </div>

      {/* Password */}
      <div className="flex flex-col gap-1.5">
        <Label htmlFor="password" className="text-sm font-medium text-gray-700">
          {t.password}
        </Label>
        <PasswordInput
          id="password"
          label=""
          disabled={isLoading}
          error={errors.password?.message}
          registration={register("password")}
        />
        {/* Forgot password — below password field */}
        <div className="flex justify-end">
          <button
            type="button"
            onClick={onForgotPassword}
            className="text-xs text-blue-600 hover:underline"
          >
            {t.forgotPassword}
          </button>
        </div>
      </div>

      {/* Server Error */}
      <FormMessage message={serverError} type="error" />

      {/* Submit */}
      <Button
        type="submit"
        disabled={isLoading}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium h-11"
      >
        {isLoading ? t.signingIn : t.signIn}
      </Button>
    </form>
  );
}