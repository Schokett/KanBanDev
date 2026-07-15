import { Button } from "@/components/ui/button";
import { ArrowLeft, Check, Edit2, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import TasksCard from "@/components/TaskCard";
import type { Task } from "@/components/TaskCard";

const TASKS_STORAGE_KEY = "tasks";

const mockTasks: Task[] = [
  {
    id: "1",
    title: "Flur",
    task: "Wischen",
    person: "Nutzer",
    deadline: new Date("7.5.2011"),
    status: "todo",
  },
  {
    id: "2",
    title: "Flur",
    task: "Wischen",
    person: "Nutzer",
    deadline: new Date("8.2.2011"),
    status: "inprogress",
  },
];

function loadTasks(): Task[] {
  const stored = localStorage.getItem(TASKS_STORAGE_KEY);
  if (!stored) return mockTasks;
  const parsed: Task[] = JSON.parse(stored);
  return parsed.map((t) => ({ ...t, deadline: new Date(t.deadline) }));
}

function Board() {
  const [boardName, setBoardName] = useState("Board");
  const [previousName, setPreviousName] = useState("");
  const [isEditing, setIsEditing] = useState<Boolean>(false);
  const [tasks, setTasks] = useState<Task[]>(loadTasks);

  useEffect(() => {
    localStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  const startEditing = () => {
    setPreviousName(boardName);
    setIsEditing(true);
  };
  const confirmEditing = () => setIsEditing(false);

  const cancelEditing = () => {
    setBoardName(previousName);
    setIsEditing(false);
  };

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
            className={`font-bold text-2xl md:text-2xl border-none p-1 px-3 w-fit field-sizing-content ${
              isEditing
                ? "border-2 border-cyan-400 rounded-lg ring-2 ring-cyan-400/50"
                : "outline-none focus-visible:ring-0 focus-visible:border-input"
            }`}
            value={boardName}
            onChange={(e) => setBoardName(e.target.value)}
            readOnly={!isEditing}
            autoFocus={!isEditing}
            onKeyDown={(e) => {
              if (e.key === "Enter") setIsEditing(false);
            }}
          />
          {isEditing ? (
            <>
              <Button variant="ghost" size="icon-lg" onClick={confirmEditing}>
                <Check />
              </Button>
              <Button variant="ghost" size="icon-lg" onClick={cancelEditing}>
                <X />
              </Button>
            </>
          ) : (
            <Button variant="ghost" size="icon-lg" onClick={startEditing}>
              <Edit2 />
            </Button>
          )}
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
