import { useTranslation } from "@/hooks/useTranslation";
import { useSchoolContext } from "@/context/SchoolContext";

export function FooterLastLogin() {
  const { language } = useSchoolContext();
  const { t } = useTranslation(language);

  const time = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <span className="text-xs text-gray-400">
      {t.lastLogin}:{" "}
      <span className="text-gray-500 font-mono" dir="ltr">
        {time}
      </span>
    </span>
  );
}