"use client";

import { createContext, useContext, ReactNode } from "react";
import { AcademicYear } from "@/types/school.types";
import { useSchoolContext } from "./SchoolContext";

interface AcademicYearContextValue {
  selectedYear: AcademicYear | null;
  academicYears: AcademicYear[];
  isHistoricalYear: boolean;
  setSelectedYear: (year: AcademicYear) => void;
}

const AcademicYearContext = createContext<AcademicYearContextValue | null>(null);

export function AcademicYearProvider({ children }: { children: ReactNode }) {
  const { selectedYear, academicYears, setSelectedYear } = useSchoolContext();

  const isHistoricalYear = selectedYear ? !selectedYear.isActive : false;

  return (
    <AcademicYearContext.Provider
      value={{
        selectedYear,
        academicYears,
        isHistoricalYear,
        setSelectedYear,
      }}
    >
      {children}
    </AcademicYearContext.Provider>
  );
}

export function useAcademicYearContext() {
  const context = useContext(AcademicYearContext);
  if (!context) {
    throw new Error(
      "useAcademicYearContext must be used inside AcademicYearProvider"
    );
  }
  return context;
}