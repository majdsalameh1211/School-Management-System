"use client";

import { X, ChevronRight } from "lucide-react";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import { useCurrentSchool } from "@/hooks/useCurrentSchool";
import { useTranslation } from "@/hooks/useTranslation";
import { useSchoolContext } from "@/context/SchoolContext";
import { useRouter } from "next/navigation";

interface MobileDrawerHeaderProps {
  onClose: () => void;
}

export function MobileDrawerHeader({ onClose }: MobileDrawerHeaderProps) {
  const user = useCurrentUser();
  const school = useCurrentSchool();
  const { language } = useSchoolContext();
  const { t } = useTranslation(language);
  const router = useRouter();

  function handleProfileClick() {
    onClose();
    router.push("/profile");
  }

  return (
    <div className="flex items-center justify-between p-4 border-b border-gray-100">
      {/* Minimal user block — clickable */}
      {user && (
        <button
          type="button"
          onClick={handleProfileClick}
          className="flex items-center gap-2.5 flex-1 min-w-0 hover:opacity-80 transition-opacity"
        >
          <div className="w-8 h-8 rounded-full bg-blue-600 text-white text-xs font-semibold flex items-center justify-center shrink-0">
            {user.firstName[0]}{user.lastName[0]}
          </div>
          <div className="flex flex-col min-w-0">
            <span className="text-sm font-semibold text-gray-800 truncate">
              {user.firstName} {user.lastName}
            </span>
            <span className="text-xs text-gray-400 truncate">
              {school?.name}
            </span>
          </div>
          <ChevronRight size={14} className="text-gray-300 shrink-0" />
        </button>
      )}

      {/* Close button */}
      <button
        type="button"
        onClick={onClose}
        className="p-1.5 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100 shrink-0 ml-2"
      >
        <X size={18} />
      </button>
    </div>
  );
}