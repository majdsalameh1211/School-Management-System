"use client";

import { GraduationCap } from "lucide-react";
import Link from "next/link";
import { useTranslation } from "@/hooks/useTranslation";
import { useSchoolContext } from "@/context/SchoolContext";

export function LogoBlock() {
  const { language } = useSchoolContext();
  const { t } = useTranslation(language);

  return (
    <Link
      href="/dashboard"
      className="flex items-center gap-2 hover:opacity-80 transition-opacity"
    >
      <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-600">
        <GraduationCap size={18} className="text-white" />
      </div>
      <span className="font-semibold text-gray-900 hidden md:block text-sm">
        {t.systemName}
      </span>
      <span className="font-semibold text-gray-900 block md:hidden text-sm">
        {t.systemNameShort}
      </span>
    </Link>
  );
}