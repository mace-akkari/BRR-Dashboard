"use client";

import { useState } from "react";
import {
  Notifications as NotificationsIcon,
  AccountCircle,
  Person,
  Settings,
  Logout,
} from "@mui/icons-material";
import Image from "next/image";
import {
  Badge,
  Avatar,
  Menu,
  Popover,
  Typography,
  List,
  ListItem,
  Divider,
} from "@mui/material";

export default function Header() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [notifAnchorEl, setNotifAnchorEl] = useState<null | HTMLElement>(null);

  const notifications = [
    {
      id: 1,
      title: "Welcome Mace Akkari!",
      detail: "Your BRR Media account has been activated.",
    },
    {
      id: 2,
      title: "Team Meeting",
      detail: "10:00 AM — Meet the new starter Mace Akkari.",
    },
    {
      id: 3,
      title: "New Document Assigned",
      detail: "Please review the Q2 Onboarding Brief.",
    },
    {
      id: 4,
      title: "HR Update",
      detail: "Mace, complete your benefits enrollment by Friday.",
    },
    {
      id: 5,
      title: "Calendar Invite",
      detail: "1:1 with Mohamed Virji — Thursday at 3:00 PM.",
    },
    {
      id: 6,
      title: "Feedback Request",
      detail: "Share first impressions of onboarding process.",
    },
    {
      id: 7,
      title: "System Notice",
      detail: "Mace added to Internal Comms Slack channel.",
    },
  ];

  const menuItems = [
    { label: "Profile", icon: <Person fontSize="small" /> },
    { label: "Settings", icon: <Settings fontSize="small" /> },
    { label: "Logout", icon: <Logout fontSize="small" /> },
  ];

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleNotifClick = (event: React.MouseEvent<HTMLElement>) => {
    setNotifAnchorEl(event.currentTarget);
  };

  const handleNotifClose = () => {
    setNotifAnchorEl(null);
  };

  const notifOpen = Boolean(notifAnchorEl);
  const notifId = notifOpen ? "notifications-popover" : undefined;

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
            onClick={handleNotifClick}
          >
            <Badge badgeContent={notifications.length} color="error">
              <NotificationsIcon />
            </Badge>
          </button>
          <Popover
            id={notifId}
            open={notifOpen}
            anchorEl={notifAnchorEl}
            onClose={handleNotifClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
            slotProps={{
              paper: {
                sx: {
                  backgroundColor: "var(--brr-bg-color)",
                  color: "var(--brr-text-color)",
                  px: 0,
                  py: 0.5,
                  borderRadius: "0.75rem",
                  minWidth: 280,
                  maxHeight: 300,
                  overflowY: "auto",
                  boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)",
                  border: "1px solid rgba(255, 255, 255, 0.15)",
                },
              },
            }}
          >
            <div className="px-4 pt-3 pb-1">
              <Typography variant="subtitle1" className="font-medium text-text">
                You have {notifications.length} notifications
              </Typography>
            </div>
            <Divider sx={{ borderColor: "rgba(255, 255, 255, 0.1)", mb: 1 }} />

            <List disablePadding>
              {notifications.map((notification) => (
                <ListItem
                  key={notification.id}
                  disableGutters
                  className="px-4 py-2 transition-colors duration-150 rounded-md hover:bg-muted cursor-pointer"
                >
                  <div>
                    <p className="text-sm font-medium text-text">
                      {notification.title}
                    </p>
                    <p className="text-xs text-text-muted">
                      {notification.detail}
                    </p>
                  </div>
                </ListItem>
              ))}
            </List>
          </Popover>
          <button
            onClick={handleMenu}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-text hover:bg-border border border-white/20 shadow-md"
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
              minWidth: 280,
              px: 0,
              py: 0.5,
              borderRadius: "0.75rem",
              border: "1px solid rgba(255, 255, 255, 0.15)",
              boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)",
            },
          },
        }}
      >
        <div className="px-4 pt-3 pb-1">
          <p className="text-sm font-medium text-text">Mace Akkari</p>
          <p className="text-xs text-text-muted">makkari@brrmedia.co.uk</p>
        </div>

        <Divider sx={{ borderColor: "rgba(255, 255, 255, 0.1)", mb: 1 }} />

        {menuItems.map((item) => (
          <div
            key={item.label}
            onClick={handleClose}
            className="flex items-center gap-3 px-4 py-2 transition-colors duration-150 rounded-md hover:bg-muted cursor-pointer"
          >
            <span className="text-text">{item.icon}</span>
            <p className="text-sm font-medium text-text">{item.label}</p>
          </div>
        ))}
      </Menu>
    </header>
  );
}
