"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { FormMessage } from "./FormMessage";
import { useTranslation } from "../hooks/useTranslation";
import { Language } from "../types/auth.types";

interface ForgotPasswordFormProps {
  language: Language;
  onBackToLogin: () => void;
}

type ForgotStep = "email" | "code" | "newPassword";

export function ForgotPasswordForm({
  language,
  onBackToLogin,
}: ForgotPasswordFormProps) {
  const { t, direction } = useTranslation(language);
  const [step, setStep] = useState<ForgotStep>("email");
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSendCode() {
    if (!email) return setError("Email is required");
    setIsLoading(true);
    setError(null);
    // TODO: call API
    await new Promise((r) => setTimeout(r, 1000));
    setIsLoading(false);
    setStep("code");
  }

  async function handleVerifyCode() {
    if (!code) return setError("Code is required");
    setIsLoading(true);
    setError(null);
    // TODO: call API
    await new Promise((r) => setTimeout(r, 1000));
    setIsLoading(false);
    setStep("newPassword");
  }

  async function handleResetPassword() {
    if (!newPassword || !confirmPassword)
      return setError("All fields are required");
    if (newPassword !== confirmPassword)
      return setError("Passwords do not match");
    setIsLoading(true);
    setError(null);
    // TODO: call API
    await new Promise((r) => setTimeout(r, 1000));
    setIsLoading(false);
    onBackToLogin();
  }

  return (
    <div className="flex flex-col gap-5" dir={direction}>
      <div className="flex flex-col gap-1 text-center">
        <h2 className="text-lg font-semibold text-gray-900">
          {t.forgotPasswordTitle}
        </h2>
        <p className="text-sm text-gray-500">{t.forgotPasswordSubtitle}</p>
      </div>

      {/* Step 1 — Email */}
      {step === "email" && (
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <Label className="text-sm font-medium text-gray-700">
              {t.email}
            </Label>
            <Input
              type="email"
              placeholder={t.emailPlaceholder}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isLoading}
            />
          </div>
          <FormMessage message={error} type="error" />
          <Button
            onClick={handleSendCode}
            disabled={isLoading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white h-11"
          >
            {isLoading ? t.sendingCode : t.sendCode}
          </Button>
        </div>
      )}

      {/* Step 2 — Verification Code */}
      {step === "code" && (
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <Label className="text-sm font-medium text-gray-700">
              {t.verificationCode}
            </Label>
            <Input
              type="text"
              placeholder={t.verificationCodePlaceholder}
              value={code}
              onChange={(e) => setCode(e.target.value)}
              disabled={isLoading}
              maxLength={6}
            />
          </div>
          <FormMessage message={error} type="error" />
          <Button
            onClick={handleVerifyCode}
            disabled={isLoading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white h-11"
          >
            {isLoading ? t.verifyingCode : t.verifyCode}
          </Button>
        </div>
      )}

      {/* Step 3 — New Password */}
      {step === "newPassword" && (
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <Label className="text-sm font-medium text-gray-700">
              {t.newPassword}
            </Label>
            <Input
              type="password"
              placeholder="••••••••"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              disabled={isLoading}
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <Label className="text-sm font-medium text-gray-700">
              {t.confirmPassword}
            </Label>
            <Input
              type="password"
              placeholder="••••••••"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              disabled={isLoading}
            />
          </div>
          <FormMessage message={error} type="error" />
          <Button
            onClick={handleResetPassword}
            disabled={isLoading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white h-11"
          >
            {isLoading ? "..." : t.resetPassword}
          </Button>
        </div>
      )}

      {/* Back to login */}
      <button
        type="button"
        onClick={onBackToLogin}
        className="text-sm text-blue-600 hover:underline text-center"
      >
        {t.backToLogin}
      </button>
    </div>
  );
}