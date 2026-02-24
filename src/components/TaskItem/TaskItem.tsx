// TaskItem component
// Single Task
// recevies one task object
//displays the tas title + description
//shows the task status and priority
// allow user to change task status
//all user to delete task

import type { TaskItemProps, TaskStatus } from "../../types";

export function TaskItem({ task, onStatusChange, onDelete}: TaskItemProps) {
  return (
    <div style={{
      border: "1px soild #ccc",
      padding: "12px",
      marginBottom: "8px",
      background: 
        task.status === "completed" ? "#e6ffe6" : "white"
    }}>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>Status: {task.status}</p>
      <p>Priority: {task.priority}</p>
      <button onClick={() => onStatusChange(task.id, "completed")}>Mark Complete</button>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </div>
  );
}