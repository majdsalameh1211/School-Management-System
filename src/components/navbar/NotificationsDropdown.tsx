import { Bell } from "lucide-react";
import { Notification } from "@/types/school.types";
import { useTranslation } from "@/hooks/useTranslation";
import { useSchoolContext } from "@/context/SchoolContext";

interface NotificationsDropdownProps {
  notifications: Notification[];
  onMarkAllAsRead: () => void;
  onClose: () => void;
}

const notificationIcons: Record<Notification["type"], string> = {
  pending_request: "📋",
  request_approved: "✅",
  request_rejected: "❌",
  teken_exceeded: "⚠️",
  new_message: "✉️",
  backup_completed: "💾",
  year_copied: "📅",
  export_completed: "📤",
};

export function NotificationsDropdown({
  notifications,
  onMarkAllAsRead,
  onClose,
}: NotificationsDropdownProps) {
  const { language } = useSchoolContext();
  const { t } = useTranslation(language);
  const unread = notifications.filter((n) => !n.read);

  return (
    <div className="absolute top-full mt-2 right-0 z-20 w-80 bg-white border border-gray-200 rounded-xl shadow-xl overflow-hidden">
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
        <span className="text-sm font-semibold text-gray-800">
          {t.notifications}
        </span>
        {unread.length > 0 && (
          <button
            type="button"
            onClick={onMarkAllAsRead}
            className="text-xs text-blue-600 hover:underline"
          >
            {t.markAllAsRead}
          </button>
        )}
      </div>

      <div className="max-h-80 overflow-y-auto">
        {notifications.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-10 gap-2 text-gray-400">
            <Bell size={24} className="text-gray-300" />
            <span className="text-sm">{t.allCaughtUp}</span>
          </div>
        ) : (
          notifications.map((n) => (
            <div
              key={n.id}
              className={`flex items-start gap-3 px-4 py-3 border-b border-gray-50 hover:bg-gray-50 transition-colors ${
                !n.read ? "bg-blue-50/40" : ""
              }`}
            >
              <span className="text-lg shrink-0">{notificationIcons[n.type]}</span>
              <p className="text-sm text-gray-700 flex-1">{n.message}</p>
              {!n.read && (
                <div className="w-2 h-2 rounded-full bg-blue-500 shrink-0 mt-1.5" />
              )}
            </div>
          ))
        )}
      </div>

      <div className="px-4 py-2.5 border-t border-gray-100 text-center">
        <button
          type="button"
          onClick={onClose}
          className="text-xs text-blue-600 hover:underline"
        >
          {t.viewAllNotifications}
        </button>
      </div>
    </div>
  );
}