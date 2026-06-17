"use client";

import { useCurrentUser } from "@/hooks/useCurrentUser";
import { useTranslation } from "@/hooks/useTranslation";
import { useSchoolContext } from "@/context/SchoolContext";

const roleColors: Record<string, string> = {
  Admin: "bg-purple-100 text-purple-700",
  Editor: "bg-blue-100 text-blue-700",
  Write: "bg-green-100 text-green-700",
  ReadOnly: "bg-gray-100 text-gray-600",
  SchoolManager: "bg-amber-100 text-amber-700",
};

const roleTranslationKeys: Record<string, string> = {
  Admin: "roleAdmin",
  Editor: "roleEditor",
  Write: "roleWrite",
  ReadOnly: "roleReadOnly",
  SchoolManager: "roleSchoolManager",
};

export function RoleBadge() {
  const user = useCurrentUser();
  const { language } = useSchoolContext();
  const { t } = useTranslation(language);

  if (!user) return null;

  const colorClass = roleColors[user.role] ?? "bg-gray-100 text-gray-600";
  const translationKey = roleTranslationKeys[user.role];
  const roleLabel = translationKey
    ? t[translationKey as keyof typeof t]
    : user.role;

  return (
    <span
      className={`hidden md:inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${colorClass}`}
    >
      {roleLabel}
    </span>
  );
}