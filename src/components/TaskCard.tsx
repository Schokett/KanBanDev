import { Button } from "@base-ui/react";
import { Card, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Plus } from "lucide-react";
import TasksItem from "./TaskItem";

type Task = {
  id: string;
  title: string;
  task: string;
  status: "todo" | "inprogress" | "done";
};

interface Props {
  status: "todo" | "inprogress" | "done";
  title: string;
  tasks: Task[];
  onDrop: (id: string, status: string) => void;
}

function TasksCard({ status, title, tasks, onDrop }: Props) {
  return (
    <>
      <Card
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => onDrop(e.dataTransfer.getData("tasksId"), status)}
        className="bg-transparent py-0 gap-0 mx-auto w-full max-w-xs border border-slate-500">
        <CardHeader className=" py-3 flex justify-between items-center">
          <CardTitle className="font-semibold flex gap-2">
            {title}
            <span className="text-slate-500 text-sx font-normal">{tasks.length}</span>
          </CardTitle>
          <Button variant="ghost">
            <Plus />
          </Button>
        </CardHeader>
        <CardFooter className=" flex flex-col gap-2 p-2 bg-transparent border-slate-500">
          {tasks.map((t) => (
            <TasksItem
              key={t.id}
              {...t}
              draggable
              onDragStart={(e) => e.dataTransfer.setData("tasksId", t.id)}
            />
          ))}
        </CardFooter>
      </Card>
    </>
  );
}
export default TasksCard;
