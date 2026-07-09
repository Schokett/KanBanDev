import { Button } from "@/components/ui/button";
import { Outlet } from "react-router-dom";
import { Plus } from "lucide-react";

function BoardOverview() {
  return (
    <section className="w-full max-w-300 mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-2 mt-5 justify-center text-center sm:flex-row items-center sm:justify-between">
        <h2>Meine Boards</h2>
        <Button className={"w-fit"}>
          <Plus className="mr-2 h-4 w-4" />
          Neues Board
        </Button>
      </div>

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
