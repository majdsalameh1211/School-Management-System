import { GraduationCap } from "lucide-react";
import { useTranslation } from "../hooks/useTranslation";
import { Language } from "../types/auth.types";

interface AuthHeaderProps {
  language: Language;
}

export function AuthHeader({ language }: AuthHeaderProps) {
  const { t } = useTranslation(language);

  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-blue-600 shadow-md">
        <GraduationCap size={28} className="text-white" />
      </div>
      <div className="flex flex-col gap-1">
        <h1 className="text-lg font-bold text-gray-900">{t.systemTitle}</h1>
        <p className="text-sm text-gray-500">{t.secureAccess}</p>
      </div>
    </div>
  );
}