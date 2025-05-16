"use client";

import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { TodoItem } from "@/components/todo/todo-item";
import { TextField, Button } from "@mui/material";
import type { Todo } from "@/lib/types";
import { todos as initialTodos } from "@/lib/mock-data";

export default function TodoPage() {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (newTodo.trim()) {
      const todo: Todo = {
        id: uuidv4(),
        title: newTodo,
        completed: false,
      };
      setTodos([todo, ...todos]);
      setNewTodo("");
    }
  };

  const toggleComplete = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id: string, newText: string) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, title: newText } : todo))
    );
  };

  return (
    <main className="mx-auto max-w-2xl space-y-6">
      <header>
        <h1 className="text-2xl font-bold text-white">To-Do List</h1>
      </header>

      <section
        aria-labelledby="task-section-title"
        className="rounded-lg border border-gray-700 bg-[#2a3042] shadow-sm"
      >
        <div className="border-b border-gray-700 p-4">
          <h2
            id="task-section-title"
            className="text-lg font-medium text-white"
          >
            My Tasks
          </h2>
        </div>

        <div className="p-4 space-y-4">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              addTodo();
            }}
            className="flex gap-2"
          >
            <TextField
              placeholder="Add a new task..."
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              size="small"
              fullWidth
              sx={{
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
                "& .MuiInputBase-input::placeholder": {
                  color: "rgba(255, 255, 255, 0.5)",
                  opacity: 1,
                },
              }}
            />
            <Button
              variant="contained"
              disableElevation
              sx={{
                backgroundColor: "#1e3a8a", // blue-900
                "&:hover": {
                  backgroundColor: "#1d4ed8", // blue-700
                },
              }}
            >
              ADD
            </Button>
          </form>

          {todos.length === 0 ? (
            <div className="rounded-lg border border-dashed border-gray-600 p-8 text-center">
              <h3 className="text-lg font-medium text-white">No tasks yet</h3>
              <p className="text-sm text-gray-400">Add a task to get started</p>
            </div>
          ) : (
            <ul className="space-y-2" aria-label="To-do items">
              {todos.map((todo) => (
                <li key={todo.id}>
                  <TodoItem
                    todo={todo}
                    onToggleComplete={toggleComplete}
                    onDelete={deleteTodo}
                    onEdit={editTodo}
                  />
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </main>
  );
}
