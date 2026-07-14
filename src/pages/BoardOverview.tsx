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
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useEffect, useReducer, useState } from "react";
import boardReducer from "@/hooks/boardReducer";
import { getBoards, saveBoards } from "@/lib/api";

function BoardOverview() {
  const [name, setName] = useState("");

  const [boards, dispatch] = useReducer(boardReducer, getBoards());

  useEffect(() => {
    saveBoards(boards);
  }, [boards]);

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
            <div className="flex gap-2 justify-end">
              <DialogClose render={<Button variant="outline" onClick={() => setName("")} />}>
                Abbrechen
              </DialogClose>
              <DialogClose
                render={
                  <Button
                    onClick={() => {
                      dispatch({
                        type: "ADD",
                        data: { id: crypto.randomUUID(), name, columns: 3, tasks: 0 },
                      });
                      setName("");
                    }}
                  />
                }>
                Speichern
              </DialogClose>
            </div>
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
                  <Button
                    variant="ghost"
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch({ type: "DELETE", data: { id: b.id } });
                    }}>
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
