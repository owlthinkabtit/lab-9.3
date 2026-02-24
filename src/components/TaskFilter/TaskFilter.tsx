// TaskFilter component
// allows user to select filters
// filters by status
// filters by priority
// calls onFilterChange when filters change

import type { TaskFilterProps } from "../../types";

export function TaskFilter({ onFilterChange }: TaskFilterProps) {
  return (
    <div style={{ marginBottom: "16px" }}>
      <button onClick={() => onFilterChange({})}>All</button>
      <button onClick={() => onFilterChange({ status: "pending"})}>Pending</button>
      <button onClick={() => onFilterChange({ status: "completed"})}>Completed</button>
    </div>
  )
}