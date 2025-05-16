import type { ReactNode } from "react";

export interface StatCardProps {
  title: string;
  value: string | number;
  icon: ReactNode;
  description?: string;
  className?: string;
}

export interface Ticket {
  id: number;
  user: string;
  issue: string;
  description: string;
  status: "Open" | "In Progress" | "Resolved";
  created: string;
}

export interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

export interface StaffMember {
  id: number;
  name: string;
  role: string;
  email: string;
  status: "active" | "inactive";
  avatar?: string;
  lastLogin?: string;
  driveUsage?: string;
  device?: string;
}
