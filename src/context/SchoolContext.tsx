"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { School, AcademicYear, CurrentUser } from "@/types/school.types";
import { Language } from "@/types/global.types";

interface SchoolContextValue {
  user: CurrentUser | null;
  school: School | null;
  academicYears: AcademicYear[];
  selectedYear: AcademicYear | null;
  language: Language;
  sidebarOpen: boolean;
  setUser: (user: CurrentUser | null) => void;
  setSchool: (school: School | null) => void;
  setAcademicYears: (years: AcademicYear[]) => void;
  setSelectedYear: (year: AcademicYear) => void;
  setLanguage: (language: Language) => void;
  toggleSidebar: () => void;
}

const SchoolContext = createContext<SchoolContextValue | null>(null);

export function SchoolProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<CurrentUser | null>({
    id: "1",
    firstName: "Majd",
    lastName: "Salameh",
    email: "admin@school.co.il",
    role: "Admin",
    permissions: ["read", "write", "edit", "admin"],
    language: "en",
  });

  const [school, setSchool] = useState<School | null>({
    id: "1",
    code: "247106",
    name: "Demo High School",
    type: "HighSchool",
  });

  const [academicYears, setAcademicYears] = useState<AcademicYear[]>([
    { id: "1", label: "2026/2027", isActive: true },
    { id: "2", label: "2025/2026", isActive: false },
    { id: "3", label: "2024/2025", isActive: false },
  ]);

  const [selectedYear, setSelectedYear] = useState<AcademicYear>(
    academicYears[0]
  );

  const [language, setLanguage] = useState<Language>("en");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  function toggleSidebar() {
    setSidebarOpen((prev) => !prev);
  }

  return (
    <SchoolContext.Provider
      value={{
        user,
        school,
        academicYears,
        selectedYear,
        language,
        sidebarOpen,
        setUser,
        setSchool,
        setAcademicYears,
        setSelectedYear,
        setLanguage,
        toggleSidebar,
      }}
    >
      {children}
    </SchoolContext.Provider>
  );
}

export function useSchoolContext() {
  const context = useContext(SchoolContext);
  if (!context) {
    throw new Error("useSchoolContext must be used inside SchoolProvider");
  }
  return context;
}