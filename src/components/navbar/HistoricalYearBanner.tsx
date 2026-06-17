import { AlertTriangle } from "lucide-react";
import { useAcademicYear } from "@/hooks/useAcademicYear";
import { useDirection } from "@/hooks/useDirection";
import { useTranslation } from "@/hooks/useTranslation";
import { useSchoolContext } from "@/context/SchoolContext";

export function HistoricalYearBanner() {
  const { selectedYear, isHistoricalYear } = useAcademicYear();
  const direction = useDirection();
  const { language } = useSchoolContext();
  const { translate } = useTranslation(language);

  if (!isHistoricalYear || !selectedYear) return null;

  return (
    <div
      className="w-full bg-amber-50 border-b border-amber-200 px-4 py-2 flex items-center gap-2 text-amber-700 text-sm"
      dir={direction}
    >
      <AlertTriangle size={16} className="shrink-0 text-amber-500" />
      <span>
        {translate("historicalBanner", { year: selectedYear.label })}
      </span>
    </div>
  );
}