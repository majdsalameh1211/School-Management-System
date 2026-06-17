"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarSubItemProps {
  label: string;
  href: string;
  collapsed: boolean;
}

export function SidebarSubItem({
  label,
  href,
  collapsed,
}: SidebarSubItemProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  if (collapsed) return null;

  return (
    <Link
      href={href}
      className={`flex items-center gap-2 ps-9 pe-3 py-1.5 rounded-lg text-sm transition-colors ${isActive
          ? "text-blue-700 font-medium bg-blue-50"
          : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
        }`}
    >
      <span
        className={`w-1.5 h-1.5 rounded-full shrink-0 ${isActive ? "bg-blue-500" : "bg-gray-300"
          }`}
      />
      <span className="truncate">{label}</span>
    </Link>
  );
}