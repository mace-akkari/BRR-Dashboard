"use client";

import { useState } from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { TicketRow } from "@/components/tickets/ticket-row";
import { tickets } from "@/lib/mock-data";

export default function TicketsPage() {
  const [statusFilter, setStatusFilter] = useState("all");

  const filteredTickets = tickets.filter((ticket) => {
    if (statusFilter === "all") return true;
    return ticket.status.toLowerCase() === statusFilter.toLowerCase();
  });

  return (
    <main className="space-y-6">
      <header className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <h1 className="text-2xl font-bold text-white">My Tickets</h1>
        <FormControl
          size="small"
          className="w-[180px]"
          sx={{
            "& .MuiInputLabel-root": {
              color: "rgba(255, 255, 255, 0.7)",
            },
            "& .MuiOutlinedInput-root": {
              color: "white",
              "& fieldset": {
                borderColor: "rgba(255, 255, 255, 0.23)",
              },
              "&:hover fieldset": {
                borderColor: "rgba(255, 255, 255, 0.5)",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#90caf9",
              },
            },
            "& .MuiSelect-icon": {
              color: "rgba(255, 255, 255, 0.7)",
            },
          }}
        >
          <InputLabel id="status-filter-label">Filter by status</InputLabel>
          <Select
            labelId="status-filter-label"
            value={statusFilter}
            label="Filter by status"
            onChange={(e) => setStatusFilter(e.target.value)}
            MenuProps={{
              PaperProps: {
                sx: {
                  backgroundColor: "#2a3042",
                  color: "white",
                  "& .MuiMenuItem-root:hover": {
                    backgroundColor: "rgba(144, 202, 249, 0.08)",
                  },
                  "& .MuiMenuItem-root.Mui-selected": {
                    backgroundColor: "rgba(144, 202, 249, 0.16)",
                  },
                  "& .MuiMenuItem-root.Mui-selected:hover": {
                    backgroundColor: "rgba(144, 202, 249, 0.24)",
                  },
                },
              },
            }}
          >
            <MenuItem value="all">All Tickets</MenuItem>
            <MenuItem value="open">Open</MenuItem>
            <MenuItem value="in progress">In Progress</MenuItem>
            <MenuItem value="resolved">Resolved</MenuItem>
          </Select>
        </FormControl>
      </header>

      <section aria-label="Filtered Tickets" className="space-y-4">
        {filteredTickets.length === 0 ? (
          <div className="rounded-lg border border-dashed border-gray-600 p-8 text-center">
            <h2 className="text-lg font-medium text-white">No tickets found</h2>
            <p className="text-sm text-gray-400">
              You haven&apos;t submitted any IT support tickets yet.
            </p>
          </div>
        ) : (
          filteredTickets.map((ticket) => (
            <TicketRow key={ticket.id} ticket={ticket} />
          ))
        )}
      </section>
    </main>
  );
}
