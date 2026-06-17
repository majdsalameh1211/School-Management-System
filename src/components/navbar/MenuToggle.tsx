import { Menu } from "lucide-react";
import { useSchoolContext } from "@/context/SchoolContext";

export function MenuToggle() {
  const { toggleSidebar } = useSchoolContext();

  return (
    <button
      type="button"
      onClick={toggleSidebar}
      className="p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-colors"
      aria-label="Toggle menu"
    >
      <Menu size={20} />
    </button>
  );
}