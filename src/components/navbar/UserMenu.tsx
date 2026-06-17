"use client";

import { useState } from "react";
import { ChevronDown, User, KeyRound, LogOut } from "lucide-react";
import { useCurrentUser } from "@/hooks/useCurrentUser";

export function UserMenu() {
  const user = useCurrentUser();
  const [open, setOpen] = useState(false);

  if (!user) return null;

  const initials = `${user.firstName[0]}${user.lastName[0]}`.toUpperCase();

  function handleLogout() {
    window.location.href = "/login";
  }

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-gray-100 transition-colors"
      >
        <div className="w-7 h-7 rounded-full bg-blue-600 text-white text-xs font-semibold flex items-center justify-center">
          {initials}
        </div>
        <span className="hidden md:block text-sm font-medium text-gray-700">
          {user.firstName}
        </span>
        <ChevronDown size={14} className="hidden md:block text-gray-400" />
      </button>

      {open && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setOpen(false)}
          />
          <div className="absolute top-full mt-2 right-0 z-20 w-52 bg-white border border-gray-200 rounded-xl shadow-xl overflow-hidden">
            {/* User info */}
            <div className="px-4 py-3 border-b border-gray-100">
              <p className="text-sm font-semibold text-gray-800">
                {user.firstName} {user.lastName}
              </p>
              <p className="text-xs text-gray-500 truncate">{user.email}</p>
            </div>

            {/* Menu items */}
            <div className="py-1">
              <button
                type="button"
                onClick={() => {
                  setOpen(false);
                  window.location.href = "/profile";
                }}
                className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
              >
                <User size={15} className="text-gray-400" />
                My Profile
              </button>

              <button
                type="button"
                onClick={() => {
                  setOpen(false);
                  window.location.href = "/change-password";
                }}
                className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
              >
                <KeyRound size={15} className="text-gray-400" />
                Change Password
              </button>
            </div>

            {/* Logout */}
            <div className="border-t border-gray-100 py-1">
              <button
                type="button"
                onClick={handleLogout}
                className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition-colors"
              >
                <LogOut size={15} className="text-red-400" />
                Logout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}