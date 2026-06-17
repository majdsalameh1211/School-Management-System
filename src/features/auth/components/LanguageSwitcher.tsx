import { Language } from "../types/auth.types";

interface LanguageSwitcherProps {
  currentLanguage: Language;
  onLanguageChange: (language: Language) => void;
}

const languages: { code: Language; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "he", label: "HE" },
  { code: "ar", label: "AR" },
];

export function LanguageSwitcher({
  currentLanguage,
  onLanguageChange,
}: LanguageSwitcherProps) {
  return (
    <div className="flex items-center gap-1">
      {languages.map((lang, index) => (
        <div key={lang.code} className="flex items-center">
          <button
            type="button"
            onClick={() => onLanguageChange(lang.code)}
            className={`px-2 py-1 text-sm font-medium transition-colors ${
              currentLanguage === lang.code
                ? "text-blue-600 font-semibold"
                : "text-gray-400 hover:text-gray-600"
            }`}
          >
            {lang.label}
          </button>
          {index < languages.length - 1 && (
            <span className="text-gray-300 text-sm">|</span>
          )}
        </div>
      ))}
    </div>
  );
}