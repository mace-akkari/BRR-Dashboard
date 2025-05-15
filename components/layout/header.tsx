"use client";

import { useState } from "react";
import {
  Notifications as NotificationsIcon,
  AccountCircle,
} from "@mui/icons-material";
import Image from "next/image";
import { Badge, Avatar, Menu, MenuItem } from "@mui/material";

export default function Header() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [notifications] = useState(7);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <header className="sticky top-0 z-30 w-full border-b bg-background px-4 sm:px-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between h-auto sm:h-16 py-2 sm:py-0">
        <div className="flex justify-center sm:justify-start mb-2 sm:mb-0">
          <Image
            src="/logo.png"
            alt="BRR Media Logo"
            width={120}
            height={40}
            className="h-10 w-auto object-contain"
            priority
          />
        </div>
        <div className="flex justify-center sm:justify-end items-center gap-4">
          <button
            className="relative rounded-full p-2 text-text-muted hover:bg-muted"
            aria-label="Notifications"
          >
            <Badge badgeContent={7} color="error">
              <NotificationsIcon />
            </Badge>
          </button>

          <button
            onClick={handleMenu}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-text hover:bg-border"
            aria-label="User menu"
          >
            <Avatar sx={{ width: 32, height: 32 }}>
              <AccountCircle />
            </Avatar>
          </button>
        </div>
      </div>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        slotProps={{
          paper: {
            sx: {
              backgroundColor: "var(--brr-bg-color)",
              color: "var(--brr-text-color)",
              minWidth: 240,
              px: 1.5,
              py: 1,
              borderRadius: "0.75rem",
            },
          },
        }}
      >
        <MenuItem onClick={handleClose}>
          <div className="flex flex-col space-y-0.5 py-2.5">
            <span className="text-lg font-medium text-text">Mace Akkari</span>
            <span className="text-sm text-text-muted">
              makkari@brrmedia.co.uk
            </span>
          </div>
        </MenuItem>

        {["Profile", "Settings", "Logout"].map((item) => (
          <MenuItem key={item} onClick={handleClose} disableRipple>
            <span className="block w-full rounded-md px-3 py-2.5 text-lg text-text hover:bg-muted transition-colors">
              {item}
            </span>
          </MenuItem>
        ))}
      </Menu>
    </header>
  );
}
