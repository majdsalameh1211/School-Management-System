"use client";

import { useState } from "react";
import { Globe, Check } from "lucide-react";
import { useSchoolContext } from "@/context/SchoolContext";
import { Language } from "@/types/global.types";

const languages: { code: Language; label: string; native: string }[] = [
  { code: "en", label: "English", native: "English" },
  { code: "he", label: "Hebrew", native: "עברית" },
  { code: "ar", label: "Arabic", native: "العربية" },
];

export function LanguageSwitcher() {
  const { language, setLanguage } = useSchoolContext();
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center gap-1.5 p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-colors"
        aria-label="Switch language"
      >
        <Globe size={18} />
      </button>

      {open && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setOpen(false)}
          />
          <div className="absolute top-full mt-2 right-0 z-20 w-40 bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden">
            {languages.map((lang) => (
              <button
                key={lang.code}
                type="button"
                onClick={() => {
                  setLanguage(lang.code);
                  setOpen(false);
                }}
                className="w-full flex items-center justify-between px-4 py-2.5 text-sm hover:bg-gray-50 transition-colors"
              >
                <span
                  className={
                    language === lang.code
                      ? "font-semibold text-blue-600"
                      : "text-gray-700"
                  }
                >
                  {lang.native}
                </span>
                {language === lang.code && (
                  <Check size={14} className="text-blue-600" />
                )}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}