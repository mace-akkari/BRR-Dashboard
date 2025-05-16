import { Avatar, Chip } from "@mui/material";
import { CancelOutlined, CheckCircleOutlined } from "@mui/icons-material";
import type { StaffMember } from "@/lib/types";

interface StaffCardProps {
  staff: StaffMember;
}

export function StaffCard({ staff }: StaffCardProps) {
  return (
    <article className="overflow-hidden rounded-lg border border-gray-700 bg-[#2a3042] shadow-sm">
      <header className="p-4">
        <div className="flex items-center gap-4">
          <Avatar
            src={staff.avatar || "/placeholder.svg"}
            alt={staff.name}
            sx={{ width: 48, height: 48 }}
          />
          <div className="flex-1">
            <h3 className="font-semibold text-white">{staff.name}</h3>
            <p className="text-sm text-gray-300">{staff.role}</p>
          </div>
          <Chip
            icon={
              staff.status === "active" ? (
                <CheckCircleOutlined fontSize="small" />
              ) : (
                <CancelOutlined fontSize="small" />
              )
            }
            label={staff.status}
            aria-label={`${staff.name} is currently ${staff.status}`}
            title={`${staff.name} is currently ${staff.status}`}
            size="small"
            sx={{
              backgroundColor:
                staff.status === "active" ? "#16A34A" : "#6B7280",
              borderRadius: "9999px",
              paddingRight: "8px",
              paddingLeft: "4px",
              "& .MuiChip-label": {
                color: "white",
                fontWeight: 500,
                paddingLeft: "4px",
                paddingRight: 0,
              },
              "& .MuiChip-icon": {
                color: "#ffffff",
                marginLeft: 0,
                marginRight: "4px",
                fontSize: "18px",
              },
            }}
          />
        </div>
      </header>

      <section className="border-t border-gray-700 p-4">
        <dl className="space-y-2 text-sm">
          <div className="flex justify-between">
            <dt className="text-gray-400">Email:</dt>
            <dd className="text-white">{staff.email}</dd>
          </div>

          {staff.lastLogin && (
            <div className="flex justify-between">
              <dt className="text-gray-400">Last Login:</dt>
              <dd className="text-white">
                {new Date(staff.lastLogin).toLocaleString("en-GB", {
                  dateStyle: "medium",
                  timeStyle: "short",
                })}
              </dd>
            </div>
          )}

          {staff.driveUsage && (
            <div className="flex justify-between">
              <dt className="text-gray-400">Storage Used:</dt>
              <dd className="text-white">{staff.driveUsage}</dd>
            </div>
          )}

          {staff.device && (
            <div className="flex justify-between">
              <dt className="text-gray-400">Device:</dt>
              <dd className="text-white">{staff.device}</dd>
            </div>
          )}
        </dl>
      </section>
    </article>
  );
}
