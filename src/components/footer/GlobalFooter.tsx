"use client";

import { CopyrightText } from "./CopyrightText";
import { FooterSchoolInfo } from "./FooterSchoolInfo";
import { FooterAcademicYear } from "./FooterAcademicYear";
import { FooterVersion } from "./FooterVersion";
import { FooterLastLogin } from "./FooterLastLogin";
import { FooterLinks } from "./FooterLinks";
import { useDirection } from "@/hooks/useDirection";

export function GlobalFooter() {
  const direction = useDirection();

  return (
    <footer
      className="w-full bg-white border-t border-gray-100 shrink-0"
      dir={direction}
    >
      {/* Desktop */}
      <div className="hidden md:flex items-center justify-between px-6 py-2.5">
        <div className="flex items-center gap-3">
          <CopyrightText />
          <span className="text-gray-200 text-xs">|</span>
          <FooterSchoolInfo />
          <span className="text-gray-200 text-xs">|</span>
          <FooterVersion />
        </div>
        <div className="flex items-center gap-3">
          <FooterAcademicYear />
          <span className="text-gray-200 text-xs">|</span>
          <FooterLastLogin />
          <span className="text-gray-200 text-xs">|</span>
          <FooterLinks />
        </div>
      </div>

      {/* Mobile */}
      <div className="flex md:hidden flex-wrap items-center justify-between px-4 py-2 gap-x-4 gap-y-1">
        <div className="flex items-center gap-2 flex-wrap">
          <CopyrightText />
          <span className="text-gray-200 text-xs">·</span>
          <FooterVersion />
        </div>
        <div className="flex items-center gap-2">
          <FooterLinks />
        </div>
      </div>
    </footer>
  );
}