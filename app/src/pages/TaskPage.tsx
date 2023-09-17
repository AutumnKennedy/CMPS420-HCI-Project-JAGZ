import { getAllTasks } from "../services/TaskService";

export function TaskPage(): React.ReactElement {
  const tasks = getAllTasks();

  console.log(tasks);

  return <div>Open console for tasks</div>;
}
