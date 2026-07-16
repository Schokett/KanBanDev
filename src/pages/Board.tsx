import { Button } from "@/components/ui/button";
import { ArrowLeft, Check, Edit2, X } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import TasksCard from "@/components/TaskCard";
import type { Task } from "@/components/TaskCard";
import type { Board } from "@/types/board.type";
import { getBoards, saveBoards } from "@/lib/api";

function BoardDetail() {
  const [boardName, setBoardName] = useState("Board");
  const [previousName, setPreviousName] = useState("");
  const [isEditing, setIsEditing] = useState<Boolean>(false);
  const [board, setBoard] = useState<Board>({ id: "", name: "", tasks: [], columns: 3 });
  const { id } = useParams();

  useEffect(() => {
    const boards = getBoards();
    const currentBoard = boards.find((board) => board.id === id);
    if (currentBoard) {
      setBoard({
        ...currentBoard,
        tasks: currentBoard.tasks.map((t) => ({
          ...t,
          deadline: t.deadline ? new Date(t.deadline) : null,
        })),
      });
    }
  }, []);

  const startEditing = () => {
    setPreviousName(boardName);
    setIsEditing(true);
  };
  const confirmEditing = () => setIsEditing(false);

  const cancelEditing = () => {
    setBoardName(previousName);
    setIsEditing(false);
  };

  const handleDrop = (taskId: string, status: Task["status"]) => {
    setBoard((prev) => {
      const updated = {
        ...prev,
        tasks: prev.tasks.map((t) => (t.id === taskId ? { ...t, status } : t)),
      };
      const boards = getBoards();
      saveBoards(boards.map((b) => (b.id === updated.id ? updated : b)));
      return updated;
    });
  };

  const handleCreate = (task: Task) => {
    setBoard((prev) => {
      const updated = { ...prev, tasks: [...prev.tasks, task] };
      const boards = getBoards();
      saveBoards(boards.map((b) => (b.id === updated.id ? updated : b)));
      return updated;
    });
  };

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
            tasks={board.tasks.filter((t) => t.status === "todo")}
            onDrop={handleDrop}
            onCreate={handleCreate}
          />
          <TasksCard
            status="inprogress"
            title="In Progress"
            tasks={board.tasks.filter((t) => t.status === "inprogress")}
            onDrop={handleDrop}
            onCreate={handleCreate}
          />
          <TasksCard
            status="done"
            title="Done"
            tasks={board.tasks.filter((t) => t.status === "done")}
            onDrop={handleDrop}
            onCreate={handleCreate}
          />
        </div>
      </section>
    </div>
  );
}
export default BoardDetail;
