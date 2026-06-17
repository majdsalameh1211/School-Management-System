import { useSchoolContext } from "@/context/SchoolContext";

export function usePermissions() {
  const { user } = useSchoolContext();

  const permissions = user?.permissions ?? [];

  const canRead = permissions.includes("read");
  const canWrite = permissions.includes("write");
  const canEdit = permissions.includes("edit");
  const canAdmin = permissions.includes("admin");

  function hasPermission(permission: string) {
    return permissions.includes(permission);
  }

  return { canRead, canWrite, canEdit, canAdmin, hasPermission };
}