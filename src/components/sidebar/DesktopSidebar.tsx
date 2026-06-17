"use client";

import {
  LayoutDashboard,
  Users,
  School,
  BookOpen,
  Layers,
  Briefcase,
  ClipboardList,
  DollarSign,
  GraduationCap,
  Award,
  BarChart2,
  CalendarDays,
  ClockIcon,
  HardDrive,
  MessageSquare,
  Settings,
} from "lucide-react";
import { SidebarNavItem } from "./SidebarNavItem";
import { SidebarNavGroup } from "./SidebarNavGroup";
import { useSchoolContext } from "@/context/SchoolContext";
import { useTranslation } from "@/hooks/useTranslation";
import { useDirection } from "@/hooks/useDirection";

export function DesktopSidebar() {
  const { sidebarOpen, language } = useSchoolContext();
  const { t } = useTranslation(language);
  const collapsed = !sidebarOpen;

  const direction = useDirection();

  return (
    <aside
      dir={direction}
      className={`hidden md:flex flex-col shrink-0 h-full bg-white border-r border-gray-200 transition-all duration-200 ${collapsed ? "w-14" : "w-56"
        }`}
    >
      <nav className="flex flex-col gap-0.5 p-2 flex-1 overflow-y-auto">
        <SidebarNavItem
          label={t.dashboard}
          href="/dashboard"
          icon={LayoutDashboard}
          collapsed={collapsed}
        />
        <SidebarNavItem
          label={t.teachers}
          href="/teachers"
          icon={Users}
          collapsed={collapsed}
        />
        <SidebarNavItem
          label={t.classes}
          href="/classes"
          icon={School}
          collapsed={collapsed}
        />
        <SidebarNavItem
          label={t.subjects}
          href="/subjects"
          icon={BookOpen}
          collapsed={collapsed}
        />
        <SidebarNavItem
          label={t.academicTracks}
          href="/tracks"
          icon={Layers}
          collapsed={collapsed}
        />
        <SidebarNavItem
          label={t.staffRoles}
          href="/roles"
          icon={Briefcase}
          collapsed={collapsed}
        />
        <SidebarNavGroup
          label={t.assignments}
          icon={ClipboardList}
          collapsed={collapsed}
          basePath="/assignments"
          subItems={[
            { label: t.byTeacher, href: "/assignments/by-teacher" },
            { label: t.byClass, href: "/assignments/by-class" },
            { label: t.byGroup, href: "/assignments/by-group" },
            { label: t.byHomeroom, href: "/assignments/by-homeroom" },
            { label: t.bySubject, href: "/assignments/by-subject" },
          ]}
        />
        <SidebarNavItem
          label={t.salaryComponents}
          href="/salary/components"
          icon={DollarSign}
          collapsed={collapsed}
        />
        <SidebarNavItem
          label={t.bagrutBonus}
          href="/salary/bagrut-bonus"
          icon={GraduationCap}
          collapsed={collapsed}
        />
        <SidebarNavItem
          label={t.licenceBonus}
          href="/salary/licence-bonus"
          icon={Award}
          collapsed={collapsed}
        />
        <SidebarNavGroup
          label={t.reports}
          icon={BarChart2}
          collapsed={collapsed}
          basePath="/reports"
          subItems={[
            { label: t.teacherReport, href: "/reports/teacher" },
            { label: t.classReport, href: "/reports/class" },
            { label: t.subjectReport, href: "/reports/subject" },
          ]}
        />
        <SidebarNavItem
          label={t.academicYear}
          href="/academic-year"
          icon={CalendarDays}
          collapsed={collapsed}
        />
        <SidebarNavItem
          label={t.pendingRequests}
          href="/requests"
          icon={ClockIcon}
          collapsed={collapsed}
        />
        <SidebarNavItem
          label={t.backupRestore}
          href="/backup"
          icon={HardDrive}
          collapsed={collapsed}
        />
        <SidebarNavItem
          label={t.messages}
          href="/messages"
          icon={MessageSquare}
          collapsed={collapsed}
        />
        <SidebarNavItem
          label={t.schoolProfile}
          href="/school-profile"
          icon={Settings}
          collapsed={collapsed}
        />
      </nav>
    </aside>
  );
}