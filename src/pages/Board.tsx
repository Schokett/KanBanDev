import { Button } from "@/components/ui/button";
import { ArrowLeft, Check, Edit2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Input } from "@base-ui/react";
import { useState } from "react";
import TasksCard from "@/components/TaskCard";
import type { Task } from "@/components/TaskCard";

function Board() {
  const [boardName, setBoardName] = useState("Test");
  const [isEditing, setIsEditing] = useState<Boolean>(false);
  const [tasks, setTasks] = useState<Task[]>([
    { id: "1", title: "Flur", task: "Wischen", status: "todo" },
    { id: "2", title: "Flur", task: "Wischen", status: "todo" },
    {
      id: "3",
      title: "Flurssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss",
      task: "Wischensssssssssssssssssssssssssssssssssssssssssssssssssss",
      status: "inprogress",
    },
    { id: "4", title: "Flur", task: "Wischen", status: "inprogress" },
    { id: "5", title: "Flur", task: "Wischen", status: "done" },
    { id: "6", title: "Flur", task: "Wischen", status: "done" },
  ]);

  const handleDrop = (id: string, status: Task["status"]) =>
    setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, status } : t)));

  return (
    <div className="">
      <section className="">
        <div className="flex gap-2  place-items-center">
          <Link to={`/boardoverview`}>
            <Button className={"flex items-center gap-2"} variant={"ghost"} size="icon-lg">
              <ArrowLeft />
            </Button>
          </Link>
          <Input
            className={`font-bold text-2xl p-1 px-3 field-sizing-content ${isEditing ? "border-2 border-cyan-400 rounded-lg" : "outline-none focus:ring-0"}`}
            value={boardName}
            onChange={(e) => setBoardName(e.target.value)}
            readOnly={!isEditing}
            autoFocus={!isEditing}
            onKeyDown={(e) => {
              if (e.key === "Enter") setIsEditing(false);
            }}
          />
          <Button
            className={"flex items-center gap-2"}
            variant={"ghost"}
            size="icon-lg"
            onClick={() => setIsEditing((prev) => !prev)}>
            {isEditing ? <Check /> : <Edit2 />}
          </Button>
        </div>

        <div className="mt-5 w-full flex gap-5">
          <TasksCard
            status="todo"
            title="To Do"
            tasks={tasks.filter((t) => t.status === "todo")}
            onDrop={handleDrop}
          />
          <TasksCard
            status="inprogress"
            title="In Progress"
            tasks={tasks.filter((t) => t.status === "inprogress")}
            onDrop={handleDrop}
          />
          <TasksCard
            status="done"
            title="Done"
            tasks={tasks.filter((t) => t.status === "done")}
            onDrop={handleDrop}
          />
        </div>
      </section>
    </div>
  );
}
export default Board;
