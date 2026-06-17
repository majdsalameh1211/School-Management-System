"use client";

import { useState } from "react";
import { GlobalNavbar } from "@/components/navbar/GlobalNavbar";
import { HistoricalYearBanner } from "@/components/navbar/HistoricalYearBanner";
import { DesktopSidebar } from "@/components/sidebar/DesktopSidebar";
import { MobileDrawer } from "@/components/drawer/MobileDrawer";
import { GlobalFooter } from "@/components/footer/GlobalFooter";
import { SchoolProvider } from "@/context/SchoolContext";
import { AcademicYearProvider } from "@/context/AcademicYearContext";
import { useDirection } from "@/hooks/useDirection";

function PortalShell({ children }: { children: React.ReactNode }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const direction = useDirection();

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">

      {/* Navbar — always LTR, never flips */}
      <div dir="ltr">
        <GlobalNavbar />
      </div>

      {/* Historical year banner — follows content direction */}
      <div dir={direction}>
        <HistoricalYearBanner />
      </div>

      {/* Body — sidebar + content follow direction */}
      <div className="flex flex-1 overflow-hidden" dir={direction}>
        <DesktopSidebar />

        <MobileDrawer
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
        />

        <main className="flex-1 overflow-y-auto p-6">
          {children}
        </main>
      </div>

      {/* Footer — follows content direction */}
      <div dir={direction}>
        <GlobalFooter />
      </div>
    </div>
  );
}

export function SchoolPortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SchoolProvider>
      <AcademicYearProvider>
        <PortalShell>{children}</PortalShell>
      </AcademicYearProvider>
    </SchoolProvider>
  );
}