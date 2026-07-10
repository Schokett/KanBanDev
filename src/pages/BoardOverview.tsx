import { Button } from "@/components/ui/button";
import { Link, Outlet } from "react-router-dom";
import { Plus, TrashIcon } from "lucide-react";
import { Card, CardAction, CardDescription, CardTitle } from "@/components/ui/card";

function BoardOverview() {
  return (
    <section className="w-full max-w-300 gap-5 flex flex-col ">
      <div className="flex flex-col gap-2 mt-5 justify-center text-center sm:flex-row items-center sm:justify-between">
        <h2 className="font-bold text-2xl">Meine Boards</h2>
        <Button className={"w-fit"}>
          <Plus className="mr-2 h-4 w-4" />
          Neues Board
        </Button>
      </div>

      <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <Link to={`/BoardOverview/board/1`}>
          <Card className="w-full flex-2 flex flex-row justify-between p-7 hover:shadow-md border border-slate-600">
            <div className="w-full">
              <CardTitle>Board</CardTitle>
              <CardDescription>
                <span className="">3 Spalten • </span>
                <span className="">0 Tasks</span>
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

        <Link to={`/BoardOverview/board/1`}>
          <Card className="w-full flex-2 flex flex-row justify-between p-7 hover:shadow-md border border-slate-600">
            <div className="w-full">
              <CardTitle>Board</CardTitle>
              <CardDescription>
                <span className="">3 Spalten • </span>
                <span className="">0 Tasks</span>
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

        <Link to={`/BoardOverview/board/1`}>
          <Card className="w-full flex-2 flex flex-row justify-between p-7 hover:shadow-md border border-slate-600">
            <div className="w-full">
              <CardTitle>Board</CardTitle>
              <CardDescription>
                <span className="">3 Spalten • </span>
                <span className="">0 Tasks</span>
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

        <Link to={`/BoardOverview/board/1`}>
          <Card className="w-full flex-2 flex flex-row justify-between p-7 hover:shadow-md border border-slate-600">
            <div className="w-full">
              <CardTitle>Board</CardTitle>
              <CardDescription>
                <span className="">3 Spalten • </span>
                <span className="">0 Tasks</span>
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
      </div>

      <div id="noEntrys" className="text-center justify-center mt-12 sm:mt-30">
        <p className="text-slate-500 font-medium">
          Noch keine Boards vorhanden. <br />
          <span className="font-normal">Erstelle dein erstes Board, um loszulegen!</span>
        </p>
      </div>

      <Outlet />
    </section>
  );
}
export default BoardOverview;
