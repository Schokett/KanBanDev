import { Button } from "@/components/ui/button";
import { Outlet } from "react-router-dom";
import { Plus, TrashIcon } from "lucide-react";
import { Card, CardAction, CardDescription, CardTitle } from "@/components/ui/card";

function BoardOverview() {
  return (
    <section className="w-full max-w-300 mx-auto px-4 sm:px-6 lg:px-8 ">
      <div className="flex flex-col gap-2 mt-5 justify-center text-center sm:flex-row items-center sm:justify-between">
        <h2 className="font-bold ">Meine Boards</h2>
        <Button className={"w-fit"}>
          <Plus className="mr-2 h-4 w-4" />
          Neues Board
        </Button>
      </div>

      <section className="place-items-center lg:place-items-start">
        <Card className="w-full max-w-sm flex-2 flex flex-row justify-between p-4 mt-5">
          <div className="w-full">
            <CardTitle>Board</CardTitle>
            <CardDescription>
              <span className="">3 Spalten • </span>
              <span className="">0 Tasks</span>
            </CardDescription>
          </div>
          <div className="w-fit">
            <CardAction>
              <Button variant="link">
                <TrashIcon />
              </Button>
            </CardAction>
          </div>
        </Card>
      </section>

      <div className="text-center flex justify-center mt-12 sm:mt-30">
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
