"use client";

import { MenuToggle } from "./MenuToggle";
import { LogoBlock } from "./LogoBlock";
import { SchoolContextBlock } from "./SchoolContextBlock";
import { AcademicYearSelector } from "./AcademicYearSelector";
import { GlobalSearch } from "./GlobalSearch";
import { NotificationsButton } from "./NotificationsButton";
import { RoleBadge } from "./RoleBadge";
import { UserMenu } from "./UserMenu";
import { useSchoolContext } from "@/context/SchoolContext";
import { useDirection } from "@/hooks/useDirection";
import { useTranslation } from "@/hooks/useTranslation";

import { LanguageSwitcher } from "./LanguageSwitcher";



export function GlobalNavbar() {
  const { language, setLanguage } = useSchoolContext();
  const direction = useDirection();
  const { t } = useTranslation(language);

  return (
    <header className="w-full h-14 bg-white border-b border-gray-200 flex items-center px-4 gap-3 shrink-0 z-30 sticky top-0">
      {/* Left zone */}
      <div className="flex items-center gap-3 flex-1">
        <MenuToggle />
        <LogoBlock />
        <SchoolContextBlock />
      </div>

      {/* Right zone */}
      <div className="flex items-center gap-2">
        <AcademicYearSelector />
        <GlobalSearch />
        <NotificationsButton />

       <LanguageSwitcher />

        <RoleBadge />
        <UserMenu />
      </div>
    </header>
  );
}