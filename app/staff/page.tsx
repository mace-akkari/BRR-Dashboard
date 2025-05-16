"use client";

import { useState } from "react";
import { StaffCard } from "@/components/staff/staff-card";
import { staffMembers } from "@/lib/mock-data";
import { TextField, InputAdornment } from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";

export default function StaffDirectory() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredStaff = staffMembers.filter(
    (staff) =>
      staff.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      staff.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      staff.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="space-y-6">
      <header className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <h1 className="text-2xl font-bold text-white">Staff Directory</h1>
        <TextField
          placeholder="Search for staff"
          size="small"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: "rgba(255, 255, 255, 0.7)" }} />
                </InputAdornment>
              ),
              sx: {
                color: "white",
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                borderRadius: "0.375rem",
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "rgba(255, 255, 255, 0.23)",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "rgba(255, 255, 255, 0.5)",
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#90caf9",
                },
                "&::placeholder": {
                  color: "rgba(255, 255, 255, 0.5)",
                  opacity: 1,
                },
              },
            },
          }}
          className="w-full md:w-[250px]"
        />
      </header>

      <section
        aria-label="Staff Cards"
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        {filteredStaff.map((staff) => (
          <StaffCard key={staff.id} staff={staff} />
        ))}
      </section>
    </main>
  );
}
