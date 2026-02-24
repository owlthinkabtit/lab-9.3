// TaskList component
// recieves an array of tasks
//loops through the tasks
// renders a TaskItem for each task
// passes down status change handler
// passes down delete handler
import { useState } from "react";
import type { Task, TaskStatus } from "../../types";
import { TaskItem } from "../TaskItem/TaskItem";
import { TaskFilter } from "../TaskFilter/TaskFilter";

interface Props {
  initialTasks: Task[];
}
function TaskList({ initialTasks }: Props) {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [filter, setFilter] = useState<{ status?: TaskStatus }>({});

  function handleStatusChange(id: string, newStatus: TaskStatus) {
    setTasks(tasks => tasks.map(task => task.id === id ? {...task, status: newStatus } : task));
  }

  function handleDelete(id: string) {
    setTasks(tasks => tasks.filter(task => task.id !== id));
  }

  const filteredTasks = tasks.filter((task) => {
    if (filter.status) {
      return task.status === filter.status;
    }
    return true;
  });
  return (
    <div>
      <TaskFilter onFilterChange={setFilter} />

      {filteredTasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onStatusChange={handleStatusChange}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
}
 export default TaskList