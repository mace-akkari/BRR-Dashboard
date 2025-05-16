import { Chip } from "@mui/material";
import {
  HourglassTop,
  Loop,
  CheckCircle,
  HelpOutline,
} from "@mui/icons-material";
import type { Ticket } from "@/lib/types";

interface TicketRowProps {
  ticket: Ticket;
}

export function TicketRow({ ticket }: TicketRowProps) {
  const getStatusChip = (status: string) => {
    switch (status.toLowerCase()) {
      case "open":
        return {
          icon: <HourglassTop sx={{ color: "#fff" }} fontSize="small" />,
          label: "Open",
          sx: {
            backgroundColor: "#facc15",
            color: "#000",
            fontWeight: 500,
            borderRadius: "9999px",
          },
        };
      case "in progress":
        return {
          icon: <Loop sx={{ color: "#fff" }} fontSize="small" />,
          label: "In Progress",
          sx: {
            backgroundColor: "#3b82f6",
            color: "#fff",
            fontWeight: 500,
            borderRadius: "9999px",
          },
        };
      case "resolved":
        return {
          icon: <CheckCircle sx={{ color: "#fff" }} fontSize="small" />,
          label: "Resolved",
          sx: {
            backgroundColor: "#22c55e",
            color: "#fff",
            fontWeight: 500,
            borderRadius: "9999px",
          },
        };
      default:
        return {
          icon: <HelpOutline sx={{ color: "#fff" }} fontSize="small" />,
          label: "Unknown",
          sx: {
            backgroundColor: "#6b7280",
            color: "#fff",
            fontWeight: 500,
            borderRadius: "9999px",
          },
        };
    }
  };

  const statusChip = getStatusChip(ticket.status);

  return (
    <article className="mb-3 flex flex-col space-y-2 rounded-lg border border-gray-700 bg-[#2a3042] p-4 shadow-sm md:flex-row md:items-center md:justify-between md:space-y-0">
      <div className="space-y-1">
        <h3 className="font-medium text-white">{ticket.issue}</h3>
        <p className="text-sm text-gray-300 line-clamp-2">
          {ticket.description}
        </p>
      </div>
      <div className="flex items-center gap-2">
        <Chip
          label={new Date(ticket.created).toLocaleDateString("en-GB")}
          variant="outlined"
          size="small"
          sx={{
            borderColor: "rgba(255,255,255,0.2)",
            color: "white",
            fontWeight: 500,
            borderRadius: "9999px",
          }}
        />
        <Chip
          icon={statusChip.icon}
          label={statusChip.label}
          size="small"
          sx={statusChip.sx}
          aria-label={`Status: ${statusChip.label}`}
          title={`Status: ${statusChip.label}`}
        />
      </div>
    </article>
  );
}
