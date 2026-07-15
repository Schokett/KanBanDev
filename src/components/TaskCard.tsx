import { Button } from "./ui/button";
import * as React from "react";
import { Card, CardFooter, CardHeader, CardTitle } from "./ui/card";
import TasksItem from "./TaskItem";
import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon, Plus } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";
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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FieldLabel } from "@/components/ui/field";

export type Task = {
  id: string;
  title: string;
  task: string;
  person: string;
  deadline: Date;
  status: "todo" | "inprogress" | "done";
};

interface Props {
  status: "todo" | "inprogress" | "done";
  title: string;
  tasks: Task[];
  onDrop: (id: string, status: Task["status"]) => void;
}
type Person = {
  label: string;
  value: string;
};

function formatDate(date: Date | undefined) {
  if (!date) {
    return "";
  }
  return date.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

function isValidDate(date: Date | undefined) {
  if (!date) {
    return false;
  }
  return !isNaN(date.getTime());
}

function handleCreate() {
  console.log("Next Time");
}

function TasksCard({ status, title, tasks, onDrop }: Props) {
  const [open, setOpen] = React.useState(false);
  const [date, setDate] = React.useState<Date | undefined>(undefined);
  const [month, setMonth] = React.useState<Date | undefined>(new Date());
  const [value, setValue] = React.useState("");

  const person = localStorage.getItem("username") ?? "Gast";
  const assignees: Person[] = [
    { label: "Niemand", value: "Niemand" },
    { label: person, value: person },
  ];

  return (
    <>
      <Card
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => onDrop(e.dataTransfer.getData("tasksId"), status)}
        className="bg-transparent py-0 gap-0 mx-auto w-full max-w-xs border border-slate-500">
        <CardHeader className=" py-3 flex justify-between items-center">
          <CardTitle className="font-semibold flex gap-2">
            {title}
            <span className="text-slate-500 text-sx font-normal">{tasks.length}</span>
          </CardTitle>
          <Dialog>
            <DialogTrigger>
              <Button variant="ghost">
                <Plus />
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Neue Task erstellen</DialogTitle>
                <DialogDescription>Erstelle eine neue Aufgabe für diese Spalte.</DialogDescription>
              </DialogHeader>
              <FieldLabel htmlFor="input-field-username">Titel</FieldLabel>
              <Input id="newBoard" placeholder="Board-Name" />
              <FieldLabel htmlFor="input-field-username">Beschreibung</FieldLabel>
              <Input id="newBoard" placeholder="Was soll erledigt werden?" />
              <FieldLabel htmlFor="input-field-username">Zugewiesen an</FieldLabel>
              <Select items={assignees} defaultValue={person}>
                <SelectTrigger className="w-full" id="form-board">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {assignees.map((board) => (
                      <SelectItem key={board.label} value={board.label}>
                        {board.label}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
              <FieldLabel htmlFor="form-board">Deadline</FieldLabel>
              <InputGroup>
                <InputGroupInput
                  id="date-required"
                  value={value}
                  placeholder={formatDate(new Date())}
                  onChange={(e) => {
                    const date = new Date(e.target.value);
                    setValue(e.target.value);
                    if (isValidDate(date)) {
                      setDate(date);
                      setMonth(date);
                    }
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "ArrowDown") {
                      e.preventDefault();
                      setOpen(true);
                    }
                  }}
                />
                <InputGroupAddon align="inline-end">
                  <Popover open={open} onOpenChange={setOpen}>
                    <PopoverTrigger
                      render={
                        <InputGroupButton
                          id="date-picker"
                          variant="ghost"
                          size="icon-xs"
                          aria-label="Select date">
                          <CalendarIcon />
                          <span className="sr-only">Select date</span>
                        </InputGroupButton>
                      }
                    />
                    <PopoverContent
                      className="w-auto overflow-hidden p-0"
                      align="end"
                      alignOffset={-8}
                      sideOffset={10}>
                      <Calendar
                        mode="single"
                        selected={date}
                        month={month}
                        onMonthChange={setMonth}
                        onSelect={(date) => {
                          setDate(date);
                          setValue(formatDate(date));
                          setOpen(false);
                        }}
                      />
                    </PopoverContent>
                  </Popover>
                </InputGroupAddon>
              </InputGroup>
              <div className="flex gap-2 justify-end">
                <DialogClose render={<Button variant="ghost" />}>Abbrechen</DialogClose>
                <DialogClose render={<Button onClick={handleCreate} />}>Speichern</DialogClose>
              </div>
            </DialogContent>
          </Dialog>
        </CardHeader>
        <CardFooter className=" flex flex-col gap-2 p-2 bg-transparent border-slate-500">
          {tasks.map((t) => (
            <TasksItem
              key={t.id}
              {...t}
              draggable
              onDragStart={(e) => e.dataTransfer.setData("tasksId", t.id)}
            />
          ))}
        </CardFooter>
      </Card>
    </>
  );
}
export default TasksCard;
