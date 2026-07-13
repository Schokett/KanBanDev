import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Check, Edit2, icons, Plus } from "lucide-react";
import { Link } from "react-router-dom";
import { Input } from "@base-ui/react";
import { useState } from "react";

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

        <div className="mt-5 w-full grid grid-cols-6 gap-5">
          <Card className="gap-1 p-0 py-1 mx-auto w-full max-w-xs border border-slate-500">
            <CardHeader className="flex justify-between items-center ">
              <CardTitle className="font-semibold">
                To Do <span className="text-slate-500 text-xs font-medium">0</span>
              </CardTitle>
              <Button variant={"ghost"}>
                <Plus />
              </Button>
            </CardHeader>
            <CardFooter className="bg-transparent border-t border-slate-500">
              {" "}
              <p className="text-slate-500 text-xs font-medium">Keine Tasks vorhanden</p>
            </CardFooter>
          </Card>

          <Card className="gap-1 p-0 py-1 mx-auto w-full max-w-xs border border-slate-500">
            <CardHeader className="flex justify-between items-center ">
              <CardTitle className="font-semibold">
                In Progress <span className="text-slate-500 text-xs font-medium">0</span>
              </CardTitle>
              <Button variant={"ghost"}>
                <Plus />
              </Button>
            </CardHeader>
            <CardFooter className="bg-transparent border-t border-slate-500">
              {" "}
              <p className="text-slate-500 text-xs font-medium">Keine Tasks vorhanden</p>
            </CardFooter>
          </Card>

          <Card className="gap-1 p-0 py-1 mx-auto w-full max-w-xs border border-slate-500">
            <CardHeader className="flex justify-between items-center ">
              <CardTitle className="font-semibold">
                Done <span className="text-slate-500 text-xs font-medium">0</span>
              </CardTitle>
              <Button variant={"ghost"}>
                <Plus />
              </Button>
            </CardHeader>
            <CardFooter className="bg-transparent border-t border-slate-500">
              {" "}
              <p className="text-slate-500 text-xs font-medium">Keine Tasks vorhanden</p>
            </CardFooter>
          </Card>
        </div>
      </section>
    </div>
  );
}
export default Board;
