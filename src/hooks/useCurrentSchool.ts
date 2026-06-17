import { useSchoolContext } from "@/context/SchoolContext";

export function useCurrentSchool() {
  const { school } = useSchoolContext();
  return school;
}