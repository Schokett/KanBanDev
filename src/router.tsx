import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Board from "./pages/Board";
import Profile from "./pages/Profile";
import BoardOverview from "./pages/BoardOverview";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        { index: true, element: <Board /> },
        { path: "boardoverview", element: <BoardOverview /> },
        { path: "board/:id", element: <Board /> },
        { path: "profile", element: <Profile /> },
      ],
    },
  ],
  {
    basename: "/KanBanDev/",
  },
);
