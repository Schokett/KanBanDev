import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Check, Edit2, Plus } from "lucide-react";
import { Link } from "react-router-dom";
import { Input } from "@base-ui/react";
import { useState } from "react";

export interface Task {
  id: string;
  title: string;
  description: string;
}

function Board() {
  const [boardName, setBoardName] = useState("Test");
  const [isEditing, setIsEditing] = useState<Boolean>(false);

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
          <Card className="py-0 gap-0 mx-auto w-full max-w-xs border border-slate-500">
            <CardHeader className=" py-3 flex justify-between items-center ">
              <CardTitle className="font-semibold">
                To Do <span className="text-slate-500 text-xs font-medium">0</span>
              </CardTitle>
              <Button variant={"ghost"}>
                <Plus />
              </Button>
            </CardHeader>
            <CardFooter className="flex bg-transparent border-slate-500 place-content-center">
              <div className="flex w-full border border-slate-800 rounded-lg p-2 gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="gray"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-grip-vertical-icon lucide-grip-vertical">
                  <circle cx="9" cy="12" r="1" />
                  <circle cx="9" cy="5" r="1" />
                  <circle cx="9" cy="19" r="1" />
                  <circle cx="15" cy="12" r="1" />
                  <circle cx="15" cy="5" r="1" />
                  <circle cx="15" cy="19" r="1" />
                </svg>
                <div>
                  <h4 className="font-semibold">Überschrift</h4>
                  <p className="text-center line-clamp-2">Tasks vorhanden</p>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-trash2-icon lucide-trash-2">
                  <path d="M10 11v6" />
                  <path d="M14 11v6" />
                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
                  <path d="M3 6h18" />
                  <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                </svg>
              </div>
            </CardFooter>
          </Card>
        </div>
      </section>
    </div>
  );
}
export default Board;
