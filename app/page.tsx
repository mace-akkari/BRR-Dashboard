"use client";
import { useEffect, useState } from "react";
import {
  ConfirmationNumber as TicketIcon,
  CheckBox as TodoIcon,
  Notifications as NotificationIcon,
} from "@mui/icons-material";
import { StatCard } from "@/components/dashboard/stat-card";
import { fetchTickets, fetchTodos } from "@/lib/mock-api";
import type { Ticket, Todo } from "@/lib/types";

export default function Dashboard() {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [todos, setTodos] = useState<Todo[]>([]);
  const name = "Mace Akakri";
  const team = "Frontend";
  const quotes = [
    "One team, one mission.",
    "Progress over perfection.",
    "Strive for excellence.",
    "Stay focused, stay sharp.",
    "Quality is everyone’s responsibility.",
    "Make it simple, but significant.",
    "Small steps, big impact.",
  ];

  useEffect(() => {
    fetchTickets().then(setTickets);
    fetchTodos().then(setTodos);
  }, []);

  const [quote] = useState(
    () => quotes[Math.floor(Math.random() * quotes.length)]
  );

  const openTickets = tickets.filter(
    (ticket) => ticket.status === "Open"
  ).length;

  const pendingTasks = todos.filter((todo) => !todo.completed).length;
  const latestUpdates = 5;

  if (!tickets.length || !todos.length) {
    return (
      <main className="p-6 text-white text-center">
        <p>Loading your BRR Media dashboard...</p>
      </main>
    );
  }

  return (
    <main className="space-y-6">
      <header
        aria-labelledby="dashboard-heading"
        className="rounded-lg border border-gray-700 bg-[#2a3042] p-6 text-white shadow-lg"
      >
        <h1 id="dashboard-heading" className="text-2xl font-bold md:text-3xl">
          Welcome back, {name}!
        </h1>
        <p className="mt-2 text-white/80">
          {team} team's updates — don’t forget,{" "}
          <span className="font-semibold text-white">{quote}</span>
        </p>
      </header>

      <section aria-labelledby="summary-heading">
        <h2 id="summary-heading" className="sr-only">
          Quick Summary
        </h2>
        <div className="grid gap-4 md:grid-cols-3">
          <StatCard
            title="Open Tickets"
            value={openTickets}
            icon={<TicketIcon />}
            description="Awaiting response"
          />
          <StatCard
            title="Tasks Pending"
            value={pendingTasks}
            icon={<TodoIcon />}
            description="To be completed"
          />
          <StatCard
            title="Latest Updates"
            value={latestUpdates}
            icon={<NotificationIcon />}
            description="In the last 24 hours"
          />
        </div>
      </section>

      <section
        aria-labelledby="activity-heading"
        className="rounded-lg border border-gray-700 bg-[#2a3042] shadow-sm"
      >
        <header className="border-b border-gray-700 p-4">
          <h2 id="activity-heading" className="text-lg font-medium text-white">
            Recent Activity
          </h2>
        </header>
        <div className="p-4">
          <div className="space-y-4">
            {tickets.slice(0, 3).map((ticket) => (
              <article
                key={ticket.id}
                className="flex items-center gap-4 rounded-lg border border-gray-700 p-3"
                aria-label={`${ticket.issue} ticket`}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-900 text-blue-300">
                  <TicketIcon />
                </div>
                <div>
                  <p className="font-medium text-white">
                    {ticket.issue} Ticket
                  </p>
                  <p className="text-sm text-gray-300">{ticket.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
