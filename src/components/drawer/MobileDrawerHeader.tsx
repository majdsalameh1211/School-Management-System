import { X } from "lucide-react";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import { useCurrentSchool } from "@/hooks/useCurrentSchool";
import { useAcademicYear } from "@/hooks/useAcademicYear";
import { useSchoolContext } from "@/context/SchoolContext";
import { useTranslation } from "@/hooks/useTranslation";
import { Language } from "@/types/global.types";

const languages: { code: Language; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "he", label: "HE" },
  { code: "ar", label: "AR" },
];

interface MobileDrawerHeaderProps {
  onClose: () => void;
}

export function MobileDrawerHeader({ onClose }: MobileDrawerHeaderProps) {
  const user = useCurrentUser();
  const school = useCurrentSchool();
  const { selectedYear } = useAcademicYear();
  const { language, setLanguage } = useSchoolContext();
  const { t } = useTranslation(language);

  return (
    <div className="flex flex-col gap-4 p-4 border-b border-gray-100">
      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold text-gray-800">{t.menu}</span>
        <button
          type="button"
          onClick={onClose}
          className="p-1.5 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100"
        >
          <X size={18} />
        </button>
      </div>

      {user && (
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-blue-600 text-white text-sm font-semibold flex items-center justify-center shrink-0">
              {user.firstName[0]}
              {user.lastName[0]}
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-gray-800">
                {user.firstName} {user.lastName}
              </span>
              <span className="text-xs text-gray-500">{user.role}</span>
            </div>
          </div>

          {school && (
            <div className="flex flex-col gap-0.5 mt-1 pl-12">
              <span className="text-xs text-gray-500">
                {t.school}:{" "}
                <span className="text-gray-700 font-medium">{school.name}</span>
              </span>
              <span className="text-xs text-gray-500" dir="ltr">
                Code:{" "}
                <span className="text-gray-700 font-mono">{school.code}</span>
              </span>
              {selectedYear && (
                <span className="text-xs text-gray-500" dir="ltr">
                  {t.year}:{" "}
                  <span className="text-gray-700 font-medium">
                    {selectedYear.label}
                  </span>
                </span>
              )}
            </div>
          )}
        </div>
      )}

      <div className="flex items-center gap-1">
        {languages.map((lang, index) => (
          <div key={lang.code} className="flex items-center">
            <button
              type="button"
              onClick={() => setLanguage(lang.code)}
              className={`px-2 py-1 text-xs font-medium transition-colors ${
                language === lang.code
                  ? "text-blue-600 font-semibold"
                  : "text-gray-400 hover:text-gray-600"
              }`}
            >
              {lang.label}
            </button>
            {index < languages.length - 1 && (
              <span className="text-gray-200 text-xs">|</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}