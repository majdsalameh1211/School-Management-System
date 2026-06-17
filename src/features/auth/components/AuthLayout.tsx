import { LanguageSwitcher } from "./LanguageSwitcher";
import { Language } from "../types/auth.types";
import { useTranslation } from "../hooks/useTranslation";

interface AuthLayoutProps {
  children: React.ReactNode;
  currentLanguage: Language;
  onLanguageChange: (language: Language) => void;
}

export function AuthLayout({
  children,
  currentLanguage,
  onLanguageChange,
}: AuthLayoutProps) {
  const { t } = useTranslation(currentLanguage);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-50 to-blue-50 flex flex-col">
      {/* Top Bar — always LTR */}
      <div className="w-full px-6 py-4 flex items-center justify-between" dir="ltr">
        <LanguageSwitcher
          currentLanguage={currentLanguage}
          onLanguageChange={onLanguageChange}
        />
        <span className="text-xs text-gray-400">Need help?</span>
      </div>

      {/* Center Content — direction controlled by language */}
      <div className="flex-1 flex items-center justify-center px-4 py-4">
        {children}
      </div>

      {/* Footer — always LTR */}
      <div className="w-full px-6 py-4 text-center" dir="ltr">
        <p className="text-xs text-gray-400">{t.needHelp}</p>
      </div>
    </div>
  );
}