import { Language } from "@/types/global.types";

export interface School {
  id: string;
  code: string;
  name: string;
  type: "HighSchool" | "Intermediate";
}

export interface AcademicYear {
  id: string;
  label: string;
  isActive: boolean;
}

export interface CurrentUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  permissions: string[];
  language: Language;
}

export interface Notification {
  id: string;
  type:
    | "pending_request"
    | "request_approved"
    | "request_rejected"
    | "teken_exceeded"
    | "new_message"
    | "backup_completed"
    | "year_copied"
    | "export_completed";
  message: string;
  read: boolean;
  createdAt: string;
}