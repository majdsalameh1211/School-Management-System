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
      className="w-full bg-white border-t border-gray-200 px-6 py-3 shrink-0"
      dir={direction}
    >
      {/* Desktop */}
      <div className="hidden md:flex items-center justify-between">
        <div className="flex items-center gap-4">
          <CopyrightText />
          <span className="text-gray-200">|</span>
          <FooterSchoolInfo />
          <span className="text-gray-200">|</span>
          <FooterVersion />
        </div>
        <div className="flex items-center gap-4">
          <FooterAcademicYear />
          <span className="text-gray-200">|</span>
          <FooterLastLogin />
          <span className="text-gray-200">|</span>
          <FooterLinks />
        </div>
      </div>

      {/* Mobile */}
      <div className="flex flex-col gap-2 md:hidden">
        <CopyrightText />
        <FooterSchoolInfo />
        <FooterAcademicYear />
        <FooterVersion />
        <FooterLastLogin />
        <FooterLinks />
      </div>
    </footer>
  );
}