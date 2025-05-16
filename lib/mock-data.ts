import type { Ticket, Todo } from "./types";

export const tickets: Ticket[] = [
  {
    id: 101,
    user: "alice@brrmedia.co.uk",
    issue: "Hardware",
    description: "My laptop won't turn on after the recent update",
    status: "Open",
    created: "2025-05-16T09:30:00Z",
  },
  {
    id: 102,
    user: "bob@brrmedia.co.uk",
    issue: "Software",
    description: "Need access to the design software suite",
    status: "In Progress",
    created: "2025-05-10T14:15:00Z",
  },
  {
    id: 103,
    user: "dave@brrmedia.co.uk",
    issue: "Network",
    description: "Cannot connect to the company VPN from home",
    status: "Resolved",
    created: "2025-05-08T11:45:00Z",
  },
  {
    id: 104,
    user: "joe@brrmedia.co.uk",
    issue: "Account",
    description: "Need to reset my password for the CRM system",
    status: "Open",
    created: "2025-05-01T16:20:00Z",
  },
  {
    id: 105,
    user: "mohamed@brrmedia.co.uk",
    issue: "Resolved",
    description: "Need a React frontend developer",
    status: "In Progress",
    created: "2025-05-07T10:00:00Z",
  },
  {
    id: 106,
    user: "andy@brrmedia.co.uk",
    issue: "Resolved",
    description: "Request for a second monitor for my workstation",
    status: "In Progress",
    created: "2023-05-07T18:10:00Z",
  },
];

export const todos: Todo[] = [
  {
    id: 1,
    title: "Complete project documentation",
    completed: false,
  },
  {
    id: 2,
    title: "Review pull requests",
    completed: true,
  },
  {
    id: 3,
    title: "Prepare for team meeting",
    completed: false,
  },
  {
    id: 4,
    title: "Complete dashboard project",
    completed: true,
  },
  {
    id: 5,
    title: "Update system",
    completed: false,
  },
];
