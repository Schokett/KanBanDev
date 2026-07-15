import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";

function Profile() {
  const [name, setname] = useState(() => localStorage.getItem("username") ?? "");
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    if (!saved) return;
    const timer = setTimeout(() => setSaved(false), 2000);
    return () => clearTimeout(timer);
  }, [saved]);

  return (
    <div className="w-full max-w-sm m-auto">
      <h2 className="font-bold text-2xl mb-5">Profil</h2>

      <Card className="w-full max-w-sm border-slate-800 border ">
        <CardHeader>
          <CardTitle className="font-semibold">Benutzername ändern</CardTitle>
          <CardDescription>Ändere deinen Anzeigenamen für das Kanban-Board.</CardDescription>
        </CardHeader>
        <CardContent className="gap-2 flex flex-col">
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  value={name}
                  type="text"
                  onChange={(e) => setname(e.target.value)}
                  placeholder="Dein Name"
                  className={"border rounded-sm p-2"}
                  required
                />
              </div>
            </div>
          </form>
          <div className="flex gap-2">
            <Button
              type="submit"
              onClick={() => {
                localStorage.setItem("username", name);
                window.dispatchEvent(new Event("username-changed"));
                setSaved(true);
              }}
              className="cursor-pointer bg-cyan-400  text-slate-800 max-w-fit py-2 px-3 font-semibold rounded-md ">
              Speichern
            </Button>
            {saved === true && <p className="text-green-600 place-content-center">Gespeichert!</p>}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
export default Profile;
