import "./App.css";
import TaskList from "./components/TaskList/TaskList";

function App() {
  const arr = [
    {
      id: "One",
      title: "Another One",
      description: "first",
      status: "in-progress",
      priority: "medium",
      dueDate: "Feb",
    },
  ];

  return (
    <>
      <TaskList tasks={arr} onStatusChange={} onDelete={} />
    </>
  );
}

export default App;
