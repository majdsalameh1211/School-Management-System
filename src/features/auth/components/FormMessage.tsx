interface FormMessageProps {
  message: string | null;
  type?: "error" | "success";
}

export function FormMessage({ message, type = "error" }: FormMessageProps) {
  if (!message) return null;

  return (
    <div
      className={`w-full rounded-md px-4 py-3 text-sm ${
        type === "error"
          ? "bg-red-50 text-red-600 border border-red-200"
          : "bg-green-50 text-green-600 border border-green-200"
      }`}
      role="alert"
    >
      {message}
    </div>
  );
}