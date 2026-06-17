"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LucideIcon } from "lucide-react";

interface SidebarNavItemProps {
  label: string;
  href: string;
  icon: LucideIcon;
  collapsed: boolean;
}

export function SidebarNavItem({
  label,
  href,
  icon: Icon,
  collapsed,
}: SidebarNavItemProps) {
  const pathname = usePathname();
  const isActive = pathname === href || pathname.startsWith(href + "/");

  return (
    <Link
      href={href}
      className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors w-full ${isActive
          ? "bg-blue-50 text-blue-700 font-medium"
          : "text-gray-600 hover:bg-gray-100 hover:text-gray-800"
        }`}
      title={collapsed ? label : undefined}
    >
      <Icon
        size={18}
        className={`shrink-0 ${isActive ? "text-blue-600" : "text-gray-400"}`}
      />
      {!collapsed && <span className="truncate">{label}</span>}
    </Link>
  );
}