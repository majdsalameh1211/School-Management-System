import { useTranslation } from "@/hooks/useTranslation";
import { useSchoolContext } from "@/context/SchoolContext";

export function CopyrightText() {
  const { language } = useSchoolContext();
  const { t } = useTranslation(language);

  return (
    <span className="text-xs text-gray-400">
      © {new Date().getFullYear()} {t.copyright}
    </span>
  );
}