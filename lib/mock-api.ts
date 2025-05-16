import { tickets, todos } from "./mock-data";
import type { Ticket, Todo } from "./types";

export function fetchTickets(): Promise<Ticket[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(tickets);
    }, 1500);
  });
}

export function fetchTodos(): Promise<Todo[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(todos);
    }, 1500);
  });
}
