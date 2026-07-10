import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Edit2, Plus } from "lucide-react";
import { useParams } from "react-router-dom";

function Board() {
  const { id } = useParams();
  return (
    <div className="">
      <section className="place-items-center lg:place-items-start flex flex-col">
        <Button className={"flex items-center gap-2"} variant={"ghost"}>
          <ArrowLeft />
          <p className="font-bold text-xl">Neues Board {id}</p>
          <Edit2 size={12} />
        </Button>

        <div className="mt-5 w-full grid grid-cols-6 gap-5">
          <Card className="gap-1 p-0 py-1 mx-auto w-full max-w-xs border-1 border-slate-500">
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
