"use client";

import { useEffect, useState } from "react";
import { MobileDrawerHeader } from "./MobileDrawerHeader";
import { MobileDrawerNavigation } from "./MobileDrawerNavigation";
import { useDirection } from "@/hooks/useDirection";

interface MobileDrawerProps {
  open: boolean;
  onClose: () => void;
}

export function MobileDrawer({ open, onClose }: MobileDrawerProps) {
  const [visible, setVisible] = useState(false);
  const [animating, setAnimating] = useState(false);
  const direction = useDirection();

  useEffect(() => {
    if (open) {
      setVisible(true);
      setTimeout(() => setAnimating(true), 10);
    } else {
      setAnimating(false);
      setTimeout(() => setVisible(false), 300);
    }
  }, [open]);

  if (!visible) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 40,
          backgroundColor: "rgba(0,0,0,0.3)",
          opacity: animating ? 1 : 0,
          transition: "opacity 300ms ease-in-out",
        }}
      />

      {/* Drawer panel — always from right, never flips */}
      <div
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          bottom: 0,
          width: "288px",
          zIndex: 50,
          backgroundColor: "white",
          boxShadow: "-4px 0 24px rgba(0,0,0,0.12)",
          display: "flex",
          flexDirection: "column",
          transform: animating ? "translateX(0)" : "translateX(288px)",
          transition: "transform 300ms ease-in-out",
        }}
      >
        {/* Content inside follows language direction */}
        <div dir={direction} style={{ display: "flex", flexDirection: "column", flex: 1, overflow: "hidden" }}>
          <MobileDrawerHeader onClose={onClose} />
          <MobileDrawerNavigation onClose={onClose} />
        </div>
      </div>
    </>
  );
}