"use client";

import { GlobalNavbar } from "@/components/navbar/GlobalNavbar";
import { HistoricalYearBanner } from "@/components/navbar/HistoricalYearBanner";
import { DesktopSidebar } from "@/components/sidebar/DesktopSidebar";
import { MobileDrawer } from "@/components/drawer/MobileDrawer";
import { GlobalFooter } from "@/components/footer/GlobalFooter";
import { SchoolProvider, useSchoolContext } from "@/context/SchoolContext";
import { AcademicYearProvider } from "@/context/AcademicYearContext";
import { useDirection } from "@/hooks/useDirection";

function PortalShell({ children }: { children: React.ReactNode }) {
  const direction = useDirection();
  const { drawerOpen, toggleDrawer } = useSchoolContext();

  return (
    <div className="h-screen flex flex-col bg-gray-50 overflow-hidden">

      {/* Navbar — always LTR, never shrinks */}
      <div dir="ltr" className="shrink-0">
        <GlobalNavbar />
      </div>

      {/* Historical year banner — only shows when needed */}
      <div dir={direction} className="shrink-0">
        <HistoricalYearBanner />
      </div>

      {/* Body — fills all remaining space between navbar and footer */}
      <div className="flex flex-1 min-h-0" dir={direction}>
        <DesktopSidebar />
        <main className="flex-1 overflow-y-auto p-6">
          {children}
        </main>
      </div>

      {/* Footer — never shrinks */}
      <div dir={direction} className="shrink-0">
        <GlobalFooter />
      </div>

      {/* Mobile drawer — completely outside layout flow */}
      <div
        dir="ltr"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          pointerEvents: drawerOpen ? "auto" : "none",
          zIndex: 39,
        }}
      >
        <MobileDrawer
          open={drawerOpen}
          onClose={toggleDrawer}
        />
      </div>

    </div>
  );
}

function ProvidersWrapper({ children }: { children: React.ReactNode }) {
  return (
    <SchoolProvider>
      <AcademicYearProvider>
        {children}
      </AcademicYearProvider>
    </SchoolProvider>
  );
}

export function SchoolPortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ProvidersWrapper>
      <PortalShell>{children}</PortalShell>
    </ProvidersWrapper>
  );
}