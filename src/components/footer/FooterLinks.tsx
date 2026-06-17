"use client";

import { useTranslation } from "@/hooks/useTranslation";
import { useSchoolContext } from "@/context/SchoolContext";

export function FooterLinks() {
  const { language } = useSchoolContext();
  const { t } = useTranslation(language);

  return (
    <div className="flex items-center gap-3">
      <a href="/support" className="text-xs text-gray-400 hover:text-blue-600 transition-colors">
        {t.support}
      </a>
      <span className="text-gray-200 text-xs">|</span>
      <a href="/privacy" className="text-xs text-gray-400 hover:text-blue-600 transition-colors">
        {t.privacy}
      </a>
    </div>
  );
}