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
    <article className="mb-4 flex flex-col rounded-xl border border-gray-700 bg-[#1f2937] p-5 shadow-sm md:flex-row md:items-center md:justify-between">
      <div className="md:max-w-[60%]">
        <h3 className="text-lg font-semibold text-white">{ticket.issue}</h3>
        <p className="mt-1 text-sm text-gray-400">{ticket.description}</p>
      </div>

      <div className="mt-3 flex w-[240px] items-center justify-between gap-2 md:mt-0">
        <div className="w-fit">
          <Chip
            label={new Date(ticket.created).toLocaleDateString("en-GB")}
            variant="outlined"
            size="small"
            sx={{
              borderColor: "rgba(255,255,255,0.2)",
              color: "white",
              fontWeight: 500,
              borderRadius: "9999px",
              px: 1.5,
              whiteSpace: "nowrap",
            }}
          />
        </div>
        <div className="w-fit">
          <Chip
            icon={statusChip.icon}
            label={statusChip.label}
            size="small"
            sx={{
              ...statusChip.sx,
              px: 1.5,
              whiteSpace: "nowrap",
            }}
            aria-label={`Status: ${statusChip.label}`}
            title={`Status: ${statusChip.label}`}
          />
        </div>
      </div>
    </article>
  );
}
