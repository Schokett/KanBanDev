import { Link, Outlet } from "react-router-dom";
import { CircleUserRound } from "lucide-react";
import { Button } from "@base-ui/react";
import { useState, useEffect } from "react";

function App() {
  const [name, setName] = useState(() => localStorage.getItem("username") ?? "Nutzer");

  useEffect(() => {
    const syncName = () => setName(localStorage.getItem("username") ?? "");

    window.addEventListener("storage", syncName); // andere Tabs
    window.addEventListener("username-changed", syncName); // gleicher Tab
    return () => {
      window.removeEventListener("storage", syncName);
      window.removeEventListener("username-changed", syncName);
    };
  }, []);
  return (
    <>
      <div className="bg-black h-20 flex justify-between items-center p-5">
        <Link to={`/boardoverview`}>
          <h1 className="cursor-pointer text-cyan-300 font-bold text-xl flex gap-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-layout-dashboard-icon lucide-layout-dashboard">
              <rect width="7" height="9" x="3" y="3" rx="1" />
              <rect width="7" height="5" x="14" y="3" rx="1" />
              <rect width="7" height="9" x="14" y="12" rx="1" />
              <rect width="7" height="5" x="3" y="16" rx="1" />
            </svg>
            KanBanDev
          </h1>
        </Link>
        <Link to={`/profile`}>
          <Button className="cursor-pointer text-center items-center flex text-slate-100 gap-2">
            <CircleUserRound className="text-gray-400" stroke-width="2" size={20} />
            {name}
          </Button>
        </Link>
      </div>
      <main className="p-4 mx-auto">
        <Outlet />
      </main>
    </>
  );
}

export default App;
