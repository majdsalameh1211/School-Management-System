import { SchoolPortalLayout } from "@/layouts/SchoolPortalLayout";

export default function SchoolLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SchoolPortalLayout>{children}</SchoolPortalLayout>;
}