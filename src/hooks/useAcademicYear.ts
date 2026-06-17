import { useAcademicYearContext } from "@/context/AcademicYearContext";

export function useAcademicYear() {
  const { selectedYear, academicYears, isHistoricalYear, setSelectedYear } =
    useAcademicYearContext();
  return { selectedYear, academicYears, isHistoricalYear, setSelectedYear };
}