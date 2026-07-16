import { Calendar, CircleUserRound } from "lucide-react";
import type { Task } from "./TaskCard";

interface Props extends Pick<Task, "title" | "task" | "person" | "deadline" | "status"> {
  draggable?: boolean;
  onDragStart?: (e: React.DragEvent<HTMLDivElement>) => void;
}

function TasksItem({ title, task, person, deadline, status, draggable, onDragStart }: Props) {
  return (
    <>
      <div
        id={status}
        draggable={draggable}
        onDragStart={onDragStart}
        className="bg-white  cursor-grab flex w-full border justify-between border-slate-800 rounded-lg p-2 gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="gray"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-grip-vertical-icon lucide-grip-vertical shrink-0">
          <circle cx="9" cy="12" r="1" />
          <circle cx="9" cy="5" r="1" />
          <circle cx="9" cy="19" r="1" />
          <circle cx="15" cy="12" r="1" />
          <circle cx="15" cy="5" r="1" />
          <circle cx="15" cy="19" r="1" />
        </svg>
        <div className="w-full min-w-0 gap-1 flex flex-col text-xs">
          <h4 className="text-ellipsis line-clamp-2 font-semibold items-center">{title}</h4>
          <p className="text-ellipsis line-clamp-2 items-center text-slate-500">{task}</p>
          <div className="flex gap-1 text-slate-500 w-full h-auto items-center">
            <CircleUserRound className="size-3" />
            <p className="text-ellipsis line-clamp-2">{person}</p>
          </div>
          <div className="flex gap-1 text-slate-500 w-full h-auto items-center">
            <Calendar className="text-red-400 size-3" />
            <p className="text-ellipsis line-clamp-2 text-red-400">
              {deadline ? deadline.toLocaleDateString("de-DE") : "—"}
            </p>
          </div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-trash2-icon lucide-trash-2 shrink-0">
          <path d="M10 11v6" />
          <path d="M14 11v6" />
          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
          <path d="M3 6h18" />
          <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
        </svg>
      </div>
    </>
  );
}
export default TasksItem;
