"use client";

import { useState } from "react";
import { Search, X } from "lucide-react";
import { useGlobalSearchShortcut } from "@/hooks/useGlobalSearchShortcut";
import { useTranslation } from "@/hooks/useTranslation";
import { useSchoolContext } from "@/context/SchoolContext";

export function GlobalSearch() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const { language } = useSchoolContext();
  const { t } = useTranslation(language);

  useGlobalSearchShortcut(() => setOpen(true));

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-md border border-gray-200 bg-gray-50 hover:bg-gray-100 transition-colors text-sm text-gray-400 w-48"
      >
        <Search size={14} />
        <span className="flex-1 text-left">Search...</span>
        <span className="text-xs text-gray-300 font-mono">Ctrl+K</span>
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4">
          <div
            className="absolute inset-0 bg-black/30"
            onClick={() => {
              setOpen(false);
              setQuery("");
            }}
          />
          <div className="relative w-full max-w-lg bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden">
            <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-100">
              <Search size={18} className="text-gray-400 shrink-0" />
              <input
                autoFocus
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={t.searchPlaceholder}
                className="flex-1 text-sm text-gray-800 placeholder-gray-400 outline-none bg-transparent"
              />
              <button
                type="button"
                onClick={() => {
                  setOpen(false);
                  setQuery("");
                }}
                className="text-gray-400 hover:text-gray-600"
              >
                <X size={16} />
              </button>
            </div>
            <div className="px-4 py-6 text-center text-sm text-gray-400">
              {query.length === 0
                ? "Start typing to search..."
                : `No results for "${query}"`}
            </div>
            <div className="px-4 py-2 border-t border-gray-100 flex items-center gap-3 text-xs text-gray-400">
              <span>Press</span>
              <kbd className="px-1.5 py-0.5 rounded bg-gray-100 font-mono">
                Esc
              </kbd>
              <span>to close</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}