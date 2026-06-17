import { useSchoolContext } from "@/context/SchoolContext";
import { Direction } from "@/types/global.types";

export function useDirection(): Direction {
  const { language } = useSchoolContext();
  return language === "en" ? "ltr" : "rtl";
}