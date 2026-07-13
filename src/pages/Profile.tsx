import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Button, Input } from "@base-ui/react";

function Profile() {
  return (
    <div className="w-fit m-auto">
      <h2 className="font-bold text-2xl mb-5">Profil</h2>

      <Card className="w-full max-w-sm border-slate-800 border">
        <CardHeader>
          <CardTitle className="font-semibold">Benutzername ändern</CardTitle>
          <CardDescription>Ändere deinen Anzeigenamen für das Kanban-Board.</CardDescription>
        </CardHeader>
        <CardContent className="gap-2 flex flex-col">
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Name</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Dein Name"
                  className={"border rounded-sm p-2"}
                  required
                />
              </div>
            </div>
          </form>
          <Button
            type="submit"
            className="bg-cyan-400 max-w-fit py-2 px-3 font-semibold rounded-md">
            Speichern
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
export default Profile;
