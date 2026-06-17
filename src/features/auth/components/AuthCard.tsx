interface AuthCardProps {
  children: React.ReactNode;
}

export function AuthCard({ children }: AuthCardProps) {
  return (
    <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-gray-100 p-8 flex flex-col gap-6">
      {children}
    </div>
  );
}