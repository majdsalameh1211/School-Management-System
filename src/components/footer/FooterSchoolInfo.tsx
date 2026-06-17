import { useCurrentSchool } from "@/hooks/useCurrentSchool";
import { useTranslation } from "@/hooks/useTranslation";
import { useSchoolContext } from "@/context/SchoolContext";

export function FooterSchoolInfo() {
  const school = useCurrentSchool();
  const { language } = useSchoolContext();
  const { t } = useTranslation(language);

  if (!school) return null;

  return (
    <span className="text-xs text-gray-400">
      {t.school}:{" "}
      <span className="text-gray-500 font-medium">{school.name}</span>
    </span>
  );
}