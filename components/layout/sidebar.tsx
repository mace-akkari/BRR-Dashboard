"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Dashboard as DashboardIcon,
  People as PeopleIcon,
  HelpOutline as HelpIcon,
  ConfirmationNumber as TicketIcon,
  CheckBox as TodoIcon,
  Menu as MenuIcon,
  Close as CloseIcon,
} from "@mui/icons-material";

const navItems = [
  { name: "Dashboard", href: "/", icon: DashboardIcon },
  { name: "Staff Directory", href: "/staff", icon: PeopleIcon },
  { name: "IT Request", href: "/it-request", icon: HelpIcon },
  { name: "Tickets", href: "/tickets", icon: TicketIcon },
  { name: "To-Do List", href: "/todo", icon: TodoIcon },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="fixed left-4 top-4 z-50 rounded-md p-2 text-text-muted md:hidden"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <CloseIcon /> : <MenuIcon />}
      </button>

      <aside
        className={`fixed inset-0 z-40 transform bg-background transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        aria-label="Mobile navigation"
      >
        <nav className="h-full pt-16 overflow-y-auto" role="navigation">
          <ul className="space-y-1 px-2">
            {navItems.map(({ name, href, icon: Icon }) => {
              const isActive = pathname === href;
              return (
                <li key={name}>
                  <Link
                    href={href}
                    className={`flex items-center rounded-md px-4 py-3 text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-primary text-text"
                        : "text-text-muted hover:bg-muted hover:text-text"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    <Icon className="mr-3 h-5 w-5" />
                    {name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>

      <aside className="hidden w-64 flex-shrink-0 border-r border-border bg-background md:block">
        <div className="flex flex-col h-full">
          <header className="h-16 px-6 flex items-center">
            <h1 className="text-xl font-bold text-text">BRR Media Portal</h1>
          </header>

          <nav className="flex-1 py-4 px-3" aria-label="Sidebar navigation">
            <ul className="space-y-1">
              {navItems.map(({ name, href, icon: Icon }) => {
                const isActive = pathname === href;
                return (
                  <li key={name}>
                    <Link
                      href={href}
                      className={`flex items-center rounded-md px-4 py-3 text-sm font-medium transition-colors ${
                        isActive
                          ? "bg-primary text-text"
                          : "text-text-muted hover:bg-muted hover:text-text"
                      }`}
                    >
                      <Icon className="mr-3 h-5 w-5" />
                      {name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
}
