import { useTranslation } from "@/hooks/useTranslation";
import { useSchoolContext } from "@/context/SchoolContext";

export function FooterVersion() {
  const { language } = useSchoolContext();
  const { t } = useTranslation(language);

  return (
    <span className="text-xs text-gray-400">
      {t.version}:{" "}
      <span className="text-gray-500 font-mono" dir="ltr">
        1.0.0
      </span>
    </span>
  );
}