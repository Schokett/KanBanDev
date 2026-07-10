import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Check, Edit2, Plus } from "lucide-react";
import { Link } from "react-router-dom";
import { Input } from "@base-ui/react";
import { useState } from "react";

function Board() {
  const [boardName, setBoardName] = useState("Neues Board");
  const [isEditing, setIsEditing] = useState<Boolean>(false);

  return (
    <div className="">
      <section className="">
        <div className="flex">
          <Link to={`/boardoverview`}>
            <Button className={"flex items-center gap-2"} variant={"ghost"}>
              <ArrowLeft />
            </Button>
          </Link>
          <Input
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
            onClick={() => setIsEditing((prev) => !prev)}>
            {isEditing ? <Check size={12} /> : <Edit2 size={12} />}
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

          <Card className="gap-1 p-0 py-1 mx-auto w-full max-w-xs border-1 border-slate-500">
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

          <Card className="gap-1 p-0 py-1 mx-auto w-full max-w-xs border-1 border-slate-500">
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
