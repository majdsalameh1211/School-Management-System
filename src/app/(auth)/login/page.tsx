"use client";

import { useState } from "react";
import { AuthLayout } from "@/features/auth/components/AuthLayout";
import { AuthCard } from "@/features/auth/components/AuthCard";
import { AuthHeader } from "@/features/auth/components/AuthHeader";
import { LoginForm } from "@/features/auth/components/LoginForm";
import { ForgotPasswordForm } from "@/features/auth/components/ForgotPasswordForm";
import { Language } from "@/features/auth/types/auth.types";

type AuthView = "login" | "forgotPassword";

export default function LoginPage() {
  const [language, setLanguage] = useState<Language>("en");
  const [view, setView] = useState<AuthView>("login");

  return (
    <AuthLayout
      currentLanguage={language}
      onLanguageChange={setLanguage}
    >
      <AuthCard>
        <AuthHeader language={language} />

        {view === "login" && (
          <LoginForm
            language={language}
            onForgotPassword={() => setView("forgotPassword")}
          />
        )}

        {view === "forgotPassword" && (
          <ForgotPasswordForm
            language={language}
            onBackToLogin={() => setView("login")}
          />
        )}
      </AuthCard>
    </AuthLayout>
  );
}