import { Button } from "@/components/ui/button";
import { Link, Outlet } from "react-router-dom";
import { Plus, TrashIcon } from "lucide-react";
import { Card, CardAction, CardDescription, CardTitle } from "@/components/ui/card";

function BoardOverview() {
  const boards = [
    { id: "1", name: "Board", columns: 3, tasks: 2 },
    { id: "2", name: "Board2", columns: 2, tasks: 21 },
    { id: "4", name: "Board3", columns: 5, tasks: 1 },
    { id: "3", name: "Board5", columns: 8, tasks: 6 },
  ];

  return (
    <section className="w-full max-w-300 gap-4 flex flex-col ">
      <div className="flex sm:flex-row items-center justify-between">
        <h2 className="font-bold text-2xl">Meine Boards</h2>
        <Button className={"w-fit p-5 bg-cyan-400 text-black"}>
          <Plus className="" />
          Neues Board
        </Button>
      </div>

      <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {boards.map((boards) => (
          <Link to={`/BoardOverview/board/${boards.id}`}>
            <Card className="w-full flex-2 flex flex-row justify-between p-7 hover:shadow-md border border-slate-600">
              <div className="w-full">
                <CardTitle>{boards.name}</CardTitle>
                <CardDescription>
                  <span className="">{boards.columns} Spalten • </span>
                  <span className="">{boards.tasks} Tasks</span>
                </CardDescription>
              </div>
              <div className="w-fit">
                <CardAction>
                  <Button variant="ghost">
                    <TrashIcon />
                  </Button>
                </CardAction>
              </div>
            </Card>
          </Link>
        ))}
      </div>

      {boards.length === 0 && (
        <div className="text-center justify-center mt-12 sm:mt-30">
          <p className="text-slate-500 font-medium">
            Noch keine Boards vorhanden. <br />
            <span className="font-normal">Erstelle dein erstes Board, um loszulegen!</span>
          </p>
        </div>
      )}
      <Outlet />
    </section>
  );
}
export default BoardOverview;
