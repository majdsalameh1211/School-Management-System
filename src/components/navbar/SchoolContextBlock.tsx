import { useCurrentSchool } from "@/hooks/useCurrentSchool";

export function SchoolContextBlock() {
  const school = useCurrentSchool();

  if (!school) return null;

  return (
    <div className="hidden md:flex items-center gap-1 text-sm text-gray-600 border-l border-gray-200 pl-4">
      <span className="font-medium text-gray-800">{school.name}</span>
      <span className="text-gray-400">·</span>
      <span className="text-gray-500 font-mono text-xs" dir="ltr">
        {school.code}
      </span>
    </div>
  );
}