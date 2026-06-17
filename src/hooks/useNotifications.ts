import { useState } from "react";
import { Notification } from "@/types/school.types";

const DEMO_NOTIFICATIONS: Notification[] = [
  {
    id: "1",
    type: "pending_request",
    message: "New pending request from Sara Cohen",
    read: false,
    createdAt: new Date().toISOString(),
  },
  {
    id: "2",
    type: "teken_exceeded",
    message: "Teacher Ahmed Khalil exceeded 125% תקן limit",
    read: false,
    createdAt: new Date().toISOString(),
  },
  {
    id: "3",
    type: "backup_completed",
    message: "Backup completed successfully",
    read: true,
    createdAt: new Date().toISOString(),
  },
];

export function useNotifications() {
  const [notifications, setNotifications] =
    useState<Notification[]>(DEMO_NOTIFICATIONS);

  const unreadCount = notifications.filter((n) => !n.read).length;

  function markAllAsRead() {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  }

  function markAsRead(id: string) {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  }

  return { notifications, unreadCount, markAllAsRead, markAsRead };
}