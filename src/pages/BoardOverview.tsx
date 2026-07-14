import { Button } from "@/components/ui/button";
import { Link, Outlet } from "react-router-dom";
import { Plus, TrashIcon } from "lucide-react";
import { Card, CardAction, CardDescription, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useReducer, useState } from "react";
import boardReducer from "@/hooks/boardReducer";
import type { Board } from "@/types/board.type";

function BoardOverview() {
  const [name, setName] = useState("");
  const initialBoards: Board[] = [];

  const [boards, dispatch] = useReducer(boardReducer, initialBoards);

  return (
    <section className="w-full max-w-300 gap-4 flex flex-col ">
      <div className="flex sm:flex-row items-center justify-between">
        <h2 className="font-bold text-2xl">Meine Boards</h2>
        <Dialog>
          <DialogTrigger
            render={<Button className={"w-fit p-5 bg-cyan-400 text-black hover:bg-cyan-300"} />}>
            <Plus className="" />
            Neues Board
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Neues Board erstellen</DialogTitle>
              <DialogDescription>
                Gib dem Board einen Namen, Es werden automatisch drei Spalten angelegt (To Do, In
                Progress, Done).
              </DialogDescription>
            </DialogHeader>
            <Input
              id="newBoard"
              placeholder="Board-Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <DialogFooter>
              <DialogClose className={"flex gap-2"}>
                <Button variant="outline" onClick={() => setName("")}>
                  Abbrechen
                </Button>
                <Button
                  onClick={() => {
                    dispatch({
                      type: "ADD",
                      data: { id: crypto.randomUUID(), name, columns: 3, tasks: 0 },
                    });
                    setName("");
                  }}>
                  Speichern
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {boards.map((b) => (
          <Link key={b.id} to={`/BoardOverview/board/${b.id}`}>
            <Card className="w-full flex-2 flex flex-row justify-between p-7 hover:shadow-md border border-slate-600">
              <div className="w-full">
                <CardTitle>{b.name}</CardTitle>
                <CardDescription>
                  <span className="">{b.columns} Spalten • </span>
                  <span className="">{b.tasks} Tasks</span>
                </CardDescription>
              </div>
              <div className="w-fit">
                <CardAction>
                  <Button variant="ghost">
                    <TrashIcon
                      onClick={(e) => {
                        e.preventDefault();
                        dispatch({ type: "DELETE", data: { id: b.id } });
                      }}
                    />
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
