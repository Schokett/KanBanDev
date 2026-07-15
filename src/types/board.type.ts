import type { Task } from "@/components/TaskCard";

export interface Board {
  id: string;
  name: string;
  columns: number;
  tasks: Task[];
}

const boardExample: Board = {
  id: "asdasdas",
  name: "asdasdaw",
  columns: 3,
  tasks: [
    {
      id: "string",
      title: "string",
      task: "string",
      person: "string",
      deadline: new Date(),
      status: "todo",
    },
  ],
};
