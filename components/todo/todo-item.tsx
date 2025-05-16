"use client";

import { useState } from "react";
import { Checkbox, IconButton, TextField } from "@mui/material";
import {
  Edit as EditIcon,
  Delete as DeleteIcon,
  Check as CheckIcon,
  Close as CloseIcon,
} from "@mui/icons-material";
import type { Todo } from "@/lib/types";

interface TodoItemProps {
  todo: Todo;
  onToggleComplete: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, newText: string) => void;
}

export function TodoItem({
  todo,
  onToggleComplete,
  onDelete,
  onEdit,
}: TodoItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.title);

  const handleSave = () => {
    if (editText.trim()) {
      onEdit(todo.id, editText);
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setEditText(todo.title);
    setIsEditing(false);
  };

  return (
    <article className="mb-2 flex items-center justify-between rounded-lg border border-gray-700 bg-[#2a3042] p-3 shadow-sm">
      {isEditing ? (
        <div className="flex flex-1 items-center gap-2">
          <TextField
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            fullWidth
            size="small"
            autoFocus
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
            }}
          />
          <IconButton
            size="small"
            onClick={handleSave}
            color="primary"
            aria-label="Save changes"
          >
            <CheckIcon fontSize="small" />
          </IconButton>
          <IconButton
            size="small"
            onClick={handleCancel}
            sx={{ color: "rgba(255, 255, 255, 0.7)" }}
            aria-label="Cancel edit"
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </div>
      ) : (
        <>
          <div className="flex items-center gap-2">
            <Checkbox
              checked={todo.completed}
              onChange={() => onToggleComplete(todo.id)}
              id={`todo-${todo.id}`}
              sx={{
                color: "rgba(255, 255, 255, 0.7)",
                "&.Mui-checked": {
                  color: "#90caf9",
                },
              }}
            />
            <label
              htmlFor={`todo-${todo.id}`}
              className={`text-sm ${
                todo.completed ? "text-gray-500 line-through" : "text-white"
              }`}
            >
              {todo.title}
            </label>
          </div>
          <div className="flex items-center gap-1">
            <IconButton
              size="small"
              onClick={() => setIsEditing(true)}
              disabled={todo.completed}
              sx={{
                color: "rgba(255, 255, 255, 0.7)",
                "&.Mui-disabled": {
                  color: "rgba(255, 255, 255, 0.3)",
                },
              }}
              aria-label="Edit task"
            >
              <EditIcon fontSize="small" />
            </IconButton>
            <IconButton
              size="small"
              onClick={() => onDelete(todo.id)}
              sx={{ color: "rgba(255, 255, 255, 0.7)" }}
              aria-label="Delete task"
            >
              <DeleteIcon fontSize="small" />
            </IconButton>
          </div>
        </>
      )}
    </article>
  );
}
