import { GraduationCap } from "lucide-react";
import Link from "next/link";

export function LogoBlock() {
  return (
    <Link
      href="/dashboard"
      className="flex items-center gap-2 hover:opacity-80 transition-opacity"
    >
      <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-600">
        <GraduationCap size={18} className="text-white" />
      </div>
      <span className="font-semibold text-gray-900 hidden md:block text-sm">
        School Management System
      </span>
      <span className="font-semibold text-gray-900 block md:hidden text-sm">
        SMS
      </span>
    </Link>
  );
}