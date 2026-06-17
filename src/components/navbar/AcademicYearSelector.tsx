"use client";

import { useState } from "react";
import { ChevronDown, Check } from "lucide-react";
import { useAcademicYear } from "@/hooks/useAcademicYear";
import { useTranslation } from "@/hooks/useTranslation";
import { useSchoolContext } from "@/context/SchoolContext";

export function AcademicYearSelector() {
  const { selectedYear, academicYears, setSelectedYear } = useAcademicYear();
  const { language } = useSchoolContext();
  const { t } = useTranslation(language);
  const [open, setOpen] = useState(false);

  if (!selectedYear) return null;

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-gray-200 bg-white hover:bg-gray-50 transition-colors text-sm text-gray-700"
      >
        <span className="hidden md:block text-gray-500 text-xs">{t.year}:</span>
        <span className="font-medium" dir="ltr">
          {selectedYear.label}
        </span>
        <ChevronDown size={14} className="text-gray-400" />
      </button>

      {open && (
        <>
          <div className="fixed inset-0 z-10" onClick={() => setOpen(false)} />
          <div className="absolute top-full mt-1 left-0 z-20 w-48 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
            {academicYears.map((year) => (
              <button
                key={year.id}
                type="button"
                onClick={() => {
                  setSelectedYear(year);
                  setOpen(false);
                }}
                className="w-full flex items-center justify-between px-4 py-2.5 text-sm hover:bg-gray-50 transition-colors"
              >
                <span
                  className={
                    year.id === selectedYear.id
                      ? "font-semibold text-gray-900"
                      : "text-gray-700"
                  }
                  dir="ltr"
                >
                  {year.label}
                </span>
                <div className="flex items-center gap-2">
                  {year.isActive ? (
                    <span className="text-xs text-green-600 font-medium">
                      {t.active}
                    </span>
                  ) : (
                    <span className="text-xs text-gray-400">{t.historical}</span>
                  )}
                  {year.id === selectedYear.id && (
                    <Check size={14} className="text-blue-600" />
                  )}
                </div>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}