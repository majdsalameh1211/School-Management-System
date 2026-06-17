"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { ChevronDown, LucideIcon } from "lucide-react";
import { SidebarSubItem } from "./SidebarSubItem";

interface SubItem {
  label: string;
  href: string;
}

interface SidebarNavGroupProps {
  label: string;
  icon: LucideIcon;
  collapsed: boolean;
  subItems: SubItem[];
  basePath: string;
}

export function SidebarNavGroup({
  label,
  icon: Icon,
  collapsed,
  subItems,
  basePath,
}: SidebarNavGroupProps) {
  const pathname = usePathname();
  const isGroupActive = pathname.startsWith(basePath);
  const [open, setOpen] = useState(isGroupActive);

  return (
    <div className="flex flex-col gap-0.5">
      <button
        type="button"
        onClick={() => !collapsed && setOpen((prev) => !prev)}
        className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors w-full ${
          isGroupActive
            ? "bg-blue-50 text-blue-700 font-medium"
            : "text-gray-600 hover:bg-gray-100 hover:text-gray-800"
        }`}
        title={collapsed ? label : undefined}
      >
        <Icon
          size={18}
          className={`shrink-0 ${
            isGroupActive ? "text-blue-600" : "text-gray-400"
          }`}
        />
        {!collapsed && (
          <>
            <span className="flex-1 text-left truncate">{label}</span>
            <ChevronDown
              size={14}
              className={`text-gray-400 transition-transform ${
                open ? "rotate-180" : ""
              }`}
            />
          </>
        )}
      </button>

      {!collapsed && open && (
        <div className="flex flex-col gap-0.5 mt-0.5">
          {subItems.map((item) => (
            <SidebarSubItem
              key={item.href}
              label={item.label}
              href={item.href}
              collapsed={collapsed}
            />
          ))}
        </div>
      )}
    </div>
  );
}