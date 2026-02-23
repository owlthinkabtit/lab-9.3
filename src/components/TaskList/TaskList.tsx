// TaskList component
// recieves an array of tasks
//loops through the tasks
// renders a TaskItem for each task
// passes down status change handler
// passes down delete handler

import type { TaskListProps } from "../../types";

export default function TaskList({tasks, onStatusChange, onDelete}: TaskListProps) {
  return (
    <>
      <h1>{tasks[0].title}</h1>
      <p>{tasks[0].description}</p>
      <p>{tasks[0].status}</p>
      <p>{tasks[0].priority}</p>
      <p>{tasks[0].dueDate}</p>
    </>
  )
}

/* 
{
  id: 'One'
  title: 'Another One'
  description: 'first'
  status: 'in-progress'
  priority: 'medium'
  dueDate: 'Feb'
}

*/