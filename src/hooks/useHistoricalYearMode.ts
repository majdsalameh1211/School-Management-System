import { useAcademicYearContext } from "@/context/AcademicYearContext";

export function useHistoricalYearMode() {
  const { isHistoricalYear } = useAcademicYearContext();
  return isHistoricalYear;
}