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
    <header className="w-full h-16 bg-white border-b border-gray-200 flex items-center px-4 gap-3 shrink-0 z-30 sticky top-0">

      {/* Left zone */}
      <div className="flex items-center gap-3 flex-1">
        <LogoBlock />
        {/* Desktop only */}
        <SchoolContextBlock />
      </div>

      {/* Right zone */}
      <div className="flex items-center gap-2">
        {/* Desktop only */}
        <div className="hidden md:flex items-center gap-2">
          <AcademicYearSelector />
          <GlobalSearch />
          <RoleBadge />
          <UserMenu />
        </div>

        {/* Always visible */}
        <NotificationsButton />
        <LanguageSwitcher />

        {/* Hamburger — desktop left sidebar toggle, mobile right drawer toggle */}
        <div className="hidden md:block">
          <MenuToggle />
        </div>
        <div className="md:hidden">
          <MenuToggle />
        </div>
      </div>

    </header>
  );
}