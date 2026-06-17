import { useSchoolContext } from "@/context/SchoolContext";

export function useCurrentUser() {
  const { user } = useSchoolContext();
  return user;
}