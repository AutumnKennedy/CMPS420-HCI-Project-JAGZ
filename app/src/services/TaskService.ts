import axios from "axios";
import { apiRoutes } from "../constants/routes";

interface Task {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

export async function getAllTasks() {
  const response = await axios.get<Task[]>(apiRoutes.tasks);

  return response.data;
}
