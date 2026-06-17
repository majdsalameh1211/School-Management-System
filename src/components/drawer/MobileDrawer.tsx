"use client";

import { MobileDrawerHeader } from "./MobileDrawerHeader";
import { MobileDrawerNavigation } from "./MobileDrawerNavigation";

interface MobileDrawerProps {
  open: boolean;
  onClose: () => void;
}

export function MobileDrawer({ open, onClose }: MobileDrawerProps) {
  if (!open) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 bg-black/30 md:hidden"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="fixed inset-y-0 left-0 z-50 w-72 bg-white shadow-xl flex flex-col md:hidden">
        <MobileDrawerHeader onClose={onClose} />
        <MobileDrawerNavigation onClose={onClose} />
      </div>
    </>
  );
}