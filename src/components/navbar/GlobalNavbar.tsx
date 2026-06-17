"use client";

import { MenuToggle } from "./MenuToggle";
import { LogoBlock } from "./LogoBlock";
import { SchoolContextBlock } from "./SchoolContextBlock";
import { AcademicYearSelector } from "./AcademicYearSelector";
import { GlobalSearch } from "./GlobalSearch";
import { NotificationsButton } from "./NotificationsButton";
import { RoleBadge } from "./RoleBadge";
import { UserMenu } from "./UserMenu";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function GlobalNavbar() {
  return (
    <header className="w-full h-14 bg-white border-b border-gray-200 flex items-center px-4 gap-3 shrink-0 z-30 sticky top-0">

      {/* Left zone */}
      <div className="flex items-center gap-3 flex-1">
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
        {/* Hamburger — right side for both desktop and mobile */}
        <MenuToggle />
      </div>

    </header>
  );
}