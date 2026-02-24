import "./App.css";
import TaskList from "./components/TaskList/TaskList";

import type { Task } from "./types"


function App() {
  const initialTasks: Task[] = [
    {
      id: "1",
      title: "Finish the dang lab",
      description: "Complete this thing in time.",
      status: "pending",
      priority: "high",
      dueDate: "02-25-2026",
    },
    {
      id: "2",
      title: "Get back to movement",
      description: "Go to the gym consistantly",
      status: "in-progress",
      priority: "medium",
      dueDate: "02-02-2026",
    },
    {
      id: "3",
      title: "Laundry",
      description: "It sat long enough",
      status: "completed",
      priority: "low",
      dueDate: "02-15-2026",
    },
  ];

  return (
    <div style={{ padding: "24px", maxWidth: "600px", margin: "0 auto"}}>
      <h1>Task Manager</h1>
      <TaskList initialTasks={initialTasks} />
    </div>
  );
}

export default App;
