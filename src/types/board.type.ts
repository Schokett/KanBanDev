import type { Task } from "@/components/TaskCard";

export interface Board {
  id: string;
  name: string;
  columns: number;
  tasks: Task[];
}
