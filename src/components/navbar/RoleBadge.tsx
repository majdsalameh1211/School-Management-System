import { useCurrentUser } from "@/hooks/useCurrentUser";

const roleColors: Record<string, string> = {
  Admin: "bg-purple-100 text-purple-700",
  Editor: "bg-blue-100 text-blue-700",
  Write: "bg-green-100 text-green-700",
  ReadOnly: "bg-gray-100 text-gray-600",
  SchoolManager: "bg-amber-100 text-amber-700",
};

export function RoleBadge() {
  const user = useCurrentUser();

  if (!user) return null;

  const colorClass = roleColors[user.role] ?? "bg-gray-100 text-gray-600";

  return (
    <span
      className={`hidden md:inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${colorClass}`}
    >
      {user.role}
    </span>
  );
}