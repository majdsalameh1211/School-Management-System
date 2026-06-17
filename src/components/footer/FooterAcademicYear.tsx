import { useAcademicYear } from "@/hooks/useAcademicYear";
import { useTranslation } from "@/hooks/useTranslation";
import { useSchoolContext } from "@/context/SchoolContext";

export function FooterAcademicYear() {
  const { selectedYear } = useAcademicYear();
  const { language } = useSchoolContext();
  const { t } = useTranslation(language);

  if (!selectedYear) return null;

  return (
    <span className="text-xs text-gray-400">
      {t.activeYear}:{" "}
      <span className="text-gray-500 font-medium" dir="ltr">
        {selectedYear.label}
      </span>
    </span>
  );
}