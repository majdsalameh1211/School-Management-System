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
  Search,
  User,
  KeyRound,
  LogOut,
} from "lucide-react";
import { SidebarNavItem } from "@/components/sidebar/SidebarNavItem";
import { SidebarNavGroup } from "@/components/sidebar/SidebarNavGroup";
import { useSchoolContext } from "@/context/SchoolContext";
import { useTranslation } from "@/hooks/useTranslation";

interface MobileDrawerNavigationProps {
  onClose: () => void;
}

export function MobileDrawerNavigation({
  onClose,
}: MobileDrawerNavigationProps) {
  const { language } = useSchoolContext();
  const { t } = useTranslation(language);

  return (
    <div className="flex flex-col flex-1 overflow-y-auto">
      <div className="px-4 py-3 border-b border-gray-100">
        <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-50 border border-gray-200">
          <Search size={14} className="text-gray-400" />
          <input
            type="text"
            placeholder={t.searchPlaceholder}
            className="flex-1 text-sm text-gray-700 placeholder-gray-400 outline-none bg-transparent"
          />
        </div>
      </div>

      <nav className="flex flex-col gap-0.5 p-2 flex-1" onClick={onClose}>
        <SidebarNavItem label={t.dashboard} href="/dashboard" icon={LayoutDashboard} collapsed={false} />
        <SidebarNavItem label={t.teachers} href="/teachers" icon={Users} collapsed={false} />
        <SidebarNavItem label={t.classes} href="/classes" icon={School} collapsed={false} />
        <SidebarNavItem label={t.subjects} href="/subjects" icon={BookOpen} collapsed={false} />
        <SidebarNavItem label={t.academicTracks} href="/tracks" icon={Layers} collapsed={false} />
        <SidebarNavItem label={t.staffRoles} href="/roles" icon={Briefcase} collapsed={false} />
        <SidebarNavGroup
          label={t.assignments}
          icon={ClipboardList}
          collapsed={false}
          basePath="/assignments"
          subItems={[
            { label: t.byTeacher, href: "/assignments/by-teacher" },
            { label: t.byClass, href: "/assignments/by-class" },
            { label: t.byGroup, href: "/assignments/by-group" },
            { label: t.byHomeroom, href: "/assignments/by-homeroom" },
            { label: t.bySubject, href: "/assignments/by-subject" },
          ]}
        />
        <SidebarNavItem label={t.salaryComponents} href="/salary/components" icon={DollarSign} collapsed={false} />
        <SidebarNavItem label={t.bagrutBonus} href="/salary/bagrut-bonus" icon={GraduationCap} collapsed={false} />
        <SidebarNavItem label={t.licenceBonus} href="/salary/licence-bonus" icon={Award} collapsed={false} />
        <SidebarNavGroup
          label={t.reports}
          icon={BarChart2}
          collapsed={false}
          basePath="/reports"
          subItems={[
            { label: t.teacherReport, href: "/reports/teacher" },
            { label: t.classReport, href: "/reports/class" },
            { label: t.subjectReport, href: "/reports/subject" },
          ]}
        />
        <SidebarNavItem label={t.academicYear} href="/academic-year" icon={CalendarDays} collapsed={false} />
        <SidebarNavItem label={t.pendingRequests} href="/requests" icon={ClockIcon} collapsed={false} />
        <SidebarNavItem label={t.backupRestore} href="/backup" icon={HardDrive} collapsed={false} />
        <SidebarNavItem label={t.messages} href="/messages" icon={MessageSquare} collapsed={false} />
        <SidebarNavItem label={t.schoolProfile} href="/school-profile" icon={Settings} collapsed={false} />
      </nav>

      <div className="border-t border-gray-100 p-2 flex flex-col gap-0.5">
        <SidebarNavItem label={t.myProfile} href="/profile" icon={User} collapsed={false} />
        <SidebarNavItem label={t.changePassword} href="/change-password" icon={KeyRound} collapsed={false} />
        <button
          type="button"
          onClick={() => (window.location.href = "/login")}
          className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-red-600 hover:bg-red-50 transition-colors"
        >
          <LogOut size={18} className="text-red-400 shrink-0" />
          <span>{t.logout}</span>
        </button>
      </div>
    </div>
  );
}